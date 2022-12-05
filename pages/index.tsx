
/*react*/
import type { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Image from 'next/image';
import Head from 'next/head'

/*layout*/
import Layout from '../layouts/main'

/*components*/
import Hero from '../components/hero';
const  Home: NextPageWithLayout = () => {
  return (
    <main>
    <Hero/>
    </main>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;