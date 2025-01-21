import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVideoContext } from "../../Contexts/VideoContext";  // Asegúrate de que el contexto está correctamente configurado
import styles from "./EditModal.module.css"
import {
  ModalContainer,
  ModalTitle,
  Form,
  FormGroup,
  ButtonGroup,
} from "./EditModal.styled";

const EditModal = () => {
  const { id } = useParams(); // Obtener el id del video desde la URL
  const { videos, updateVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    video: "",
    descripcion: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Buscar el video con el id correspondiente
    const videoToEdit = videos.find((video) => video.id === parseInt(id));

    if (videoToEdit) {
      // Establecer los datos del video en el estado del formulario
      setFormData({
        titulo: videoToEdit.titulo,
        categoria: videoToEdit.categoria,
        img: videoToEdit.img,
        video: videoToEdit.video,
        descripcion: videoToEdit.descripcion,
      });
    }
  }, [id, videos]); // Actualizar cuando cambie el id o videos

  // Manejo del cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Actualizar el video
    updateVideo(id, formData);
    // Redirigir al usuario después de guardar
    navigate("/");
  };

  // Limpiar el formulario (opcional)
  const handleClear = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descripcion: "",
    });
  };

  return (
    <ModalContainer>
      <ModalTitle>Editar Video</ModalTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label>Título</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Categoría</label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Imagen</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Video (URL)</label>
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </FormGroup>

        <ButtonGroup>
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClear}>
            Limpiar
          </button>
        </ButtonGroup>
      </Form>
    </ModalContainer>
  );
};

export default EditModal;