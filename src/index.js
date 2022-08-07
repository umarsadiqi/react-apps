import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    </React.StrictMode>
);
