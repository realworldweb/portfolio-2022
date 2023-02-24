/*react*/
import {FC} from 'react'

/*next*/
import Image from 'next/image';
import Link from 'next/link';

/*assests*/
import { SvgLearning } from '../assets/svgs';
import EducationImage from '../../public/education.jpg';

/*Styles*/
import Styles from '../../styles/modules/info.module.css';

/*types*/
import { education } from '../../lib/constants/data-types';

interface myProps {
	education: Array<education>;
}

const Education: FC<myProps> = ({education}) => {

	return (
		<section id='education' className={`parallax-section ${Styles.education}`}>
			<div className='d-flex w-100 position-relative'>
				<div className='w-100 d-flex'>
					<div
						className={` col-12 col-md-8 col-lg-6 position-relative pt-2 ${Styles.content}`}
					>
						<div className='education-thumb'>
							<div>
								<h1>My Education</h1>
								<p>
									My latest courses and knowledge updates.
								</p>
							</div>

							<div>
							{education.map( (edu, index) => {
								return (<div className='media-body' key={index}>
									<div className='d-flex flex-wrap flex-md-nowrap align-items-center position-relative'>
										<SvgLearning width='2rem' height='2rem' fill='#2c2c2c' />
										&nbsp;
										<h3 className='d-block m-0'>
										{edu.title}
										</h3>
										&nbsp;
										<span className='position-relative mx-auto m-md-0'>{edu.awardedBy}</span>
									</div>
									<p className='position-relative mx-auto mx-md-0 p-2'>
										{edu.description}
									</p>
								</div>)
								})}
							</div>
								<Link href='/courses'>
									<h4
										className={`d-flex w-100 position-relative justify-content-end p-4 p-sm-5 align-items-center ${Styles.link}`}
									>
										See more&nbsp;<span className='d-inline position-relative pb-1'>&raquo;</span>
									</h4>
								</Link>
						</div>
					</div>

					<div className='d-none d-md-flex position-relative col-md-4 col-lg-6'>
						<Image src={EducationImage} alt='my education' fill />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
