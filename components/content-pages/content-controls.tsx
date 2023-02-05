/*react*/
import { FC } from 'react';

interface myProps{
    filter: Function;
    tech: Array<string>;
}

const ContentControls: FC<myProps>  = ({filter, tech}) => {

  return (
    <div>
    <h4 className='text-dark p-2 fw-bold'>Filter by tech</h4>
    <div>
        {tech.map( (val, index) => {
            return  <span
            className={`mx-1 mt-2 p-2 badge bg-secondary`}
            key={index}
            onClick={() => filter(val)}
          >
            {val}
          </span>
        })
    }
    </div>
    </div>
  )
}

export default ContentControls
