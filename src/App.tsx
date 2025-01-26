import { useState } from "react";

export function App(): React.ReactNode {
  const [count, setCount] = useState(0);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Deno app</title>
      </head>
      <body>
        <h1>Welcome to Deno 2.0 with React!</h1>
        <p>This is a simple React component.</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>You clicked {count} times</p>
      </body>
    </html>
  );
}
