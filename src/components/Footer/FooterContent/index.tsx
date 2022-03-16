import { Fragment } from "react";
import FooterContacts from "./FooterContacts";
import FooterLogo from "./FooterLogo";
import FooterSocial from "./FooterSoical";

import classes from "./index.module.scss";

const FooterContent = () => {
  return (
    <Fragment>
      <div className={classes.content}>
        <FooterLogo />
        <FooterContacts />
        <FooterSocial />
      </div>
    </Fragment>
  );
};

export default FooterContent;
