/*react*/
import { useRef, useEffect, useState } from 'react';

/*next*/
import Link from 'next/link';
import { useRouter } from 'next/router';

/*styles*/
import Styles from '../styles/modules/header.module.css';

function Header() {
	const router = useRouter();
	const { asPath } = router;

	const [scroll, setScroll] = useState<number>(0)

	const navToggle = useRef<HTMLButtonElement>(null);

	const toggleNavbar = () => {
		if (!navToggle.current) return;

		if (navToggle.current.classList.contains(`${Styles.customNavbarOpen}`)) {
			navToggle.current.classList.remove(`${Styles.customNavbarOpen}`);
		} else {
			navToggle.current.classList.add(`${Styles.customNavbarOpen}`);
		}
	};

	useEffect(() => {
		if(!window)return;

		window.addEventListener('scroll', () => setScroll(window.scrollY));
		

        return () => {
			window.removeEventListener('scroll', () => setScroll(window.scrollY));
	} })

	return (
		<header className={`navbar fixed-top ${Styles.customNavbar} ${scroll > 0 ? Styles.customNavbarScrolled: ""}`} ref={navToggle}>
			<div
				className={`mx-auto justify-content-start ${Styles.container}`}
			>
				<div className='d-flex position-relative w-100 justify-content-between'>
					<button
						className={`d-inline-block d-md-none position-absolute ${Styles.navbarToggle}`}
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
						<div className={Styles.splash}></div>
					</button>
					<a href='#' className={`d-inline-flex position-relative ml-2 mt-3 mt-md-0 ${Styles.customBrand} ${scroll > 0 ? Styles.customBrandSmall: ""}`}>
						RealworldWeb
					</a>
				</div>

				<ul className={`nav ${Styles.menu}`}>
					<li
						className={`${Styles.standardLink} ${
							asPath === '/' ? Styles.activeLink : ''
						}`}
					>
						<Link href='/'>Home</Link>
					</li>
					<li
						className={`${Styles.standardLink} ${
							asPath === '/projects' ? Styles.activeLink : ''
						}`}
					>
						<Link href='/projects'>Projects</Link>
					</li>
					<li
						className={`${Styles.standardLink} ${
							asPath === '/learning' ? Styles.activeLink : ''
						}`}
					>
						<Link href='/learning'>Learning</Link>
					</li>
					<li
						className={`${Styles.standardLink} ${
							asPath === '/experince' ? Styles.activeLink : ''
						}`}
					>
						<Link href='/experince'>Experince</Link>
					</li>
					<li
						className={`${Styles.standardLink} ${
							asPath === '/contact' ? Styles.activeLink : ''
						}`}
					>
						<Link href='#contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
