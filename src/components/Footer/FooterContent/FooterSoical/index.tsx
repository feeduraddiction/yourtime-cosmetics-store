import SocialIcons from "./SocialIcons";
import classes from './index.module.scss';

const FooterSocial = () => {
  return (
    <div className={classes.social}>
      <h4>Follow us on social media</h4>
      <SocialIcons />
    </div>
  );
};

export default FooterSocial;
