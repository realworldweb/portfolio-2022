/*react*/
import { FC, ReactNode } from "react";

/*components*/
import Sidebar from "../components/layout/sidebar";

/*styles*/
import Styles from "../styles/layouts/main.module.css";


interface MyProps {
    children: ReactNode;
 }

const headerOnly : FC<MyProps> =  ({children}) => {

    return <div className="d-flex w-100 position-relative">
        <Sidebar />
        <div id="content" className={`d-flex flex-column w-100 position-relative ${Styles.content}`}>
            {children}
        </div>
    </div>

  }

  export default headerOnly;