/*next*/
import Image from 'next/image';

/*styles*/
import Styles from '../styles/modules/about.module.css';

/*assest*/
import working from '../public/hard-working.jpg';
import { SvgExperince, SvgLearning, SvgProject } from './svgs';

function About() {
	return (
		<section
			id='about'
			className={`parallax-section ${Styles.section} ${Styles.about}`}
		>
			<div className='d-flex w-100 position-relative'>
				<div className='row'>
					<div className='col-md-6 col-sm-12'>
						<div className={Styles.aboutThumb}>
							<div className='section-title'>
								<h1>About me</h1>
								<p className='color-yellow'>
									Young career driven professional.
								</p>
							</div>
							<div>
								<p>
									I am a professional developer based in Warrenpoint, co.Down
									northern Ireland. As well as an education and background in
									tech I am also a gradute of business and enjoy working with
									seo, branding and marketing strategy across various media
									platforms.
								</p>
								<p>
									In my spare time I like to keep active in the local tech
									community and regularly attend our local tech meetup{' '}
									<a  href='https://www.newrydigital.com' rel='noreferrer' target='_blank' className="d-inline position-relative link-primary">
										Newry digital
									</a>. I have a vivid imagination and a thirst for all things fanatsy and sci-fiction.
								</p>
							</div>
						</div>
					</div>

					<div className='col-md-3 d-flex position-relative col-sm-6'>
						<Image src={working} alt='hardworking developer' fill />
					</div>

					<div className='bg-yellow col-md-3 col-sm-6'>
						<div className={Styles.skillThumb}>
							<div className=' section-title color-white'>
								<h1>Explore</h1>
								<p className='color-white'>
									Browse my latest projects, courses and position.
								</p>
							</div>

							<div className={Styles.skillThumb}>
								<h6><SvgLearning width="1.2rem" height="1.2rem" />&nbsp; Learning</h6>
								<p>Current course</p>
                                        <hr/>
                                        <h6><SvgProject width="1.2rem" height="1.2rem" />&nbsp; Project</h6>
								<p>Current Project</p>
                                        <hr/>
                                        <h6><SvgExperince width="1.2rem" height="1.2rem" />&nbsp; Experince</h6>
								<p>Current Experince</p>

								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
