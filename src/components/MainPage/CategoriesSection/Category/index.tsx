import { pathToCategory } from "@assets/functions";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./index.module.scss";

export interface categoryPropTypes {
  title: string;
  src: StaticImageData;
}

const Category = ({ title, src }: categoryPropTypes) => {
  const router = useRouter();

  return (
    <div className={classes.category}>
      <Image
        src={src}
        alt={title}
        onClick={() => router.push(`/catalogue/${pathToCategory(title)}`)}
      />
      <h4>{title}</h4>
    </div>
  );
};

export default Category;
