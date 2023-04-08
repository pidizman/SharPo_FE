import Button from "../component/Button";
import Headline from "../component/Headline";
import Input from "../component/Input";
import styles from "./styles/Login.module.css";
import "./styles/Login.module.css";

export default function Login() {
  return <>
    <Headline text="Welcome back!" />
    <div class={styles.inputs}>
      <Input placeholder="e. g. Filipos" type="text" headline="Username" />
      <Input placeholder="" type="password" headline="Password" />
      <a class={styles.forgotten} href="/">Forgotten password?</a>
    </div>
    <Button text="Login" />
    <br />
    <div class={styles.register}>
      <a href="/register" class={styles.registerButton}>No registred yet? Register now!</a>
    </div>
  </>
};