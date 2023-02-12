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
import { project } from '../../lib/constants/data-types';
import { ParsedUrlQuery } from 'querystring'

interface MyProps {
	project: Array<project>;
}

interface IParams extends ParsedUrlQuery {
    projectName: string
}

export const getStaticPaths: GetStaticPaths = async() => {
    // Call an external API endpoint to get posts
    const projects: Array<project> = await getData('projects');
  
    // Get the paths we want to pre-render based on posts
    const paths = projects.map((project) => ({
      
      params: { projectName: project.project.replaceAll(" ", "-") },

    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export const getStaticProps: GetStaticProps = async (context) => {
    
    const { projectName } = context.params as IParams;


    
	const project: Array<project> = await getData('projects', {project: projectName.replaceAll("-", " ")});


   

	return {
		props: {
			project,
		},
	};
}

const Project: NextPageWithLayout<MyProps> = ({ project }) => {
  
	return (
		<>
			<Head>
				<title>Realworldweb projects</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
        
			</main>
		</>
	);
};

Project.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Project;
