import Logo from "./logo";
import styles from "./header.module.css"

const Header = () => {
  return (
    <span className={styles.logo}>
      <Logo />
    </span>
  );
};

export default Header;
