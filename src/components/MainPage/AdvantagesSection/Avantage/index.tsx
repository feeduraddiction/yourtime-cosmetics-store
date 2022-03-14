import Image from "next/image";
import classes from './index.module.scss';


export interface advantagePropTypes {
    src: StaticImageData
    text: string
    description: string
}

const Advantage = ({src, text, description} : advantagePropTypes) => {
    return <div className={classes.advantage}>
        <Image src={src} alt={text}/>
        <h4>{text}</h4>
        <p>{description}</p>
    </div>
}

export default Advantage;