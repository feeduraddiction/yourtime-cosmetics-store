import Advantage from "./Avantage";
import classes from "./index.module.scss";
import shipment from "@assets/img/shipment.png";
import returning from "@assets/img/returning.png";
import support from "@assets/img/support.png";
import secure from "@assets/img/secure.png";

const AdvantagesSection = () => {
  return (
    <section className={classes.advantages}>
      <Advantage
        src={shipment}
        text="Free shipment"
        description="Oder orders over $ 30"
      />
      <Advantage
        src={returning}
        text="Free shipment"
        description="Oder orders over $ 30"
      />
      <Advantage
        src={secure}
        text="Free shipment"
        description="Oder orders over $ 30"
      />
      <Advantage
        src={support}
        text="Free shipment"
        description="Oder orders over $ 30"
      />
    </section>
  );
};

export default AdvantagesSection;
