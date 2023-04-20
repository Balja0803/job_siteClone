/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "../../styles/Login.module.css";
import { UserType } from "@/util/types";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login(): JSX.Element {
  const router = useRouter();

  function submitHandler(event: any): void {
    event.preventDefault();

    const target = event.currentTarget.elements;

    const userLogin: UserType = {
      email: target.email.value,
      password: target.password.value,
    };
    console.log("user login", userLogin);
    axios
      .post(`http://localhost:8080/user/login`, userLogin)
      .then((res) => {
        if (res.data.success) {
          router.push("/success");
        } else {
          console.log("fail");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.wrapFrom}>
            <label>
              <p>Email:</p>
              <input type="email" name="email" />
            </label>
            <label>
              <p>Password:</p>
              <input type="password" name="password" />
            </label>
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.login}>
              Log in
            </button>
            <Link href={`/user/register`}>
              <input
                placeholder="register"
                disabled
                className={styles.register}
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}