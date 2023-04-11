import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Album.scss";
import { Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";

const Album = ({ albums }) => {
  return (
    <ul className="album__items">
      {albums &&
        albums.map((album) => (
          <li
            id={album.id}
            key={album.id}
            thumbnailUrl={album.thumbnailUrl}
            url={album.url}
          >
            <div className="album__item">
              <div className="album__number">
                <strong>Album №: {album.id}</strong>
              </div>
              <div className="album__title">{album.title}</div>
              <div className="view__delete">
                <Link to={`/album-detail-page/${album.id}`}>
                  <RemoveRedEyeIcon style={{ color: "#1565C0" }} />
                </Link>
                <DeleteIcon
                  style={{ color: "rgb(255 67 67)", cursor: "pointer" }}
                />
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Album;
