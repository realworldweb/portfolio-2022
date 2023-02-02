
/*react*/
import type { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Head from 'next/head'

/*data*/
import { getData } from '../lib/data/data';

/*layout*/
import Layout from '../layouts/main'

/*types*/
import { project } from '../lib/constants/data-types';

export async function getStaticProps() {
  
  const projects: Array<project> = await getData('projects');
  

  return {
    props: {
      projects,
    },
  };
}
interface MyProps{
  projects: Array<project>;
}
const  Home: NextPageWithLayout<MyProps> = ({ projects }) => {

  return (
  <>
      <Head>
          <title>Realworldweb projects</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <main>
      
      </main> 
  </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;