import OrderInput from "./OrderInput";
import classes from './index.module.scss';
const OrderPageContent = () => {
    return <main className={classes.content}>
        <OrderInput />
    </main>
}

export default OrderPageContent;