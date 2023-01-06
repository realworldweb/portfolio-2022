/*react*/
import { useState } from 'react';

/*next*/
import Link from 'next/link';

/*tools*/
import axios from 'axios';

/*types*/
import { formEvent, changeEvent } from '../lib/constants/event-types';

/*styles*/
import Styles from '../styles/modules/contact.module.css';
import { SvgEnvelope, SvgGithub, SvgLinkedin, SvgPhone } from './svgs';

const Contact = () => {

	const [email, setEmail] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	

	const handleContact = (e: formEvent) => {
		e.preventDefault();

		const data = {
			email,
			name,
            message,
            subject,
			phone,
		}

		const axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				"Access-Control-Allow-Origin": "*",
			}
		  };
		  

		axios.post('/api/send-email', data, axiosConfig).then((res) => {
			console.log(res);
		  })
		  .catch((err) => {
			console.error(err)
		  })


	};

	return (
		<section
			id='contact'
			className={`d-flex position-relative w-100 bg-dark py-5 p-md-5 ${Styles.contact}`}
		>
			<div className='d-flex position-relative w-100'>
				<div
					className='d-flex flex-column flex-md-row flex-md-wrap align-items-center position-relative w-100'
				>
					<div
						className={`d-flex position-relative mx-auto  ${Styles.contactFormContainer}`}
					>
						<div className={`d-flex pt-2 flex-column ${Styles.contactForm}`}>
							<div className='d-flex flex-column position-relative'>
								<h1 className='color-white'>Say hello..</h1>
								<p className='color-white'>
									Drop a message below to reach my inbox.
								</p>
							</div>

							<div id='contact-form'>
								<form
									action='#template-mo'
									onSubmit={(e: formEvent) => handleContact(e)}
								>
									<div>
										<input
										    value={name}
											onChange={ (e: changeEvent ) => setName(e.target.value)}
											name='fullname'
											type='text'
											className='form-control'
											id='fullname'
											placeholder='Your Name'
										/>
									</div>
									<div>
										<input
											name='email'
											type='email'
											onChange={ (e: changeEvent) => setEmail(e.target.value)}
											className='form-control'
											id='email'
											placeholder='Your Email'
										/>
									</div>
									<div>
										<input
										    value={phone}
											onChange={ (e: changeEvent ) => setPhone(e.target.value)}
											name='phone'
											type='text'
											className='form-control'
											id='phone'
											placeholder='Your Number'
										/>
									</div>
									<div>
										<input
										    value={subject}
											onChange={ (e: changeEvent ) => setSubject(e.target.value)}
											name='subject'
											type='text'
											className='form-control'
											id='subject'
											placeholder='message subject'
										/>
									</div>
									<div>
										<textarea
											name='message'
											rows={5}
											className='form-control'
											onChange={ (e: changeEvent) => setMessage(e.target.value)}
											id='message'
											placeholder='Write your message...'
										/>
									</div>
									<div>
										<input
											name='submit'
											type='submit'
											className='form-control'
											id='submit'
											value='Send'
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className={`position-relative ${Styles.contactThumb}`}>
						<div>
							<h3 className='color-white'>Base camp</h3>
							<p>Warrenpoint, co.Down , northern Ireland</p>
						</div>

						<div>
							<h3 className='color-white'>Contact.</h3>
							<p>
								<SvgPhone width='1.3rem' height='1.3rem' />
								&nbsp;07850544269
							</p>
							<p>
								<SvgEnvelope width='1.3rem' height='1.3rem' />
								&nbsp;
								<a href='mailto:paulrooney60@gmail.com'>
									paulrooney60@gmail.com
								</a>
							</p>
							<p>
								<SvgGithub width='1.3rem' height='1.3rem' />
								&nbsp;
								<a
									href='https://github.com/realworldweb'
									rel='noreferrer'
									target='_blank'
								>
									https://github.com/realworldweb
								</a>
							</p>
							<p>
								<SvgLinkedin width='1.3rem' height='1.3rem' />
								&nbsp;
								<a href='https://www.linkedin.com/in/paul-rooney-6760b0b5/'>
									https://www.linkedin.com/in/paul-rooney-6760b0b5/
								</a>
							</p>
						</div>
					</div>
					<div className={`position-relative mx-auto ${Styles.contactThumb}`}>
						<div>
							<h2 className='color-white'>Realworldweb</h2>
						</div>

						<nav className={`d-flex w-100 flex-column align-items-right ${Styles.footerNav}`}>
							<Link href='/'>Home</Link>
							<Link href='/projects'>Projects</Link>
							<Link href='/learning'>Learning</Link>
							<Link href='/experince'>Experince</Link>
							<a
								href='#'
								onClick={(e) => {
									e.preventDefault();
									window.scrollTo(0, 0);
								}}
							>
								Back to top
							</a>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
