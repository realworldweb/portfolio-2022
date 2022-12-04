
/*react*/
import type { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Image from 'next/image';
import Head from 'next/head'

/*layout*/
import Layout from '../layouts/main'


const  Home: NextPageWithLayout = () => {
  return (
    <main>
      main content
    </main>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;