import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import Markdown from "../../components/Markdown";
import ContentLoader from "react-content-loader";
import Link from "next/link";
import Foot from "../../components/Foot";

const fetcher = async (url): Promise<any> => {
  return await axios.get(url).then((res) => {
    return res.data;
  });
};

export default function Post() {
  const router = useRouter();
  const { number } = router.query;

  const { data, error } = useSWR("/api/issue/" + number, fetcher);

  if (error) return <div>Failed to load, please reload the page</div>;
  if (!data)
    return (
      <div>
        <main>
          <ContentLoader
            speed={2}
            width={100}
            style={{ width: "100%" }}
            height={250}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="3" ry="3" width="100%" height="30" />
            <rect x="0" y="40" rx="3" ry="3" width="80%" height="20" />

            <rect x="0" y="70" rx="3" ry="3" width="9%" height="20" />
            <rect x="10%" y="70" rx="3" ry="3" width="9%" height="20" />
            <rect x="20%" y="70" rx="3" ry="3" width="9%" height="20" />
            <rect x="30%" y="70" rx="3" ry="3" width="9%" height="20" />
            <rect x="40%" y="70" rx="3" ry="3" width="9%" height="20" />

            <rect x="0" y="150" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="170" rx="3" ry="3" width="90%" height="10" />
            <rect x="0" y="190" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="210" rx="3" ry="3" width="80%" height="10" />
            <rect x="0" y="230" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="250" rx="3" ry="3" width="60%" height="10" />
          </ContentLoader>
        </main>
        <Foot />
      </div>
    );

  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>"
        ></link>
      </Head>

      <div className="back">
        <Link href="/">
          <a>←</a>
        </Link>
      </div>

      <main className="post">
        <section className="title">
          <h1>{data.title}</h1>
          <ul>
            <li>#{data.number}</li>
            {data.labels
              ? data.labels.map((label) => {
                  return (
                    <li
                      key={label.id}
                      style={{ borderLeft: "3px solid #" + label.color }}
                    >
                      {label.name}
                    </li>
                  );
                })
              : ""}
          </ul>
        </section>
        <div className="markdown-body">
          <Markdown source={data.body} />
        </div>
        <div className="post-info">
          <div>
            Created at {data.created_at.replace("T", " ").replace("Z", " ")}
          </div>
          <div>
            <a target="_blank" href={data.html_url}>
              Github →
            </a>
          </div>
        </div>
      </main>

      <Foot />
    </div>
  );
}
