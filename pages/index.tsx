
/*react*/
import type { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Head from 'next/head'
import dynamic from 'next/dynamic';

/*layout*/
import Layout from '../layouts/main'

/*components*/
import Hero from '../components/hero';
const About = dynamic(() => import(/* webpackChunkName: "about" */ '../components/about'));
const Services = dynamic(() => import(/* webpackChunkName: "services" */ '../components/services'));
const Experince = dynamic(() => import(/* webpackChunkName: "experince" */ '../components/experince'));
const Education = dynamic(() => import(/* webpackChunkName: "experince" */ '../components/education'));
const Quotes = dynamic(() => import(/* webpackChunkName: "experince" */ '../components/quotes'));
const Contact = dynamic(() => import(/* webpackChunkName: "experince" */ '../components/contact'));
 
 

const  Home: NextPageWithLayout = () => {
  return (
    <main>
    <Hero/>
    <About/>
    <Services/>
    <Experince/>
    <Education/>
    <Quotes/>
    <Contact/>
    </main> 
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;