/*react*/
import { FC } from 'react';

/*next*/
import Image from 'next/image';
import Link from 'next/link';

/*styles*/
import Styles from '../../styles/modules/projectSection.module.css';
import { project } from '../../lib/constants/data-types';

/*images*/

interface myProps {
	projects: Array<project>;
}

const ProjectSection: FC<myProps> = ({ projects }) => {
	return (
		<section
			id='about'
			className={`parallax-section ${Styles.section} ${Styles.about}`}
		>
			<div className='d-flex w-100 position-relative'>
				<section className={`bg-dark col-12 ${Styles.projectThumb}`}>
					<div className={Styles.skillThumb}>
						<div className=' section-title color-white'>
							<span className={`text-white ${Styles.title}`}>Projects</span>
							<p className='color-white'>Browse my latest projects.</p>
						</div>

						<div
							className={`d-flex color-white mx-auto flex-wrap ${Styles.skillThumb}`}
						>
							{projects.map((project, index) => {
								return (
									<Link
										href={`/projects/${project.project.replaceAll(' ', '-')}`}
										className={`d-flex flex-wrap my-2 mx-auto ${Styles.project}`}
										key={index}
									>
										<div
											className={`d-flex mb-2 position-relative ${Styles.projectImage}`}
										>
											<Image
												src={`/${project.project
													.replaceAll(' ', '-')
													.toLowerCase()}-sm.webp`}
												alt='project image'
												width='500'
												height='350'
												sizes='80vw,(max-width: 768px) 20vw,
                                                       '
												style={{
													width: '100%',
													height: 'auto',
													objectFit: 'cover',
												}}
											/>
										</div>
										<div
											className={`d-flex flex-column align-items-center ${Styles.projectInfo}`}
										>
											<strong className='text-white heading5'>
												{project.project}
											</strong>
											<p className='text-center'>{project.description}</p>
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
									</Link>
								);
							})}
						</div>
						<div>
							<Link href='/projects'>
								<span
									className={`d-flex w-100 position-relative heading4 justify-content-end align-items-center ${Styles.link}`}
								>
									See more&nbsp;
									<span className='d-inline position-relative pb-1'>
										&raquo;
									</span>
								</span>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default ProjectSection;
