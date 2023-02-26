/*react*/
import { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from '../_app';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

/*data*/
import { getData } from '../../lib/data/data';

/*layout*/
import Layout from '../../layouts/main';

/*styles*/
import Styles from '../../styles/modules/course.module.css';

/*types*/
import { education } from '../../lib/constants/data-types';
import { ParsedUrlQuery } from 'querystring';

interface MyProps {
	courses: Array<education>;
	course: education;
}

interface IParams extends ParsedUrlQuery {
	courseName: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	// Call an external API endpoint to get posts
	const courses: Array<education> = await getData('education');

	// Get the paths we want to pre-render based on posts
	const paths = courses.map((course) => ({
		params: { courseName: course.title.replaceAll(' ', '-') },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { courseName } = context.params as IParams;

	let courses: Array<education> = await getData('education');

	const course: education = courses.find(
		(course) => course.title! === courseName!.replaceAll('-', ' ')
	)!;

	courses = courses.reverse().reduce((acc: education[], course) => {
		if (course.title! !== courseName!.replaceAll('-', ' ') && acc.length < 6) {
             acc.push(course);
		}
		return acc;
	}, []);

	return {
		props: {
			courses,
			course,
		},
	};
};

const Course: NextPageWithLayout<MyProps> = ({ course, courses }) => {
	return (
		<>
			<Head>
				<title>Realworldweb courses</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
				<div>
					<section
						className={`d-flex flex-column position-relative align-items-center mt-5 mx-auto bg-yellow ${Styles.courseDetails}`}
					>
							<h1 className='text-center color-dark fw-bold'>
								{course?.title}
							</h1>
							<p className='text-center text-dark px-2 my-5'>
								{course?.description}
							</p>
					</section>
					<section
						className={`d-flex flex-column align-items-center position-relative mx-auto bg-orange ${Styles.courseTech}`}
					>
						<h3 className={`d-flex text-center mt-2 fw-bold`}>Tech studied</h3>
						<ul className='d-flex position-relative w-75 flex-wrap px-4 mx-auto list-unstyled'>
							{course?.tech.map((tech, index) => (
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
						className={`d-flex flex-column align-items-center position-relative mb-5 mx-auto bg-darklight ${Styles.courseMore}`}
					>
						<h5
							className={`d-flex position-relative w-100 px-5 mt-3 text-left text-white fw-bold`}
						>
							More courses
						</h5>
						<div className={`d-flex w-100 flex-wrap`}>
							{courses.map((course, index) => (
								<article
									className={`d-flex flex-column mx-auto mx-1 mt-2 p-2 badge ${Styles.courseThumb}`}
									key={index}
								>
									<Link href={`/courses/${course?.title.replaceAll(' ', '-')}`}>
										<p
											className={`mx-auto mt-2 p-2 badge bg-blue color-yellow ${Styles.courseThumbTitle}`}

										>
											{course.title}
										</p>
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

Course.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Course;
