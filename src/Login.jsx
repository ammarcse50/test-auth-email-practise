import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase/firebase.config";

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;

    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
        // ..
      });
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="email" name="email" />

        <br />

        <input type="password" name="password" />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
