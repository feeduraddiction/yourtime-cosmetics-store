import NewsSectionForm from "./NewsSectionForm";
import classes from './index.module.scss';

const NewsSectionContent = () => {
    return <div className={classes.content}>
        <h3>Newsletters</h3>
        <p>Receive monthly promotions on your favorite products</p>
        <NewsSectionForm/>
    </div>
}

export default NewsSectionContent;