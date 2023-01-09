
/*assests*/
import { SvgStar } from '../assets/svgs';

/*styles*/
import Styles from '../../styles/modules/quotes.module.css'

const Quotes = () => {
	return (
		<section id="quotes" className={`parallax-section ${Styles.quotes}`}>
     <div className={Styles.overlay} />
     <div className="d-flex w-100">
          <div className={`d-flex flex-column align-items-center w-100 ${Styles.content}`}>
              <SvgStar width="5rem" height="5rem"  />
               <div className="col-md-offset-1 col-md-10 col-sm-12">
                    <h2 className='text-center mx-auto'>Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.</h2>
                    <p className='text-center mx-auto'>Money can&apos;t buy you love but it can help you compete in a global marketplace.</p>
               </div>

          </div>
     </div>
</section>
	);
};

export default Quotes;
