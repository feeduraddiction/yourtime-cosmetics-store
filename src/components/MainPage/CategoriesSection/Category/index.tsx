import Image from "next/image";
import classes from "./index.module.scss";

export interface categoryPropTypes {
  title: string;
  src: StaticImageData;
}

const Category = ({ title, src }: categoryPropTypes) => {
  return (
    <div className={classes.category}>
      <Image src={src} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Category;
