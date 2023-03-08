/*react*/
import { ReactElement } from 'react';

/*next*/
import type { NextPageWithLayout } from '../_app';
import Head from 'next/head';

/*data*/
import { getData } from '../../lib/data/data';

/*layout*/
import Layout from '../../layouts/main';

/*styles*/
import Styles from '../../styles/modules/feedback.module.css';

/*types*/
import { feedback } from '../../lib/constants/data-types';

export async function getStaticProps() {
	const feedback: Array<feedback> = await getData('feedback');

	return {
		props: {
			feedback,
		},
	};
}
interface MyProps {
	feedback: Array<feedback>;
}

const Feedback: NextPageWithLayout<MyProps> = ({ feedback }) => {
	return (
		<>
			<Head>
				<title>Realworldweb feedback</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
				<section className='d-flex w-100 flex-column flex-md-row'>
					<div
						className={`d-flex flex-column bg-yellow ${Styles.submitFeedback}`}
					>
						<p className='fw-bold mt-1 mx-auto'>Leave feedback</p>
						<form className='d-flex flex-column w-100 px-2 gap-30'>
							<label htmlFor='feedback'>Feedback</label>
							<textarea id='feedback' name='feedback' />
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' id='name' />
							<button
								type='submit'
								className='bg-dark mb-3 mx-auto color-yellow'
							>
								Leave feedback
							</button>
						</form>
					</div>
					<div
						className={`d-flex flex-column w-75 mx-auto my-5 ${Styles.currentFeedback}`}
					>
						<h1 className='d-flex position-relative'>&nbsp;Feedback</h1>
						<div className='d-flex gap-30 flex-wrap'>
							{feedback.map((item, index) => {
								return (
									<article
										key={index}
										className={`d-flex flex-column bg-dark mx-auto text-center p-3 ${Styles.feedback}`}
									>
										<p>{item.feedback}</p>
										<p className='position-relative align-self-end ml-n5'>
											{item.name}
										</p>
									</article>
								);
							})}
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

Feedback.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Feedback;
