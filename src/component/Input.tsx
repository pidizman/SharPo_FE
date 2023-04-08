import { Component } from "solid-js";
import styles from "./styles/Input.module.css";

interface Props {
  placeholder: string;
  type: string;
  headline: string;
}

const Input: Component<Props> = (props) => {
  return <>
    <a class={styles.headline}>{props.headline}</a>
    <input 
      class={styles.input}
      placeholder={props.placeholder} 
      type={props.type} />
  </>
}

export default Input;