import axios from "axios";

interface IFeed {
  data: [
    {
      title: string;
      play: string; // video URL
      author: {
        id?: string;
        avatar: string;
        nickname: string;
        unique_id: string;
      };
      music: {
        title: string;
      };
    }
  ];
}

class Requests {
  private URL = "https://tiktok-video-no-watermark2.p.rapidapi.com/";

  private OPTION = {
    headers: {
      "X-RapidAPI-Key": "95e3a6980fmshceb0164206a25d0p191175jsna9fa5cab7dff",
      "X-RapidAPI-Host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
    params: {
      hd: 1,
    },
  };

  //-------FUNCTONS------------

  async getFeed() {
    const feedUrl = "feed/list?region=JP&count=20";

    return await axios.get<IFeed>(`${this.URL}${feedUrl}`, this.OPTION).then((res) => res.data);
  }
}

export default new Requests();
