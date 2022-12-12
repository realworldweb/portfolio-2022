/*next*/
import Image from 'next/image';
import Link from 'next/link';

/*assests*/
import { SvgLearning } from './svgs';
import EducationImage from '../public/education.jpg';

/*Styles*/
import Styles from '../styles/modules/info.module.css';

const Education = () => {
	return (
		<section id='education' className={`parallax-section ${Styles.education}`}>
			<div className='d-flex w-100 position-relative'>
				<div className='w-100 d-flex'>
					<div
						className={`col-md-6 position-relative pt-2 col-sm-6 ${Styles.content}`}
					>
						<div className='color-white education-thumb'>
							<div>
								<h1>My Education</h1>
								<p className='color-white'>
									My latest courses and knowledge updates.
								</p>
							</div>

							<div>
								<div className='media-body'>
									<div className='d-flex align-items-center position-relative'>
										<SvgLearning width='2rem' height='2rem' fill='#633' />
										&nbsp;
										<h3 className='d-block m-0'>
											Learning end to end testing with Jest
										</h3>
										&nbsp;
										<h4 className='color-white position-relative mt-n1'>
											(Javascript)
										</h4>
										&nbsp;
										<span className='position-relative m-0'>Linkedin Learning</span>
									</div>
									<p className='color-white position-relative'>
										A extensive course on jest a testing suite for javascript
										node.js projects. How to effectivlely use jest to code test
										for end to end and unit testing of current javascript code.
									</p>
								</div>
							</div>

							<div>
								<div className='media-body'>
									<div className='d-flex align-items-center position-relative'>
										<SvgLearning width='2rem' height='2rem' fill='#633' />
										&nbsp;
										<h3 className='d-block m-0'>Typescript and react 2022</h3>
										&nbsp;
										<h4 className='color-white position-relative mt-n1'>
											(Typescript)
										</h4>
										&nbsp;
										<span className='position-relative m-0'>Udemy</span>
									</div>
									<p className='color-white position-relative'>
										A deep dive into modern Typescript and tools such as
										interfaces , enums, truples and unions. With a emphasis
										placed on dealing with type within a react js and the
										webpack enviorment.
									</p>
								</div>
								<Link href='/experince'>
									<h4
										className={`d-flex position-relative align-items-center ${Styles.link}`}
									>
										See more&nbsp;<span className='d-inline position-relative pb-1'>&raquo;</span>
									</h4>
								</Link>
							</div>
						</div>
					</div>

					<div className=' position-relative col-md-6 col-sm-6'>
						<Image src={EducationImage} alt='my education' fill />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
