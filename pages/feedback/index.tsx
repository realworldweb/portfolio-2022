/*react*/
import { ReactElement, useState } from 'react';

/*next*/
import type { NextPageWithLayout } from '../_app';
import Head from 'next/head';

/*external modules*/
import axios from 'axios';

/*data*/
import { getData } from '../../lib/data/data';

/*components*/
import PulsingGrid from '../../components/assets/animations/pulsing-grid';

/*layout*/
import Layout from '../../layouts/main';

/*styles*/
import Styles from '../../styles/modules/feedback.module.css';

/*types*/
import { feedback } from '../../lib/constants/data-types';
import { formEvent } from '../../lib/constants/event-types';

export async function getStaticProps() {
	let feedback: Array<feedback> = await getData('feedback');
	feedback = feedback.filter((item) => item.approved === true);
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
	const [name, setName] = useState('');
	const [userFeedback, setUserFeedback] = useState('');
	const [feedbackUploaded, setFeedbackUploaded] = useState('');

	const data: feedback = {
		name,
		feedback: userFeedback,
	};

	const axiosConfig = {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
		},
	};

	const handleSubmit = (e: formEvent) => {
		e.preventDefault();

		axios
			.post('/api/data', data, axiosConfig)
			.then(() => {
				setFeedbackUploaded('success');
			})
			.catch((err) => {
				console.error(err);
				setFeedbackUploaded('error');
			});
	};

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
						{feedbackUploaded === 'success' ? (
							<p className='fw-bold mt-1 text-center mx-auto'>
								Thank you for your feedback!
							</p>
						) : feedbackUploaded === 'loading' ? (
							<div className='d-flex flex-column align-items-center position-relative w-75 mx-auto'>
								Please wait
								<PulsingGrid />
							</div>
						) : (
							<form
								className='d-flex flex-column w-100 px-2 gap-30'
								onSubmit={(e) => {
									handleSubmit(e);
									setFeedbackUploaded('loading');
								}}
							>
								<label htmlFor='feedback'>Feedback</label>
								<textarea
									value={userFeedback}
									id='feedback'
									name='feedback'
									onChange={(e) => setUserFeedback(e.target.value)}
								/>
								<label htmlFor='name'>Name</label>
								<input
									value={name}
									type='text'
									name='name'
									id='name'
									onChange={(e) => setName(e.target.value)}
								/>
								<button
									type='submit'
									className='bg-dark mb-3 mx-auto color-yellow'
								>
									Leave feedback
								</button>
							</form>
						)}
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
