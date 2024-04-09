/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useFeed } from "../hooks/useFeed";

import "./feeds.scss";
import { useMemo } from "react";

export const Feed = () => {
  const { data, isLoading } = useFeed();

  return (
    <div className="feed">
      {isLoading ? (
        <span style={{ fontSize: "20em" }}>Идет загрузка</span>
      ) : (
        <>
          {data?.length &&
            data.map(({ title, author, play, music }, i) => (
              <div key={i} className="video_feeds">
                <Link to="/user" className="video-author flex">
                  <div className="video-author__image" style={{ backgroundImage: `url(${author.avatar})` }} />
                  <div className="video-author__info">
                    <p>{author.nickname}</p>
                    <span>{author.unique_id}</span>
                  </div>
                </Link>

                <div className="video-wrapper">
                  <video src={play} loop autoPlay={true} muted={true}></video>
                  <ul className="video-details flex">
                    {[].map((detailData, i) => (
                      <li key={i} className="video-details__item">
                        icon
                        <p>text</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="video-music flex">
                  <span>Music: </span>
                  <MusicNoteIcon />
                  <p className="video-music_title">{music.title}</p>
                </div>
                <div className="video-title">{title}</div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
