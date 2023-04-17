import { Component, createSignal } from "solid-js";
import styles from "./styles/Input.module.css";

interface Props {
  placeholder: string;
  type: string;
  headline: string;
  size: string;
  class?: {};
}

const Input: Component<Props> = (props) => {
  const [width, setWidth] = createSignal("");

  // dodelat veci okolo velikosti....

  if(props.size === "small"){
    // setWidth("calc(100vw - 190px)")
    setWidth("170px")
  } else if(props.size === "large"){
    setWidth("calc(100vw - 20px)")
  }
  console.log(width())
  
  return <>
    <a class={styles.headline}>{props.headline}</a>
    <input
      style={{
        "width": `${width()}`
      }} 
      class={styles.input}
      placeholder={props.placeholder} 
      type={props.type} />
  </>
}

export default Input;