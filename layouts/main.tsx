/*react*/
import { FC, ReactNode } from "react";

/*components*/
import Contact from "../components/contact";
import Header from "../components/header";

/*styles*/
import Styles from "../styles/layouts/main.module.css";


interface MyProps {
    children: ReactNode;
 }

const headerOnly : FC<MyProps> =  ({children}) => {

    return <div className="d-flex flex-column w-100 position-relative">
        <header className={Styles.header}><Header/></header>
        <div id="content" className="d-flex flex-column w-100 position-relative">
            {children}
        </div>
        <footer><Contact/></footer>
    </div>

  }

  export default headerOnly;