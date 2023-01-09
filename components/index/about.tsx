
/*styles*/
import Styles from '../../styles/modules/about.module.css';


function About() {
	return (
		<section
			id='about'
			className={`parallax-section ${Styles.section} ${Styles.about}`}
		>
			<div className='d-flex w-100 position-relative'>
				<div className='row'>
					<section className='col-md-6 col-sm-12'>
						<article className={Styles.aboutThumb}>
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
						</article>
					</section>

					<section className={`bg-dark col-md-6 ${Styles.projectThumb}`}>
						<article className={Styles.skillThumb}>
							<div className=' section-title color-white'>
								<h1>Projects</h1>
								<p className='color-white'>
									Browse my latest projects.
								</p>
							</div>

							<div className={Styles.skillThumb}>

								
								
							</div>
						</article>
					</section>
				</div>
			</div>
		</section>
	);
}

export default About;
