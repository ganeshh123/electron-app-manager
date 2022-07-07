import ReactDom from "react-dom";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { WindowStoreProvider } from "./store";
import { AppRoutes } from "./routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 0,
      cacheTime: 0,
      retry: false,
    },
  },
});

import "./style.css";

ReactDom.render(
  <React.StrictMode>
    <WindowStoreProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </WindowStoreProvider>
  </React.StrictMode>,
  document.querySelector("app")
);
