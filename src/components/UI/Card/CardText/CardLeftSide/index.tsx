import classes from './index.module.scss';

const CardLeftSide = ({brand, name}: {brand: string, name: string}) => {
  return (
    <div className={classes.leftSide}>
      <p>{brand}</p>
      <h5>{name}</h5>
    </div>
  );
};

export default CardLeftSide;
