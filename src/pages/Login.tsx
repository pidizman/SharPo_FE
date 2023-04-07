import Headline from "../component/Headline";
import styles from "./styles/login/Login.module.css";
import "./styles/login/Login.module.css";

export default function Login() {
  return <>
    <Headline text="dd" />
    <div class={styles.inputs}>
      <a class={styles.usernameText}>Username</a>
      <input class={styles.usernameInput} placeholder="e.g. Filipos" type="text" />
      <a class={`${styles.passwordText} ${styles.text}`}>Password</a>
      <input class={styles.passwordInput} type="password" />
      <a class={styles.forgotten} href={"/"}>Forgotten password?</a>
    </div>
    <div class={styles.login}>
      <button class={styles.loginButton}>Login</button>
    </div>
    <br />
    <div class={styles.register}>
      <a href="/" class={styles.registerButton}>No registred yet? Register now!</a>
    </div>
  </>
};