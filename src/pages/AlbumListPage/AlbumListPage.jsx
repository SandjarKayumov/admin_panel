import React, { useEffect, useState } from "react";
import Album from "../../components/Album/Album";
import "./AlbumListPage.scss";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { Pagination } from "@mui/material";

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);
  const albumsURL = "https://jsonplaceholder.typicode.com/albums?_limit=18";
  const [isLoading, setIsLoading] = useState(false);
  const [isPagination, setPagination] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${albumsURL}/1`).then((response) => {
      setAlbums(response.data);
      setIsLoading(false);
      setPagination(true);
      console.log(response.data);
    });
  }, []);

  if (!albums) return null;

  return (
    <div>
      <h2 className="page__title">all albums</h2>
      <div className="albums__page">
        {isLoading && <Loader />}
        <Album albums={albums} />

      </div>
      {isPagination && (<Pagination className="pagination__center" color="primary" count="10" />
      )}
    </div>
  );
};

export default AlbumsPage;
