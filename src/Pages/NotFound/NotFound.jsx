import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className= {styles.container}>
      <h1 className={styles.error}>Error 404</h1>
      <p className={styles.text_error}>Página no encontrada</p>
    </div>
  );
};

export default NotFound;
