/*react*/
import { FC } from 'react';

interface myProps{
    filter: Function;
    tech: Array<string>;
}

const ContentControls: FC<myProps>  = ({filter, tech}) => {

  return (
    <div className='d-flex'>
    <h4 className='text-dark p-2 fw-bold'>Filter by tech</h4>
      <select name="tech" id="tech" onChange={(e) => {e.preventDefault(); filter(e.target.value)}}>
        {tech.map( (val, index) => {
            return  <option
            className={`mx-1 mt-2 p-2 badge bg-secondary`}
            key={index}
            value={val}
          >
            {val}
          </option>
        })
    }
    </select>
    </div>
  )
}

export default ContentControls
