/*react*/
import { FC, useEffect } from 'react';

/*functions*/
import {usePagination} from '../../lib/functions/reducers';

/*svg*/
import { CaretBack, CaretDoubleForward, CaretForward, DoubleCaretBack } from '../assets/svgs';


interface myProps{
    changePage: Function;
    count: number;
}

const Pagination: FC<myProps>  = ({changePage, count}) => {
 
    const [pageNumber,{INCREMENT, DECREMENT, JUMPTO, JUMPTOEND, JUMPTOSTART}]: any = usePagination();

  useEffect(() => {
    changePage(pageNumber.pageNumber);
  
    
  }, [pageNumber, changePage])
  

    

  return (
    <div className='d-flex w-100  color-blue align-items-center justify-content-center mb-2' style={{gap: "7px"}}>
        {pageNumber.pageNumber > 10 ? <button className={`btn btn-link color-blue`} onClick={JUMPTOSTART}><DoubleCaretBack width={"2rem"} height={"2rem"} /></button> : null}
        {pageNumber.pageNumber > 1 ? <button  className={`btn btn-link color-blue`} onClick={DECREMENT}><CaretBack width={"2rem"} height={"2rem"}/></button> : null}
        <p className='m-0 text-dark p-0'>page</p>
        {Array.from({length: count}).map((val, index) => {
            return (
                <button
                className={`btn btn-link p-0 m-0 ${index + 1 === pageNumber.pageNumber ? "color-blue text-decoration-underline fw-bold" : "text-dark text-decoration-none" }`}
                    key={index}
                    onClick={() => JUMPTO(index + 1)}
                >
                    {index + 1}
                </button>
            )
        } )}
        {count > 1 && pageNumber.pageNumber < count ? <button  className={`btn btn-link color-blue`} onClick={INCREMENT}><CaretForward width={"2rem"} height={"2rem"}/></button> : null}
        {count > 10 ? <button className={`btn btn-link color-blue`} onClick={JUMPTOEND}><CaretDoubleForward width={"2rem"} height={"2rem"} /></button> : null}
    </div>
  )
}

export default Pagination
