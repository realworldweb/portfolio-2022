/*react*/
import { FC } from 'react';

/*next*/
import dynamic from 'next/dynamic';

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
					<article className={Styles.skillThumb}>
						<div className=' section-title color-white'>
							<h1>Projects</h1>
							<p className='color-white'>Browse my latest projects.</p>
						</div>

						<div className={`d-flex color-white flex-wrap ${Styles.skillThumb}`}>
							{latestProjects.map((project, index) => {
								return (
									<div className={`d-flex flex-column my-2 mx-auto ${Styles.project}`} key={index}>
										<h5>{project.project}</h5>
										<p>{project.description}</p>
										<div>
										{project.tech.map((tech, index) => {
											return (
                                                <span className={`mx-1 mt-2 p-2 badge bg-secondary`} key={index}>
                                                    {tech}
                                                </span>
                                            );
										})}
										</div>
									</div>
								);
							})}
						</div>
					</article>
				</section>
			</div>
		</section>
	);
};

export default About;
