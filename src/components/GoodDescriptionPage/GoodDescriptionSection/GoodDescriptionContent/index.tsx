/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { goodDataPropTypes } from "src/utils/types/componentsTypes";
import GoodDescriptionCart from "./GoodDescriptionCart";
import GoodDescriptionContentText from "./GoodDescriptionContentText";
import classes from "./index.module.scss";

const GoodDescriptionContent = ({ goodData }: goodDataPropTypes) => {
  return (
    <div className={classes.content}>
      <img src={goodData.image} alt={goodData.name} />
      <div>
        <GoodDescriptionContentText
          name={goodData.name}
          description={goodData.description}
          brand={goodData.brand}
        />
        <GoodDescriptionCart goodData={goodData}/>
      </div>
    </div>
  );
};

export default GoodDescriptionContent;
