import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
  CardTitle,
} from "./Card.styled";
import { useVideoContext } from "../../Contexts/VideoContext";

const Card = ({ video }) => {
  const navigate = useNavigate();
  const { deleteVideo } = useVideoContext();
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url) => {
    if (url.includes("embed")) return url;
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleEdit = () => {
    navigate(`/edit/${video.id}`);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <CardContainer>
      <div>
        {!isPlaying ? (
          <CardImage
            src={video.img}
            alt={video.titulo}
            onClick={handlePlay}
          />
        ) : (
          <iframe
            width="100%"
            height="300"
            src={getEmbedUrl(video.video)}
            title={video.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          <FaTrashAlt />
        </IconButton>
        <CardTitle>{video.titulo}</CardTitle>
        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
