/*react*/
import { ReactElement, useState } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';
import Image from 'next/image';

/*data*/
import { getData } from '../lib/data/data';

/*function*/
import { filterByTech, paginate } from '../lib/functions/data-functions';


/*layout*/
import Layout from '../layouts/main';

/*types*/
import { project } from '../lib/constants/data-types';
import Pagination from '../components/content-pages/pagination';

export async function getStaticProps() {
	const projects: Array<project> = await getData('projects');

	return {
		props: {
			projects,
		},
	};
}
interface MyProps {
	projects: Array<project>;
}

const Home: NextPageWithLayout<MyProps> = ({ projects }) => {
  const [data, setData] = useState<Array<project>>(projects);
  const pages: Array<Array<project>> = paginate(data) as Array<Array<project>>;
  const [page, setPage] = useState<number>(1);
  const current = pages[page -1];

  console.log(current);

  
  

  const changePage = (pageNumber: number) => {
   setPage((prevPage) => prevPage === pageNumber ? prevPage : pageNumber);
  };

	return (
		<>
			<Head>
				<title>Realworldweb projects</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
          {current.map((project: project, index: number) => {
            return (
            <article
              className={`d-flex flex-wrap my-2 mx-auto`}
              key={index}
            >
              <div
                className={`d-inline mx-auto mb-2 position-relative`}
              >
                <Image
                  src={`/${project.project
                    .replaceAll(' ', '-')
                    .toLowerCase()}-sm.webp`}
                  alt='project image'
                  sizes='(max-width: 768px) 98vw,
                                                 (max-width: 1200px) 20vw'
                  fill
                />
              </div>
              <div
                className={`d-flex flex-column align-items-center`}
              >
                <h5 className='text-white'>{project.project}</h5>
                <p>{project.description}</p>
                <div>
                  {project.tech.map((tech, index) => {
                    return (
                      <span
                        className={`mx-1 mt-2 p-2 badge bg-secondary`}
                        key={index}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
            );
          })}
          <Pagination changePage={changePage} count={pages.length}/>
			</main>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
