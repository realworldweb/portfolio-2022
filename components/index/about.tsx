/*react*/
import { FC } from 'react';

/*next*/
import Image from 'next/image';
import Link from 'next/link';

/*styles*/
import Styles from '../../styles/modules/about.module.css';
import { project } from '../../lib/constants/data-types';

/*images*/

interface myProps {
	projects: Array<project>;
}

const About: FC<myProps> = ({ projects }) => {
	const latestProjects = projects
		.reverse()
		.filter((project, index) => index < 4 && project);

	return (
		<section
			id='about'
			className={`parallax-section ${Styles.section} ${Styles.about}`}
		>
			<div className='d-flex w-100 position-relative'>
				<section className={`bg-dark col-12 ${Styles.projectThumb}`}>
					<div className={Styles.skillThumb}>
						<div className=' section-title color-white'>
							<h1>Projects</h1>
							<p className='color-white'>Browse my latest projects.</p>
						</div>

						<div
							className={`d-flex color-white flex-wrap ${Styles.skillThumb}`}
						>
							{latestProjects.map((project, index) => {
								return (
									<article
										className={`d-flex flex-wrap my-2 mx-auto ${Styles.project}`}
										key={index}
									>
										<div
											className={`d-inline mx-auto mb-2 position-relative ${Styles.projectImage}`}
										>
											<Image
												src={`/${project.project
													.replaceAll(' ', '-')
													.toLowerCase()}-sm.webp`}
												alt='project image'
												sizes='(max-width: 768px) 98vw,
                                                       (max-width: 1200px) 20vw'
												fill
											/>
										</div>
										<div
											className={`d-flex flex-column align-items-center ${Styles.projectInfo}`}
										>
											<h5 className='text-white'>{project.project}</h5>
											<p>{project.description}</p>
											<div>
												{project.tech.map((tech, index) => {
													return (
														<span
															className={`mx-1 mt-2 p-2 badge bg-secondary`}
															key={index}
														>
															{tech}
														</span>
													);
												})}
											</div>
										</div>
									</article>
								);
							})}
						</div>
						<div>
								<Link href='/projects'>
									<h4
										className={`d-flex w-100 position-relative justify-content-end align-items-center ${Styles.link}`}
									>
										See more&nbsp;
										<span className='d-inline position-relative pb-1'>
											&raquo;
										</span>
									</h4>
								</Link>
							</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default About;
