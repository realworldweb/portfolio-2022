
/*react*/
import type { ReactElement} from 'react';
import { useState } from 'react';

/*next*/
import type { NextPageWithLayout } from '../_app';
import Head from 'next/head'

/*data*/
import { getData } from '../../lib/data/data';

/*components*/
import Pagination from '../../components/content-pages/pagination';
import ContentControls from '../../components/content-pages/content-controls';

/*layout*/
import Layout from '../../layouts/main'

/*styles*/
import Styles from '../styles/modules/content.module.css';

/*types*/
import { experince } from '../../lib/constants/data-types';

/*functions*/
import { filterByTech, paginate, filters } from '../../lib/functions/data-functions';



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
const  Experince: NextPageWithLayout<MyProps> = ({ roles }) => {

  const [data, setData] = useState<Array<experince>>(roles);
  const pages: Array<Array<experince>> = paginate(data) as Array<Array<experince>>;
  const [page, setPage] = useState<number>(1);
  const current = pages[page -1];

  const changePage = (pageNumber: number) => {
    setPage((prevPage) => prevPage === pageNumber ? prevPage : pageNumber);
   };
 
   const filterData = (tech: string) => {
     setData(filterByTech(roles, tech) as Array<experince>);
   };

  return (
  <>
      <Head>
          <title>Realworldweb experince</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <main>
      <div className={`d-flex flex-column`}>
          <div className={`d-inline m-2 p-1 align-self-start`}>
          <ContentControls filter={filterData} tech={filters(roles)} />
          </div>
          <div className={`d-flex mb-3 flex-wrap`}>
          {current ?
          <>
            {current.map((role: experince, index: number) => {
              return (
              <article
                className={`d-flex align-items-center position-relative flex-column flex-lg-row my-2 p-2 py-3 mx-auto ${Styles.project}`}
  
                key={index}
              >
                <div
                  className={`d-flex mx-auto fw-bold flex-column align-items-center ${Styles.roleInfo}`}
                >
                  <h5 className='color-blue fw-bolder'>{role.employer}</h5>
                  <p className='text-center color-blue'>{role.description}</p>
                  <div>
                    {role.tech.map((tech, index) => {
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
          </> : null };
          </div>
          </div>
          <Pagination changePage={changePage} count={pages.length}/>
      </main> 
  </>
  )
}

Experince.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Experince;