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
        <meta name="keywords" content="笔记,diary,dev diary, 学习笔记, ouorz, tonyhe" />
      </Head>

      <main>
        <Top />
        <section className="section-two labels">
          <h1>Labels</h1>
          <p>All posts labels</p>
          <LabelsList exclude="UWaterloo,Course" />
        </section>
        <section className="section-two">
          <h1>Notes</h1>
          <p>Notes from lectures, teachers and other sources</p>
          <h2>CS 135</h2>
          <IssuesList label="CS 135" />
          <h2>MATH 137</h2>
          <IssuesList label="Math 137" />
          <h2>MATH 135</h2>
          <IssuesList label="Math 135" />
          <h2>ECON 101</h2>
          <IssuesList label="Econ 101" />
          <h2>EMLS 129R</h2>
          <IssuesList label="EMLS 129R" />
        </section>
      </main>

      <Foot />
    </div>
  );
}
