/*react*/
import { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from '../_app';
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head';
import Link from 'next/link';

/*data*/
import { getData } from '../../lib/data/data';

/*layout*/
import Layout from '../../layouts/main';

/*styles*/
import Styles from '../../styles/modules/experince.module.css';


/*types*/
import { experince } from '../../lib/constants/data-types';
import { ParsedUrlQuery } from 'querystring'


interface MyProps {
	role: experince;
	roles: Array<experince>;

}

interface IParams extends ParsedUrlQuery {
    roleName: string
}

export const getStaticPaths: GetStaticPaths = async() => {
    // Call an external API endpoint to get posts
    const roles: Array<experince> = await getData('experince');
  
    // Get the paths we want to pre-render based on posts
    const paths = roles.map((data) => ({
      
      params: { roleName: data.employer.replaceAll(" ", "-") },
    }))
    
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export const getStaticProps: GetStaticProps = async (context) => {
    
    const { roleName } = context.params as IParams;


    
	let roles: Array<experince> = await getData('experince');

	const role: experince = roles.find((data) => data.employer === roleName.replaceAll("-", " "))!;

     roles = roles.filter((data) => data.employer !== roleName.replaceAll("-", " "));



   

	return {
		props: {
			role,
			roles
		},
	};
}

const Role: NextPageWithLayout<MyProps> = ({ role, roles }) => {
  
	return (
		<>
			<Head>
				<title>Realworldweb projects</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
            <div>
					<section
						className={`d-flex flex-column position-relative align-items-center mt-5 mx-auto bg-yellow ${Styles.expDetails}`}
					>
							<h1 className='text-center color-dark fw-bold'>
								{role?.employer}
							</h1>
							<p className={`d-flex flex-wrap w-75 justify-content-between color-dark fw-bold`}><span className='mx-auto text-center'>{role?.role}</span><span className='mx-auto text-center'>{role?.period}</span></p>
							<p className='d-flex w-75 position-relative text-center text-dark px-2 my-5'>
								{role?.description}
							</p>
					</section>
					<section
						className={`d-flex flex-column align-items-center position-relative mx-auto bg-orange ${Styles.expTech}`}
					>
						<h3 className={`d-flex text-center mt-2 fw-bold`}>Tech used</h3>
						<ul className='d-flex position-relative w-75 flex-wrap px-4 mx-auto list-unstyled'>
							{role?.tech.map((tech, index) => (
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
						className={`d-flex flex-column align-items-center position-relative mb-5 mx-auto bg-darklight ${Styles.expMore}`}
					>
						<h5
							className={`d-flex position-relative w-100 px-5 mt-3 text-left text-white fw-bold`}
						>
							Other roles
						</h5>
						<div className={`d-flex w-100 flex-wrap`}>
							{roles.map((exp, index) => (
								<article
									className={`d-flex flex-column mx-auto mx-1 mt-2 p-2 badge ${Styles.expThumb}`}
									key={index}
								>
									<Link href={`/roles/${exp?.employer.replaceAll(' ', '-')}`}>
										<p
											className={`mx-auto mt-2 p-2 badge bg-blue color-yellow ${Styles.expThumbTitle}`}

										>
											{exp?.employer}&nbsp;:&nbsp;{exp?.role}
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

Role.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Role;
