
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
import { education, experince, project } from '../lib/constants/data-types';

//TODO: check loading between site page and home seems slow
export async function getStaticProps() {
  
  const experinceData: Array<experince> = await getData('experince');
  const projectsData: Array<project> = await getData('projects');
  const educationData: Array<project> = await getData('education');

  const projects: Array<project> = projectsData.filter((val, index) => index > projectsData.length -4 && val);
  const education: Array<project> = educationData.filter((val, index) => index > educationData.length -3 && val);
  const experince: Array<experince> = experinceData.filter((val, index) => index > experinceData.length -3 && val);

  return {
    props: {
      experince,
      projects,
      education,
    },
  };
}
interface MyProps{
  experince: Array<experince>;
  projects: Array<project>;
  education: Array<education>;
}
const  Home: NextPageWithLayout<MyProps> = ({experince, projects, education}) => {

  return (
  <>
      <Head>
          <title>Realworldweb portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <main>
      <Hero/>
      <About projects={projects}/>
      <Services/>
      <Experince experince={experince}/>
      <Education education={education}/>
      <Quotes/>
      </main> 
  </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;