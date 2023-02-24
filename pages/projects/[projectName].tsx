/*react*/
import { ReactElement, useState } from 'react';

/*next*/
import type { NextPageWithLayout } from '../_app';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

/*data*/
import { getData } from '../../lib/data/data';

/*layout*/
import Layout from '../../layouts/main';

/*styles*/
import Styles from '../../styles/modules/project.module.css';

/*types*/
import { project } from '../../lib/constants/data-types';
import { ParsedUrlQuery } from 'querystring';

interface MyProps {
	moreProjects: Array<project>;
	project: project;
}

interface IParams extends ParsedUrlQuery {
    projectName: string
}

export const getStaticPaths: GetStaticPaths = async () => {
	const projects: Array<project> = await getData('projects');
	// Get the paths we want to pre-render based on posts
	const paths = projects.map((project) => ({
		params: { projectName: project.project.replaceAll(' ', '-') },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { projectName } = context.params as IParams;
	const projects: Array<project> = await getData('projects');
	const project = projects.find(
		(project) => project.project === projectName!.replaceAll('-', ' ')
	);
    const moreProjects = projects.filter((project) => project.project!== projectName!.replaceAll('-', ' '));


	return {
		props: {
			moreProjects,
			project
		},
	};
};

const Project: NextPageWithLayout<MyProps> = ({ moreProjects, project }) => {
	
	return (
		<>
			<Head>
				<title>Realworldweb projects</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
				<div>
					<section
						className={`d-flex flex-column flex-md-row position-relative mt-5 mx-auto bg-yellow ${Styles.projectDetails}`}
					>
						<div
							className={`d-flex flex-wrap mx-auto ${Styles.projectImage}`}
						>
							<Image
								src={`/${project?.project
									.replaceAll(' ', '-')
									.toLowerCase()}-sm.webp`}
								alt='project image'
								sizes='56vw,
								        (max-width: 768px) 40vw,
                                        (max-width: 1200px) 37vw'
								width='500'
								height='350'
								style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
							priority/>
						</div>
						<div className='d-flex mt-3 flex-column'>
							<h1 className='text-center color-dark fw-bold'>
								{project?.project}
							</h1>
							<div className='d-flex mx-auto' style={{ gap: '20px' }}>
								<a
									href={project?.github}
									className={`btn btn-link ${Styles.projectLink}`}
									target='_blank'
									rel='noreferrer'
								>
									Github source
								</a>
								<a
									href={project?.url}
									className={`btn btn-link ${Styles.projectLink}`}
									target='_blank'
									rel='noreferrer'
								>
									Hosted example
								</a>
							</div>
							<p className='text-center text-dark px-2 my-5'>
								{project?.description}
							</p>
						</div>
					</section>
					<section
						className={`d-flex flex-column align-items-center position-relative mx-auto bg-orange ${Styles.projectTech}`}
					>
						<h3 className={`d-flex text-center mt-2 fw-bold`}>
							Tech used
						</h3>
						<ul className='d-flex position-relative w-75 flex-wrap px-4 mx-auto list-unstyled'>
							{project?.tech.map((tech, index) => (
								<li
									className={`mx-auto mt-2 p-2 badge bg-darklight color-orange`}
									key={index}
								>
									{tech}
								</li>
							))}
						</ul>
					</section>
					<section
						className={`d-flex flex-column align-items-center position-relative mb-5 mx-auto bg-darklight ${Styles.projectMore}`}
					>
						<h5
							className={`d-flex position-relative w-100 px-5 mt-3 text-left text-white fw-bold`}
						>
							More projects
						</h5>
						<div className={`d-flex w-100 flex-wrap`}>
							{moreProjects.map((project, index) => (
								<article
									className={`d-flex flex-column mx-auto mx-1 mt-2 p-2 badge ${Styles.projectThumb}`}
									key={index}
								>
									<Link href={`/projects/${project?.project.replaceAll(' ', '-')}`}>
										<div className='position-relative d-flex w-100'>
											<Image
												src={`/${project?.project
													.replaceAll(' ', '-')
													.toLowerCase()}-sm.webp`}
												alt='project image'
												sizes='(max-width: 768px) 75vw,
														   (max-width: 1200px) 35vw'
												width='500'
												height='350'
												style={{
													objectFit: 'cover',
													width: '100%',
													height: 'auto',
												}}
											/>{' '}
										</div>
										<p>{project.project}</p>
									</Link>
								</article>
							))}
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

Project.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Project;
