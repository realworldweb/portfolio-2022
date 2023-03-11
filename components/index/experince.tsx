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
						<div className={Styles.experince}>
							<div>
								<strong className='heading1'>My Experience</strong>
								<p className='mb-3 subheading'>Current and last role</p>
							</div>

							<div>
								{experince.map((exp: experince, index: number) => {
									return (
										<div className='media-body' key={index}>
											<Link
												href={`/roles/${exp.employer.replaceAll(' ', '-')}`}
											>
												<div className='d-flex flex-wrap flex-md-nowrap align-items-center position-relative'>
													<SvgExperince
														width='2rem'
														height='2rem'
														fill='#2c2c2c'
													/>
													&nbsp;
													<span className='d-block heading3 m-0'>
														{exp.role}
													</span>
													&nbsp;
													<span className='position-relative heading4 mt-n1'>
														({exp.employer})
													</span>
													&nbsp;
													<span className='position-relative mx-auto m-md-0'>
														{exp.period}
													</span>
												</div>
												<p className='position-relative mx-auto mx-md-0 p-2'>
													{exp.description}
												</p>
											</Link>
										</div>
									);
								})}
							</div>

							<div>
								<Link href='/roles'>
									<span
										className={`d-flex w-100 heading4 position-relative justify-content-end align-items-center p-4 p-sm-5 ${Styles.link}`}
									>
										More details&nbsp;
										<span className='d-inline position-relative pb-1'>
											&raquo;
										</span>
									</span>
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
