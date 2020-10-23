import axios from "axios";

export default async (req, res) => {
  const {
    query: { number },
  } = req;
  if (number !== "undefined") {
    await axios({
      method: "GET",
      url: "https://api.github.com/repos/helipengtony/devDiary/issues/" + number,
      headers: {
        Authorization:
          "token " + "ab543ae954598c0c4a30" + "aff1381d562faaa9c739",
      },
    }).then((response) => {
      res.status(200).json(response.data);
    });
  } else {
    res.status(200).end("You failed");
  }
};
