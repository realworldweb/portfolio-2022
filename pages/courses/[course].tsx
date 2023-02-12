/*react*/
import { ReactElement, useState } from 'react';

/*next*/
import type { NextPageWithLayout } from '../_app';
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

/*data*/
import { getData } from '../../lib/data/data';

/*layout*/
import Layout from '../../layouts/main';

/*styles*/
import Styles from '../styles/modules/content.module.css';


/*types*/
import { education } from '../../lib/constants/data-types';
import { ParsedUrlQuery } from 'querystring'

interface MyProps {
	course: Array<education>;
}

interface IParams extends ParsedUrlQuery {
    courseName: string
}

export const getStaticPaths: GetStaticPaths = async() => {
    // Call an external API endpoint to get posts
    const courses: Array<education> = await getData('courses');
  
    // Get the paths we want to pre-render based on posts
    const paths = courses.map((course) => ({
      
      params: { courseName: course.title.replaceAll(" ", "-") },

    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export const getStaticProps: GetStaticProps = async (context) => {
    
    const { courseName } = context.params as IParams;


    
	const course: Array<education> = await getData('experince', {title: courseName.replaceAll("-", " ")});


   

	return {
		props: {
			course,
		},
	};
}

const Course: NextPageWithLayout<MyProps> = ({ course }) => {
  
	return (
		<>
			<Head>
				<title>Realworldweb courses</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
			</main>
		</>
	);
};

Course.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Course;
