import classes from "../index.module.scss";

const Backdrop = ({ onClick }: { onClick: (e: React.MouseEvent) => void }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

export default Backdrop;
