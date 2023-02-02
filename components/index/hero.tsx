/*next*/
import Image from 'next/image';

/*styles*/
import Styles from '../../styles/modules/hero.module.css';

/*assests*/
import heroImg from '../../public/hero-wide.jpg';

function Hero() {
	return (
		<section id='home' className={`parallax-section ${Styles.home}`}>
			<div className='d-block w-100'>
				<div className='row'>
					<div
						className={`position-relative p-0 col-12 col-md-6 ${Styles.heroImg}`}
					>
						<Image
							src={heroImg}
							fill
							alt='hardworking UX frontend focused fullstack developer'
							sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
						/>
					</div>

					<div className='col-md-6 p-0'>
						<div className={Styles.tagline}>
							<div className='section-title mt-2'>
								<h1 className='d-block'>
						Hello, I am <strong>Paul</strong> a frontend focused fullstack
									developer.
								</h1>
								<p className='d-block'>
									I am a frontend focused fullstack developer based in northern Ireland with a number of years experince working with HTML, CSS and Javascript.
                                             Most recently I have been using react with next.js to build fast immersive frontend experinces which can run in serverless enviorments like Netlify.
								</p>
								<p className='d-block'>
								In my spare time I like to keep active in the local tech community and regularly attend our local tech meetup Newry digital. I have a vivid imagination and a thirst for all things fanatsy and sci-fiction.
								</p>

								<a
									href='#about'
									className='section-btn btn btn-success'
									data-wow-delay='1.4s'
								>
									Find out more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
