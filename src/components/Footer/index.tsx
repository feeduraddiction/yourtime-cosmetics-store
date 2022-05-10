import FooterContent from "./FooterContent";
import classes from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <FooterContent/>
      <p>
        © 2013-2022. YOURtime - online store of natural cosmetics. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
