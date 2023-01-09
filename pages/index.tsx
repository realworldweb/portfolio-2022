
/*react*/
import type { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Head from 'next/head'
import dynamic from 'next/dynamic';

/*layout*/
import Layout from '../layouts/main'

/*components*/
import Hero from '../components/index/hero';
const About = dynamic(() => import(/* webpackChunkName: "about" */ '../components/index/about'));
const Services = dynamic(() => import(/* webpackChunkName: "services" */ '../components/index/services'));
const Experince = dynamic(() => import(/* webpackChunkName: "experince" */ '../components/index/experince'));
const Education = dynamic(() => import(/* webpackChunkName: "education" */ '../components/index/education'));
const Quotes = dynamic(() => import(/* webpackChunkName: "quotes" */ '../components/index/quotes'));

 
 

const  Home: NextPageWithLayout = () => {
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
      <Experince/>
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