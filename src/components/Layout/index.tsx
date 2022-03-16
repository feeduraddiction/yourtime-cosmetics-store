import Footer from "@components/Footer";
import Header from "@components/Header";

export interface layoutPropTypes {
    children: React.ReactNode
}

const Layout = ({children}: layoutPropTypes) => {
    return ( <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  

    );
}

export default Layout;