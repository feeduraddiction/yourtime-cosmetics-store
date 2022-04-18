import classes from "./index.module.scss";

const FooterContacts = () => {
  return (
    <div className={classes.contacts}>
      <h4>Contacts</h4>
      <a href="tel: +123456789123">+123 45 6789123</a>
      <a href="tel: +123456789124">+123 45 6789124</a>
      <a href="mailto:withlove@yourtime.com" className={classes.email}>
        withlove@yourtime.com
      </a>
    </div>
  );
};

export default FooterContacts;
