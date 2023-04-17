import Button from "../component/Button";
import Headline from "../component/Headline";
import Input from "../component/Input";
import styles from "./styles/Register.module.css";

export default function Register() {
  return <>
    <Headline text="Please register!" />
    <div class={styles.inputsDiv}>
      <Input 
        placeholder="example@xyz.com" 
        type="text" 
        headline="Email" 
        size="large" />
      <Input 
        placeholder="e. g. filipos" 
        type="text" 
        headline="Username" 
        size="large" />
      <Input 
        placeholder="" 
        type="password" 
        headline="Password" 
        size="large" />
    </div>
    <Button text="Register" />
    <div class={styles.register}>
      <a href="/login" class={styles.registerButton}>Already have an account? Login!</a>
    </div>
  </>
};