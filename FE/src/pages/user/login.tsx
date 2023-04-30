/* eslint-disable @typescript-eslint/no-explicit-any */
// import { UserType } from "@/util/types";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/Login.module.css";
import { useUserContext } from "../../context/UserContext";

export default function Login(): JSX.Element {
  const router = useRouter();
  const { submitHandler } = useUserContext();

  function googleLogin() {
    axios
      .get("http://localhost:8008/google-login")
      .then((res) => router.push(res.data));
  }

  return (
    <div className={styles.logInFrom}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          Job<span className={styles.titleNow}>Site</span>
        </h2>
        <form onSubmit={submitHandler} className={styles.form}>
          <div className={styles.wrapper}>
            <div className={styles.wrapFrom}>
              <label>
                <p className={styles.h3title}>Email</p>
                <input
                  className={styles.logInInput}
                  name="email"
                  type="email"
                />
              </label>
              <label>
                <p className={styles.h3title}>Password</p>
                <input
                  className={styles.logInInput}
                  name="password"
                  type="password"
                />
              </label>
            </div>
            <Link href={`/user/forgetpassword`}>
              <span className={styles.forgetPassword}>Forgot password?</span>
            </Link>
            <div className={styles.buttons}>
              <button type="submit" className={styles.login}>
                Log in
              </button>

              <span className={styles.solid}>.</span>
              <Link href={`/user/register`}>
                <input
                  placeholder="register"
                  disabled
                  className={styles.register}
                />
              </Link>
              <button
                type="button"
                className={styles.login}
                onClick={googleLogin}
              >
                Google login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
