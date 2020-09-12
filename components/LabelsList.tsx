import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import ContentLoader from "react-content-loader";

interface Props {
  exclude?: string;
}

const fetcher = async (url): Promise<any> => {
  return await axios.get(url).then((res) => {
    return res.data;
  });
};

const LabelsList = ({ exclude }: Props) => {
  // Transform exclude string to array
  const excludeNameArray = exclude ? exclude.split(",") : [];

  const { data, error } = useSWR("/api/labels", fetcher);

  if (error) return <div>Failed to load, please reload the page</div>;
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
        <rect x="0" y="8" rx="3" ry="3" width="23%" height="30" />
        <rect x="25%" y="8" rx="3" ry="3" width="23%" height="30" />
        <rect x="50%" y="8" rx="3" ry="3" width="23%" height="30" />
        <rect x="75%" y="8" rx="3" ry="3" width="23%" height="30" />

        <rect x="0" y="45" rx="3" ry="3" width="23%" height="30" />
        <rect x="25%" y="45" rx="3" ry="3" width="23%" height="30" />
        <rect x="50%" y="45" rx="3" ry="3" width="23%" height="30" />
        <rect x="75%" y="45" rx="3" ry="3" width="23%" height="30" />
      </ContentLoader>
    );

  return (
    <div>
      <ul>
        {data.length ? (
          data.map((item) => {
            if (excludeNameArray.indexOf(item.name) === -1) {
              return (
                <Link href={"/label/" + item.name} key={item.id}>
                  <li style={{ borderColor: "#" + item.color }}>
                    <span>{item.name}</span>
                  </li>
                </Link>
              );
            }
          })
        ) : (
          <li>
            <span>Nothing</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LabelsList;
