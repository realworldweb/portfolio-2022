import Header from "../components/header";
import { FC, ReactNode } from "react";

interface MyProps {
    children: ReactNode;
 }

const headerOnly : FC<MyProps> =  ({children}) => {

    return <div className="d-flex flex-column w-100 position-relative" style={{height: "100vh"}}>
        <header><Header/></header>
        <div id="content" className="d-flex flex-column w-100 position-relative" style={{height: "100%"}}>
            {children}
        </div>
        <footer></footer>
    </div>

  }

  export default headerOnly;