import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { menuItems } from "@/app/constants";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topNav}>
        <div className={styles.logo}>
          <h2>
            {" "}
            <span className={styles.logoIcon}>
              {" "}
              <IoMdSettings />{" "}
            </span>{" "}
            ZinTools
          </h2>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for Movies, TV Shows, Themes & Cast"
          />
          <span className={styles.border} />
          <FaSearch className={styles.searchIcon} />
        </div>
        <div className={styles.loginSignup}>
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
      <ul className={styles.navItems}>
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              <Link href={item.destination}>{item.itemText}</Link>{" "}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
