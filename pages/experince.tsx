
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
import { experince } from '../lib/constants/data-types';

export async function getStaticProps() {
  
  const roles: Array<experince> = await getData('experince');
  

  return {
    props: {
      roles,
    },
  };
}
interface MyProps{
  roles: Array<experince>;
}
const  Home: NextPageWithLayout<MyProps> = ({ roles }) => {

  return (
  <>
      <Head>
          <title>Realworldweb experince</title>
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