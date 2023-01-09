/*react*/
import { FC, ReactNode } from "react";

/*components*/
import Contact from "../components/layout/contact";
import Header from "../components/layout/header";

/*styles*/
import Styles from "../styles/layouts/main.module.css";


interface MyProps {
    children: ReactNode;
 }

const headerOnly : FC<MyProps> =  ({children}) => {

    return <div className="d-flex flex-column w-100 position-relative">
        <header className={Styles.header}><Header/></header>
        <div id="content" className={`d-flex flex-column w-100 position-relative ${Styles.content}`}>
            {children}
        </div>
        <footer className={`d-flex flex-column w-100 position-relative ${Styles.content}`}><Contact/></footer>
    </div>

  }

  export default headerOnly;