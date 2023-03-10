/*react*/
import { FC } from 'react';

/*next*/
import Link from 'next/link';

/*assests*/
import { SvgStar } from '../assets/svgs';

/*styles*/
import Styles from '../../styles/modules/quotes.module.css';

/*types*/
import { feedback } from '../../lib/constants/data-types';

interface myProps {
	feedback: feedback[];
}

const Quotes: FC<myProps> = ({ feedback }) => {
	return (
		<section id='quotes' className={`parallax-section ${Styles.quotes}`}>
			<div className={Styles.overlay} />
			<div className='d-flex w-100'>
				<div
					className={`d-flex flex-column align-items-center w-100 ${Styles.content}`}
				>
					<SvgStar width='5rem' height='5rem' />
					<div
						className={`col-md-offset-1 col-md-10 col-sm-12 ${Styles.feedback}`}
					>
						<div className='d-flex position-relative mb-5 flex-column mx-auto'>
							<p className='text-center mb-3 mx-auto p-0 m-0'>
								{feedback[0].feedback}
							</p>
							<p
								className={`position-absolute text-white p-0 m-0 ${Styles.poster}`}
							>
								{feedback[0].name}
							</p>
						</div>
						<div className='d-flex position-relative flex-column mx-auto'>
							<p className='text-center mb-3 mx-auto p-0 m-0'>
								{feedback[1].feedback}
							</p>
							<p
								className={`position-absolute text-white p-0 m-0 ${Styles.poster}`}
							>
								{feedback[1].name}
							</p>
						</div>
					</div>
					<Link
						className={`position-absolute ${Styles.pageLink}`}
						href='/feedback'
					>
						See More&nbsp;
						<span className='d-inline position-relative pb-1'>&raquo;</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Quotes;
