import axios from "axios";

export default async (req, res) => {
  const {
    query: { label },
  } = req;
  if (label !== "undefined") {
    await axios({
      method: "GET",
      url:
        "https://v2.kkpp.cc/repos/helipengtony/devDiary/issues?labels=" + label,
      headers: {
        Authorization:
          "token " + "ab543ae954598c0c4a30" + "aff1381d562faaa9c739",
      },
    }).then((response) => {
      res.status(200).json(response.data);
    });
  } else {
    res.status(404).end("You failed");
  }
};
