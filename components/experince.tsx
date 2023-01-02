/*next*/
import Image from 'next/image';

/*assests*/
import { SvgExperince } from './svgs';
import ExperinceImage from '../public/experience.jpg';

/*Styles*/
import Styles from '../styles/modules/info.module.css';
import Link from 'next/link';

const Experince = () => {
	return (
		<section id='experience' className={`parallax-section ${Styles.experince}`}>
			<div className='d-flex position-relative w-100'>
				<div className='w-100 d-flex'>
					<div className='position-relative d-none d-md-flex col-md-6'>
						<Image src={ExperinceImage} alt='my experince' fill />
					</div>

					<div
						className={` col-12 col-md-6 position-relative pt-2 ${Styles.content}`}
					>
						<div className={`color-white`}>
							<div>
								<h1>My Experience</h1>
								<p className='color-white'>Current and last role</p>
							</div>

							<div>
								<div className='media-body'>
									<div className='d-flex flex-wrap flex-md-nowrap align-items-center position-relative'>
										<SvgExperince width='2rem' height='2rem' fill='#633' />
										&nbsp;
										<h3 className='d-block m-0'>React developer </h3>
										&nbsp;
										<h4 className='color-white position-relative mt-n1'>
											(Livetree)
										</h4>
										&nbsp;
										<span className='position-relative mx-auto m-md-0'>
											Jun 2022 - present
										</span>
									</div>
									<p className='color-white position-relative mx-auto mx-md-0 p-2'>
										Lead frontend developer for a web3 social network. In this
										role I am working with react and next.js to create an
										immersive frontend web3 based social network. I have used
										various tools throughout this role including Firebase,
										Agolia , MetaMask, Ethers and Javascript BigNumber libaries.
									</p>
								</div>
							</div>

							<div>
								<div className='media-body d-flex flex-column'>
									<div className='d-flex flex-wrap flex-md-nowrap align-items-center position-relative'>
										<SvgExperince width='2rem' height='2rem' fill='#633' />
										&nbsp;
										<h3 className='d-block m-0'>React developer </h3>
										&nbsp;
										<h4 className='color-white position-relative mt-n1'>
											(Browsio)
										</h4>
										&nbsp;
										<span className='position-relative mx-auto m-md-0'>
											Apr 2022 - Jul 2022
										</span>
									</div>
									<p className='color-white position-relative mx-auto mx-md-0 p-2'>
										A volunteer position with a charity auction website. My main
										roles were managing the handover of the site from a
										development company in india. Creating a digital ocean
										mirror of the production server managing users and
										permissions in terminal and creating the new versioning
										system for the volunteer team.
									</p>
								</div>
								<Link href='/experince'>
									<h4
										className={`d-flex w-100 position-relative justify-content-end align-items-center p-4 ${Styles.link}`}
									>
										More details&nbsp;<span className='d-inline position-relative pb-1'>&raquo;</span>
									</h4>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experince;
