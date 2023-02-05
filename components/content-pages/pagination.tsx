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
    <div className='d-flex w-100 align-items-center justify-content-center mb-2' style={{gap: "7px"}}>
        {pageNumber.pageNumber > 10 ? <button onClick={JUMPTOSTART}><DoubleCaretBack width={1} height={1} /></button> : null}
        {pageNumber.pageNumber > 1 ? <button onClick={DECREMENT}><CaretBack width={1} height={1} /></button> : null}
        <p className='m-0 p-0'>page</p>
        {Array.from({length: count}).map((val, index) => {
            return (
                <span
                className={`${index + 1 === pageNumber.pageNumber ? "text-primary" : "text-dark" }`}
                    key={index}
                    onClick={() => JUMPTO(index + 1)}
                >
                    {index + 1}
                </span>
            )
        } )}
        {count > 1 ? <button onClick={INCREMENT}><CaretForward width={1} height={1}/></button> : null}
        {count > 10 ? <button onClick={JUMPTOEND}><CaretDoubleForward width={1} height={1} /></button> : null}
    </div>
  )
}

export default Pagination
