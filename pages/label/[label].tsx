import Head from "next/head";
import IssuesList from "../../components/IssuesList";
import Top from "../../components/Top";
import { useRouter } from "next/router";
import Link from "next/link";
import Foot from "../../components/Foot";

export default function Label() {
  const router = useRouter();
  const { label } = router.query;
  return (
    <div>
      <Head>
        <title>{label}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏷️</text></svg>"
        ></link>
      </Head>

      <div className="back">
        <Link href="/">
          <a>←</a>
        </Link>
      </div>

      <main>
        <Top />
        <section className="section-two label">
          <h1>{label}</h1>
          <p>All posts under {label}</p>
          <IssuesList label={label} />
        </section>
      </main>

      <Foot />
    </div>
  );
}
