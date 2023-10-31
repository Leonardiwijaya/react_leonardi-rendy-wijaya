import { React } from "react";
import styles from "../assets/css/style.module.css";

export default function Content(props) {
  return (
    <div className="container-fluid row-cols-1" id={styles["create-product"]}>
      <img src={props.logo} alt="" />
      <h1>{props.article?.title[props.language]}</h1>
      <p>{props.article?.description[props.language]}</p>
    </div>
  );
}
