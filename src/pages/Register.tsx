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
        headline="Email" />
      <Input 
        placeholder="e. g. filipos" 
        type="text" 
        headline="Username" />
      <Input 
        placeholder="" 
        type="password" 
        headline="Password" />
    </div>
    <Button text="Register" />
  </>
};