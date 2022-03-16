import classes from './index.module.scss';

const FooterContacts = () => {
  return (
    <div className={classes.contacts}>
      <h4>Contacts</h4>
      <p>+123 45 6789123</p>
      <p>+123 45 6789123</p>
      <p className={classes.email}>withlove@yourtime.com</p>
    </div>
  );
};

export default FooterContacts;
