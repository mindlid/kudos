
export default function Index() {
  return (
    <div className="text-green-500"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcomes to Remix</h1>
      <span className="font-bold p-2 rounded-sm shadow-md hover:bg-red-900 bg-red-500 text-green-500">
        hella
      </span>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer noopener"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer noopener"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer noopener"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
