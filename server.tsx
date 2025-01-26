import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/serve-static";
import { renderToReadableStream } from "react-dom/server";
import { rolldown } from "rolldown";
import { App } from "./src/App.tsx";

const app = new Hono();

app.get("/", async (c) => {
  const bundle = await rolldown({
    input: "./src/client.tsx",
  });

  await bundle.write({
    format: "esm",
    minify: true,
    file: "./build.js",
  });

  const react = await renderToReadableStream(<App />, {
    bootstrapModules: ["./build.js"],
  });
  return c.body(react, {
    headers: {
      "content-type": "text/html",
    },
  });
});

app.use(
  "/build.js",
  serveStatic({
    root: "./",
    getContent: async (path, c) => {
      const file = await Deno.open(path);
      return new Response(file.readable, {
        headers: { "content-type": "application/javascript" },
      });
    },
  }),
);

Deno.serve(app.fetch);
