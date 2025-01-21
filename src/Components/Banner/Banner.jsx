import { useState } from "react";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerContentLeft,
  BannerIframeVideo,
  BannerImg,
  BannerTitle,
  BannerTitleH1,
  BannerTitleH2,
  BannerVideo,
} from "./Banner.styled";
import banner1 from "./banner1.png"; // Imagen de fondo

const Banner = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Función para manejar el clic en la imagen
  const handlePlay = () => {
    setIsPlaying(true); // Cambia el estado para mostrar el iframe
  };

  // Función para manejar el clic en el video
  const getEmbedUrl = (url) => {
    if (url.includes("embed")) {
      return url;
    }
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <BannerContainer>
      {/* Imagen de fondo fija */}
      <BannerBackground src={banner1} alt="Banner de fondo" />

      <div        
      >
        <BannerContent          
        >
          {/* Contenido en la mitad izquierda */}
          <BannerContentLeft >
            <BannerTitle category={video.categoria}>
              {video.categoria}
            </BannerTitle>
              <BannerTitleH1>CHALLENGE REACT</BannerTitleH1>
              <BannerTitleH2>
                Este challenge es una forma de aprendizaje. Es un mecanismo donde
                podrás comprometerte en la resolución de un problema para poder
                aplicar todos los conocimientos adquiridos en la formación React.
              </BannerTitleH2>
          </BannerContentLeft>

          {/* Contenedor con la imagen del video */}
          <BannerVideo >
            {isPlaying ? (
              <BannerIframeVideo
                width="100%" // Se ajusta al tamaño del contenedor
                height="100%" // Se ajusta al tamaño del contenedor
                src={getEmbedUrl(video.video)} // Convertimos la URL del video al formato embed
                title={video.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen                
              ></BannerIframeVideo>
            ) : (
              <BannerImg
                src={video.img}
                alt={video.titulo}
                onClick={handlePlay} // Al hacer clic en la imagen se reproduce el video
                style={{
                  objectFit: "cover", // Esto asegura que la imagen se ajuste bien al contenedor
                  width: "100%",
                  height: "100%", // Se ajusta al tamaño del contenedor sin estirarse
                  maxWidth: "600px", // Establecemos un ancho máximo para que no se alargue
                  margin: "0 auto", // Centra la imagen
                }}
              />
            )}
          </BannerVideo>
        </BannerContent>
      </div>
    </BannerContainer>
  );
};

export default Banner;
