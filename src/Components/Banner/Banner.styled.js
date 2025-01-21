import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 25px;
  box-shadow: 9px 21px 17px #83848ac7;
  width: 95%;
  height: 550px; /* Altura del banner */
`;

export const BannerBackground = styled.img`
  
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  filter: brightness(0.9);  
  border-radius: 25px;
  box-shadow: 9px 21px 17px #83848ac7;
`;

export const BannerImg = styled.img`
  width: 600px;
  border-radius: 15px;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
  
`;

export const BannerContent = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

export const BannerContentLeft = styled.div`
  flex: 1;
  padding: 1rem;
  width: 100%;
  

  @media (min-width: 740px) {
    font-size: .5rem;
    width: 10%;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 1.5rem;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  padding: 0.5rem 0.5rem;
  border-radius: 8px;
  display: inline-block;

 
  @media (min-width: 740px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

export const BannerTitleH1 = styled.h1`
  display:none;

  @media (min-width: 740px) {
    font-size: 1.5rem;
    display: flex;
    
  }

  @media (min-width:1200px){
    height: 100%; 


  }
`;

export const BannerTitleH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  padding: 0.5rem 0.5rem;
  border-radius: 8px;
  display: inline-block;

  @media (min-width: 740px) {
    font-size: 1.5rem;
    
  }

  @media (min-width:1200px){
    font-size: 2rem;


  }
`;

export const BannerDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;

  @media (min-width: 740px) {
  }
`;

export const BannerVideo = styled.div`
  flex: 0;

  @media (min-width: 740px) {
    flex: 1;
    text-align: center;
    position: relative; // Para asegurar que el video no se desborde
    height: 215px; // Fijamos el tamaño para que el video no cambie
    max-width: 100%; // Aseguramos que el contenedor tenga el 100% del ancho
    width: 100%;
    max-width: 600px; // Ajustamos el máximo del contenedor
    margin: 0 auto; // Centra el contenedor
    margin-right: 5rem;
  }

  @media (min-width:1200px){
    height: 315px; 


  }
`;

export const BannerIframeVideo = styled.iframe`
  object-fit: contain; // Ajusta el video sin cambiar la proporción
  width: 100%;
  height: 100%;
`;
