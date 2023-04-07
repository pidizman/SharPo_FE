import { Component } from "solid-js";
import styles from "./styles/Headline.module.css";

interface Props {
  text: string;
}

const Headline: Component<Props> = (props) => {
  return <>
    <div class={styles.div}>
      <h3 class={styles.headline}>{props.text}</h3>
      <a class={styles.made}>
        <b>Made by Filipos.</b>
      </a>
    </div>
  </>
}

export default Headline;