import axios from "axios";

export default class Requests {
  private URL = "https://tiktok-video-no-watermark2.p.rapidapi.com/";

  private OPTION = {
    headers: {
      "X-RapidAPI-Key": "04bdf72ca9mshc607afc144c018fp1100efjsnc399b298164a",
      "X-RapidAPI-Host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
    params: {
      hd: 1,
    },
  };

  //-------FUNCTONS------------

  async getFeed() {
    return await axios
      .get(`${this.URL}`, this.OPTION)
      .then((res) => res.data)
      .catch((err) => console.warn(err));
  }
}
