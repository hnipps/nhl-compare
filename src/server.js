import App from "./App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { ChakraProvider } from "@chakra-ui/react";
import getSets from "./server/get-sets";
import getStats from "./server/get-stats";
import getTeams from "./server/get-teams";
import { QueryClient, QueryClientProvider } from "react-query";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/", (req, res) => {
    const context = {};
    const queryClient = new QueryClient();
    const markup = renderToString(
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </ChakraProvider>
      </QueryClientProvider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });

server.get("/players", async (req, res) => {
  const players = await getSets();
  res.status(200).send(players);
});

server.get("/stats", async (req, res) => {
  const stats = await getStats();

  res.status(200).send(stats);
});

server.get("/sets", async (req, res) => {
  const sets = await getSets();

  res.status(200).send(sets);
});

server.get("/teams", async (req, res) => {
  const teams = await getTeams();

  res.status(200).send(teams);
});

export default server;
