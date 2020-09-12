import axios from "axios";

export default async (req, res) => {
  const {
    query: { number },
  } = req;
  if (number !== "undefined") {
    await axios({
      method: "GET",
      url: "https://v2.kkpp.cc/repos/helipengtony/devDiary/issues/" + number
    }).then((response) => {
      res.status(200).json(response.data);
    });
  } else {
    res.status(200).end("You failed");
  }
};
