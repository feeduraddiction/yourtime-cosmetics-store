import HeroSectionContent from "./HeroSectionContent"
import classes from './index.module.scss';

const HeroSection = () => {
    return <section className={classes.heroSection}>
        <HeroSectionContent/>
    </section>
}

export default HeroSection;