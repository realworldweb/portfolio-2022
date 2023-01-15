
/*react*/
import type { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Head from 'next/head'
import dynamic from 'next/dynamic';

/*data*/
import { getData } from '../lib/data/data';

/*layout*/
import Layout from '../layouts/main'

/*components*/
import Hero from '../components/index/hero';
const About = dynamic(() => import(/* webpackChunkName: "about" */ '../components/index/about'));
const Services = dynamic(() => import(/* webpackChunkName: "services" */ '../components/index/services'));
const Experince = dynamic(() => import(/* webpackChunkName: "experince" */ '../components/index/experince'));
const Education = dynamic(() => import(/* webpackChunkName: "education" */ '../components/index/education'));
const Quotes = dynamic(() => import(/* webpackChunkName: "quotes" */ '../components/index/quotes'));

/*types*/
import { experince } from '../lib/constants/data-types';

export async function getStaticProps() {

  //const projects = await getData('project');
  //const certs = await getData('courses');
  //const feedback = await getData('feedback');
  const experince: Array<experince> = await getData('experince');

  return {
    props: {
      experince,
    },
  };
}
interface MyProps{
  experince: Array<experince>
}
const  Home: NextPageWithLayout<MyProps> = ({experince}) => {
 

  return (
  <>
      <Head>
          <title>Realworldweb portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <main>
      <Hero/>
      <About/>
      <Services/>
      <Experince experince={experince}/>
      <Education/>
      <Quotes/>
      </main> 
  </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;