/*react*/
import { useRef, useState } from 'react';

/*next*/
import Link from 'next/link';
import { useRouter } from 'next/router';

/*styles*/
import Styles from '../../styles/modules/header.module.css';

/*assets*/
import { FileDownload } from '../assets/svgs';

function Header() {
	const router = useRouter();
	const { asPath } = router;

	const [scroll, setScroll] = useState<number>(0)

	const navToggle = useRef<HTMLDivElement>(null);

	const toggleNavbar = () => {
		if (!navToggle.current) return;

		if (navToggle.current.classList.contains(`${Styles.customNavbarOpen}`)) {
			navToggle.current.classList.remove(`${Styles.customNavbarOpen}`);
		} else {
			navToggle.current.classList.add(`${Styles.customNavbarOpen}`);
		}
	};

	return (
		<div className={`navbar w-100 bg-light ${Styles.customNavbar}`} ref={navToggle}>
			<div
				className={`justify-content-start mx-auto ${Styles.container}`}
			>
				<div className='d-flex position-relative w-100 justify-content-between'>
					<button
						className={`d-inline-block d-lg-none position-absolute ${Styles.navbarToggle}`}
						onClick={toggleNavbar}
					>
						<svg
							className={Styles.menuIcon}
							xmlns='http://www.w3.org/2000/svg'
							width='50'
							height='50'
							viewBox='0 0 50 50'
						>
							<title>Toggle Menu</title>
							<g>
								<line
									className={Styles.menuIconBar}
									x1='13'
									y1='16.5'
									x2='37'
									y2='16.5'
								/>
								<line
									className={Styles.menuIconBar}
									x1='13'
									y1='24.5'
									x2='37'
									y2='24.5'
								/>
								<line
									className={Styles.menuIconBar}
									x1='13'
									y1='24.5'
									x2='37'
									y2='24.5'
								/>
								<line
									className={Styles.menuIconBar}
									x1='13'
									y1='32.5'
									x2='37'
									y2='32.5'
								/>
								<circle
									className={Styles.menuIconCircle}
									r='23'
									cx='25'
									cy='25'
								/>
							</g>
						</svg>
						<span />
						<span />
						<span />
						<span className={Styles.splash} />
					</button>
					<Link href='/' className={`d-inline-flex position-relative ml-2 ${Styles.customBrand} ${scroll > 0 ? Styles.customBrandSmall: ""}`}>
						RealworldWeb
					</Link>
				</div>

				<nav className={`nav flex-nowrap ${Styles.menu}`}>
					<span
						className={`${Styles.standardLink} ${
							asPath === '/' ? Styles.activeLink : ''
						}`}
					>
						<Link href='/'>Home</Link>
					</span>
					<span
						className={`${Styles.standardLink} ${
							asPath === '/projects' ? Styles.activeLink : ''
						}`}
					>
						<Link href='/projects'>Projects</Link>
					</span>
					<span
						className={`${Styles.standardLink} ${
							asPath === '/courses' ? Styles.activeLink : ''
						}`}
					>
						<Link href='/courses'>Learning</Link>
					</span>
					<span
						className={`${Styles.standardLink} ${
							asPath === '/roles' ? Styles.activeLink : ''
						}`}
					>
						<Link href='/roles'>Experince</Link>
					</span>
					<span
						className={`${Styles.standardLink} ${
							asPath === '/contact' ? Styles.activeLink : ''
						}`}
					>
						<a href='#contact'>Contact</a>
					</span>
					<span
						className={`${Styles.standardLink}`} 

					>
						<a className='d-flex w-100 align-items-center justify-content-center' href='/cv.docx' download><FileDownload width={"1.7rem"} height={"1.7rem"}/>Download CV</a>
					</span>
				</nav>
			</div>
		</div>
	);
}

export default Header;
