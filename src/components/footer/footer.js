import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { footerLinks } from "@/app/constants";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socials}>
          <h3>Follow Us</h3>
          <span className={styles.socialIcon}>
            {" "}
            <FaFacebookF />
          </span>
          <span className={styles.socialIcon}>
            {" "}
            <FaTwitter />
          </span>
          <span className={styles.socialIcon}>
            {" "}
            <FaYoutube />
          </span>
        </div>
        <div className={styles.footerMenu}>
          {footerLinks.map(({ id, title, navItems }) => {
            return (
              <div key={id} className={styles.footerMenuItems}>
                <h3>{title}</h3>
                <ul className={styles.footerNav}>
                  {navItems.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerNavigation}>
            <h2>
              Similar <span>Watch</span>{" "}
            </h2>
            <ul className={styles.footerLinkItems}>
              <li className={styles.footerLink}>Privacy policy</li>
              <li className={styles.footerLink}>Terms and Conditions</li>
              <li className={styles.footerLink}>Cookies policy</li>
              <li className={styles.footerLink}>About Us</li>
              <li className={styles.footerLink}>EULA</li>
              <li className={styles.footerLink}>Contact</li>
            </ul>
          </div>
          <span className={styles.darkToggle}>
            {" "}
            <CiDark size={32} />
          </span>
        </div>
      </div>
    </footer>
  );
}
