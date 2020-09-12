import axios from "axios";

export default async (req, res) => {
  await axios({
    method: "GET",
    url: "https://v2.kkpp.cc/repos/helipengtony/devDiary/labels"
  }).then((response) => {
    res.status(200).send(response.data);
  });
};
