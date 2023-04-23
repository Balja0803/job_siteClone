import { useUserContext } from "../../context/UserContext";
import styles from "../styles/header.module.css";
import Link from "next/link";

export default function Header(): JSX.Element {
  const { user, setUser } = useUserContext();

  function handleLogout() {
    setUser(false);
  }

  return (
    <div className={styles.header}>
      <Link href={`/`}>
        <div className={styles.menu}>Menu</div>
      </Link>
      <div>Logo</div>
      <Link href={`/addjob`}>
        <div className={styles.post}>Post</div>
      </Link>
      {/* {user ? (
        <div>
          <div>Hi! {user}</div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <Link href={"/user/login"}>
          <div>LogIn</div>
        </Link>
      )} */}
      <Link href={"/user/login"}>
        <div>LogIn</div>
      </Link>
    </div>
  );
}
