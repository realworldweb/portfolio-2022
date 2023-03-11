/*react*/
import type { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

/*data*/
import { getData } from '../lib/data/data';

/*layout*/
import Layout from '../layouts/main';

/*components*/
import Hero from '../components/index/hero';
const ProjectSection = dynamic(
	() => import(/* webpackChunkName: "about" */ '../components/index/projects')
);
const Services = dynamic(
	() =>
		import(/* webpackChunkName: "services" */ '../components/index/services')
);
const Experince = dynamic(
	() =>
		import(/* webpackChunkName: "experince" */ '../components/index/experince')
);
const Education = dynamic(
	() =>
		import(/* webpackChunkName: "education" */ '../components/index/education')
);
const Quotes = dynamic(
	() => import(/* webpackChunkName: "quotes" */ '../components/index/quotes')
);

/*types*/
import {
	education,
	experince,
	project,
	feedback,
} from '../lib/constants/data-types';

export async function getStaticProps() {
	const experinceData: Array<experince> = await getData('experince');
	const projectsData: Array<project> = await getData('projects');
	const educationData: Array<education> = await getData('education');
	const feedbackData: Array<feedback> = await getData('feedback');

	const projects: Array<project> = projectsData.filter(
		(val, index) => index > projectsData.length - 5 && val
	);
	const education: Array<education> = educationData.filter(
		(val, index) => index > educationData.length - 3 && val
	);
	const experince: Array<experince> = experinceData.filter(
		(val, index) => index > experinceData.length - 3 && val
	);
	const feedback: Array<feedback> = feedbackData.reduce(
		(acc: Array<feedback>, val) => {
			if (acc.length < 3) {
				val.approved === true && acc.push(val);
			}
			return acc;
		},
		[]
	);

	return {
		props: {
			experince,
			projects,
			education,
			feedback,
		},
	};
}
interface MyProps {
	experince: Array<experince>;
	projects: Array<project>;
	education: Array<education>;
	feedback: Array<feedback>;
}
const Home: NextPageWithLayout<MyProps> = ({
	experince,
	projects,
	education,
	feedback,
}) => {
	return (
		<>
			<Head>
				<title>Realworldweb portfolio</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta
					name='description'
					content='Portfolio site setup with react and next.js to showcase current projects and social kata accounts.'
				/>
			</Head>
			<main>
				<Hero />
				<ProjectSection projects={projects} />
				<Services />
				<Experince experince={experince} />
				<Education education={education} />
				<Quotes feedback={feedback} />
			</main>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
