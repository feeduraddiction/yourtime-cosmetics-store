import { goodsPropTypes } from 'src/utils/types/componentsTypes';
import classes from '../index.module.scss';
import Card from '@components/UI/Card';

const Goods = ({goods}:goodsPropTypes) => {
  return (
    <div className={classes.products}>
      {goods.map((good) => (
        <Card key={good.id} good={good} />
      ))}
    </div>
  );
};

export default Goods;
