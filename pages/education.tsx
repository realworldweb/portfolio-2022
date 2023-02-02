
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
import { education } from '../lib/constants/data-types';

export async function getStaticProps() {
  
  const courses: Array<education> = await getData('education');
  

  return {
    props: {
      courses,
    },
  };
}
interface MyProps{
  courses: Array<education>;
}
const  Home: NextPageWithLayout<MyProps> = ({ courses }) => {

  return (
  <>
      <Head>
          <title>Realworldweb courses</title>
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