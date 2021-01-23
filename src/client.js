import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { hydrate } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

hydrate(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
