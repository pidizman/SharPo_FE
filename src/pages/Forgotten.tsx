import Button from "../component/Button";
import Headline from "../component/Headline";
import Input from "../component/Input";
import styles from "./styles/Forgotten.module.css";

export default function Forgotten() {
  return <>
    <Headline text="Forgotten password!" />
    <div class={styles.inputs}>
      <Input placeholder="example@xyz.com" type="text" headline="Email" size="large" />
      <Input placeholder="" type="password" headline="New password" size="large" />
      <Input placeholder="" type="password" headline="Confirm password" size="large" />
    </div>
    <Button text="Change password" />
    <div class={styles.login}>
      <a href="/login" class={styles.loginButton}>Did you remember? Login!</a>
    </div>
  </>
};