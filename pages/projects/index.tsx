/*react*/
import { ReactElement, useState } from 'react';

/*next*/
import type { NextPageWithLayout } from '../_app';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

/*data*/
import { getData } from '../../lib/data/data';

/*components*/
import Pagination from '../../components/content-pages/pagination';
import ContentControls from '../../components/content-pages/content-controls';

/*function*/
import { filterByTech, paginate, filters } from '../../lib/functions/data-functions';

/*layout*/
import Layout from '../../layouts/main';

/*styles*/
import Styles from '../../styles/modules/content.module.css';


/*types*/
import { project } from '../../lib/constants/data-types';

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

const Projects: NextPageWithLayout<MyProps> = ({ projects }) => {

  const [data, setData] = useState<Array<project>>(projects);
  const pages: Array<Array<project>> = paginate(data) as Array<Array<project>>;
  const [page, setPage] = useState<number>(1);
  const current = pages[page -1];


  const changePage = (pageNumber: number) => {
   setPage((prevPage) => prevPage === pageNumber ? prevPage : pageNumber);
  };

  const filterData = (tech: string) => {
    setData(filterByTech(projects, tech) as Array<project>);
  };
  
	return (
		<>
			<Head>
				<title>Realworldweb projects</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
        <div className={`d-flex flex-column`}>
          <div className={`d-inline m-2 p-1 align-self-start`}>
          <ContentControls filter={filterData} tech={filters(projects)} />
          </div>
          <div className={`d-flex mb-3 flex-wrap`}>
          {current ?
          <>
            {current.map((project: project, index: number) => {
              return (
                <article
                  className={`d-flex position-relative my-2 p-2 py-3 mx-auto ${Styles.project}`}
                >
                  <Link className='d-flex align-items-center w-100 position-relative flex-column flex-xl-row' href={`/projects/${project.project.replaceAll(" ","-")}`} key={index}>
                  <div
                    className={`d-flex mx-auto mx-xl-0 mb-2 position-relative ${Styles.projectImage}`}
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
                    className={`d-flex mx-auto fw-bold flex-column align-items-center ${Styles.projectInfo}`}
                  >
                    <h5 className='color-blue fw-bolder'>{project.project}</h5>
                    <p className='text-center color-blue'>{project.description}</p>
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
                  </Link>
                </article>
              
              );
            })}
          </>
          :null
          }
          </div>
          </div>
          <Pagination changePage={changePage} count={pages.length}/>
			</main>
		</>
	);
};

Projects.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Projects;
