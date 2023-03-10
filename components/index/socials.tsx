/*next*/
import Image from 'next/image';

/*assets*/
import {
	SVGCodewars,
	SvgGithub,
	SvgHackerrank,
	SvgLeetcode,
	SvgLinkedin,
} from '../assets/svgs';

const socials = () => {
	return (
		<section className='d-flex flex-column w-100 bg-blue'>
			<span className='heading4'>Social profiles</span>
			<div className={`d-flex py-2`} style={{ gap: '10px' }}>
				<a
					href='https://www.codewars.com/users/realworldweb'
					target='_blank'
					rel='noreferrer'
				>
					<SVGCodewars width='2rem' height='2rem' />
				</a>
				<a
					href='https://www.hackerrank.com/realworldweb'
					target='_blank'
					rel='noreferrer'
				>
					<SvgHackerrank width='2rem' height='2rem' />
				</a>
				<a
					href='https://www.hackerrank.com/realworldweb'
					target='_blank'
					rel='noreferrer'
				>
					<SvgLinkedin width='2rem' height='2rem' />
				</a>
				<a
					href='https://www.hackerrank.com/realworldweb'
					target='_blank'
					rel='noreferrer'
				>
					<SvgGithub width='2rem' height='2rem' />
				</a>
				<a
					href='https://www.hackerrank.com/realworldweb'
					target='_blank'
					rel='noreferrer'
				>
					<SvgLeetcode width='2rem' height='2rem' />
				</a>
			</div>
		</section>
	);
};

export default socials;
