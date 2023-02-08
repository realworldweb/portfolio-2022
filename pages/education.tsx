
/*react*/
import type { ReactElement } from 'react';
import { useState } from 'react';

/*next*/
import type { NextPageWithLayout } from './_app';
import Head from 'next/head'

/*data*/
import { getData } from '../lib/data/data';

/*components*/
import Pagination from '../components/content-pages/pagination';
import ContentControls from '../components/content-pages/content-controls';

/*function*/
import { filterByTech, paginate, filters } from '../lib/functions/data-functions';

/*layout*/
import Layout from '../layouts/main';

/*styles*/
import Styles from '../styles/modules/content.module.css';

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

  const [data, setData] = useState<Array<education>>(courses);
  const pages: Array<Array<education>> = paginate(data) as Array<Array<education>>;
  const [page, setPage] = useState<number>(1);
  const current = pages[page -1];


  const changePage = (pageNumber: number) => {
   setPage((prevPage) => prevPage === pageNumber ? prevPage : pageNumber);
  };

  const filterData = (tech: string) => {
    setData(filterByTech(courses, tech) as Array<education>);
  };
  

  return (
  <>
      <Head>
          <title>Realworldweb courses</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <main>
      <div className={`d-flex flex-column`}>
          <div className={`d-inline m-2 p-1 align-self-start`}>
          <ContentControls filter={filterData} tech={filters(courses)} />
          </div>
          <div className={`d-flex mb-3 flex-wrap`}>
          {current.map((course: education, index: number) => {
            return (
            <article
              className={`d-flex align-items-center position-relative flex-column flex-lg-row my-2 p-2 py-3 mx-auto ${Styles.project}`}

              key={index}
            >
              <div
                className={`d-flex mx-auto fw-bold flex-column align-items-center ${Styles.projectInfo}`}
              >
                <h5 className='color-blue fw-bolder'>{course.title}</h5>
                <p className='text-center color-blue'>{course.description}</p>
                <div>
                  {course.tech.map((tech, index) => {
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
          </div>
          </div>
          <Pagination changePage={changePage} count={pages.length}/>
      </main> 
  </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;