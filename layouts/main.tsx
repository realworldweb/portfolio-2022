import Contact from "../components/contact";
import Header from "../components/header";
import { FC, ReactNode } from "react";

interface MyProps {
    children: ReactNode;
 }

const headerOnly : FC<MyProps> =  ({children}) => {

    return <div className="d-flex flex-column w-100 position-relative">
        <header><Header/></header>
        <div id="content" className="d-flex flex-column w-100 position-relative">
            {children}
        </div>
        <footer><Contact/></footer>
    </div>

  }

  export default headerOnly;