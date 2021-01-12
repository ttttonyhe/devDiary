import Head from "next/head";
import LabelsList from "../components/LabelsList";
import IssuesList from "../components/IssuesList";
import Top from "../components/Top";
import Foot from "../components/Foot";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DEV Diary</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        ></link>
        <meta
          name="keywords"
          content="笔记,diary,dev diary, 学习笔记, ouorz, tonyhe"
        />
      </Head>

      <main>
        <Top />
        <section className="section-two labels">
          <LabelsList exclude="UWaterloo,Course" />
        </section>
      </main>

      <Foot />
    </div>
  );
}
