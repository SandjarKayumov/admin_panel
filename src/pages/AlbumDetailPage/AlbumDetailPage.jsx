import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AlbumDetailPage.scss";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const AlbumDetailPage = ({ deleteAlbum }) => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [bigPhoto, setBigPhoto] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [album, setAlbum] = useState("");
  const [isShowViewDelete, setIsShowViewDelete] = useState(false);

  useEffect(() => {
    getPhotosByAlbumId();
  }, []);

  const getPhotosByAlbumId = async () => {
    if (!id) return;
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => res.data);
    setPhotos(res);
  };

  const showModal = (url) => {
    setBigPhoto(url);
    setIsOpenModal(true);
  };
  const viewImage = () => {
    console.log("img");
  };

//Create confirmation
  const deletePhoto = (id) => {
    console.log("DELETE", id)
    setPhotos(prev => prev.filter(i => i.id !== id))
  }
  return (
    <div>
      <h3 className="page__title">
        all album is ID: <strong>({id})</strong>
      </h3>
      <ul className="album__detail_items">
        {photos.map((i) => (
          <li className="album__detail_item" key={i.id}>
            <div className="album__detail_card" >
              <img src={i.thumbnailUrl} alt="" onClick={viewImage}   />
              <div className="album-detail__view__delete">
                <div className="view__delete_items">
                  <div className="view__delete_item">
                    <VisibilityIcon
                      className="view__img"
                      onClick={() => showModal(i.url)}
                      key={i.id}
                      fontSize="small"
                      style={{ marginBottom: "5px", cursor: "pointer" }}
                    />
                  </div>
                  <div className="view__delete_item">
                    <DeleteIcon
                      onClick={() => deletePhoto(i.id)}
                      fontSize="small"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="album__detail_card">
              <div className="album__detail_title">{i.title}</div>
            </div>
          </li>
        ))}
      </ul>

      {isOpenModal && (
        <Modal handleModal={() => setIsOpenModal(false)}>
          <img className="big__photo" src={bigPhoto} alt="" />
        </Modal>
      )}
    </div>
  );
};

export default AlbumDetailPage;
