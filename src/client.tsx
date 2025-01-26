import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

hydrateRoot(document, <App />);
console.log("Client loaded");
