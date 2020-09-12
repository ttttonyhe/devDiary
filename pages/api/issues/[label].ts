import axios from "axios";

export default async (req, res) => {
  const {
    query: { label },
  } = req;
  if (label !== "undefined") {
    await axios({
      method: "GET",
      url:
        "https://v2.kkpp.cc/repos/helipengtony/devDiary/issues?labels=" + label
    }).then((response) => {
      res.status(200).json(response.data);
    });
  } else {
    res.status(404).end("You failed");
  }
};
