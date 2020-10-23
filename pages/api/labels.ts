import axios from "axios";

export default async (req, res) => {
  await axios({
    method: "GET",
    url: "https://api.github.com/repos/helipengtony/devDiary/labels",
    headers: {
      Authorization: "token " + "ab543ae954598c0c4a30" + "aff1381d562faaa9c739",
    },
  }).then((response) => {
    res.status(200).send(response.data);
  });
};
