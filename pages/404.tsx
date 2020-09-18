import Head from "next/head";
import Foot from "../components/Foot";
import Link from "next/link";

export default function F0F() {
  return (
    <div>
      <Head>
        <title>404 Not Found</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😭</text></svg>"
        ></link>
      </Head>

      <div className="back">
        <Link href="/">
          <a>←</a>
        </Link>
      </div>

      <main className="post">
        <div className="error">
          <h1>404 Not Found</h1>
          <p>Try again later...</p>
        </div>
      </main>

      <Foot />
    </div>
  );
}
