import classes from './index.module.scss';

export interface buttonPropTypes {
    children: any
}

const Button = ({children} : buttonPropTypes) => {
    return <button className={classes.button}>{children}</button>
}

export default Button;