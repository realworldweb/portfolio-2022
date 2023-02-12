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
	role: Array<education>;
}

interface IParams extends ParsedUrlQuery {
    roleName: string
}

export const getStaticPaths: GetStaticPaths = async() => {
    // Call an external API endpoint to get posts
    const roles: Array<education> = await getData('education');
  
    // Get the paths we want to pre-render based on posts
    const paths = roles.map((role) => ({
      
      params: { roleName: role.title.replaceAll(" ", "-") },

    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export const getStaticProps: GetStaticProps = async (context) => {
    
    const { roleName } = context.params as IParams;


    
	const role: Array<education> = await getData('education', {role: roleName.replaceAll("-", " ")});


   

	return {
		props: {
			role,
		},
	};
}

const Role: NextPageWithLayout<MyProps> = ({ role }) => {
  
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

Role.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Role;
