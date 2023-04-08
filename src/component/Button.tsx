import { Component } from "solid-js";
import styles from "./styles/Button.module.css";

interface Props {
  text: string;
};

const Button: Component<Props> = (props) => {
  return <>
    <div class={styles.div}>
      <button class={styles.button}>{props.text}</button>
    </div>
  </>
};

export default Button;