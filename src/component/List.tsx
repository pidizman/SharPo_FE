import { Component } from "solid-js";
import styles from "./styles/List.module.css";
import { FiSettings } from "solid-icons/fi";

import boat from "../public/boat.png";

interface Props {
  name: string;
  date: string;
};

const List: Component<Props> = (props) => {
  return <>
    <div class={styles.inner}>
      <div class={styles.div}>
        <div class={styles.imgDiv}>
          <img src={boat} alt="A random Boat image." class={styles.image}/>
        </div>
        <div class={styles.icon}>
          <FiSettings size={34} color="#ffffff" />
        </div>
        <div class={styles.text}>
          <h3 class={styles.name}>{props.name}</h3>
          <p class={styles.date}>{props.date}</p>
        </div>
      </div>
    </div>
  </>
};

export default List;