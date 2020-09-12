import React from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import ContentLoader from "react-content-loader";

interface Props {
  label?: string | string[];
}

const fetcher = async (url): Promise<any> => {
  return await axios.get(url).then((res) => {
    return res.data;
  });
};

const IssuesList = ({ label }: Props) => {
  const { data, error } = useSWR("/api/issues/" + label, fetcher);

  if (error)
    return (
      <div className="issues">
        <ul>
          <li>
            <i className="ri-close-circle-line"></i> An error has occurred
          </li>
        </ul>
      </div>
    );
  if (!data)
    return (
      <ContentLoader
        speed={2}
        width={100}
        style={{ width: "100%" }}
        height={90}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="20" />
        <rect x="0" y="30" rx="3" ry="3" width="100%" height="20" />
        <rect x="0" y="60" rx="3" ry="3" width="100%" height="20" />
      </ContentLoader>
    );

  if (data.length) {
    return (
      <div className="issues">
        <ul>
          {data.map((item) => {
            return (
              <Link href={"/post/" + item.number} key={item.id}>
                <li>
                  <i className="ri-article-line"></i> {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="issues">
        <ul>
          <li><i className="ri-close-circle-line"></i> Nothing is here</li>
        </ul>
      </div>
    );
  }
};

export default IssuesList;
