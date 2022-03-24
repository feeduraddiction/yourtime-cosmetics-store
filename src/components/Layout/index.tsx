import Footer from "@components/Footer";
import Header from "@components/Header";
import classes from './index.module.scss';

export interface layoutPropTypes {
    children: React.ReactNode
}

const Layout = ({children}: layoutPropTypes) => {
    return ( <div className={classes.layout}>
      <Header/>
      {children}
      <Footer/>
    </div>
  

    );
}

export default Layout;