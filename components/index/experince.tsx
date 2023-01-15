/*react*/
import { FC } from 'react';

/*next*/
import Image from 'next/image';

/*types*/
import { experince } from '../../lib/constants/data-types';

/*assests*/
import { SvgExperince } from '../assets/svgs';
import ExperinceImage from '../../public/experience.jpg';

/*Styles*/
import Styles from '../../styles/modules/info.module.css';
import Link from 'next/link';

interface myProps {
	experince: Array<experince>;
}

const Experince: FC<myProps> = ({ experince }) => {
	return (
		<section id='experience' className={`parallax-section ${Styles.experince}`}>
			<div className='d-flex position-relative w-100'>
				<div className='w-100 d-flex'>
					<div className='position-relative d-none d-md-flex col-md-4 col-lg-6'>
						<Image src={ExperinceImage} alt='my experince' fill />
					</div>

					<div
						className={` col-12 col-md-8 col-lg-6 position-relative pt-2 ${Styles.content}`}
					>
						<div className={`color-white`}>
							<div>
								<h1>My Experience</h1>
								<p className='color-white'>Current and last role</p>
							</div>

							<div>
								{experince
									.filter((exp: experince, index: number) =>
										index < 2 ? exp : false
									)
									.map((exp: experince, index: number) => {
										return (
											<div className='media-body' key={index}>
												<div className='d-flex flex-wrap flex-md-nowrap align-items-center position-relative'>
													<SvgExperince
														width='2rem'
														height='2rem'
														fill='#633'
													/>
													&nbsp;
													<h3 className='d-block m-0'>{exp.role}</h3>
													&nbsp;
													<h4 className='color-white position-relative mt-n1'>
														({exp.employer})
													</h4>
													&nbsp;
													<span className='position-relative mx-auto m-md-0'>
														{exp.period}
													</span>
												</div>
												<p className='color-white position-relative mx-auto mx-md-0 p-2'>
													{exp.description}
												</p>
											</div>
										);
									})}
							</div>

							<div>
								<Link href='/experince'>
									<h4
										className={`d-flex w-100 position-relative justify-content-end align-items-center p-4 p-sm-5 ${Styles.link}`}
									>
										More details&nbsp;
										<span className='d-inline position-relative pb-1'>
											&raquo;
										</span>
									</h4>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experince;
