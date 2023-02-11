import { SVGProps } from 'react';

export function SvgHTML5(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 24 24'
			{...rest}
		>
			<g fill='none'>
				<g fill={fill ? fill : 'currentColor'} clipPath='url(#svgIDa)'>
					<path d='M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081V0Zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656V1.073ZM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058V0Zm4.181 0h1.083v2.167h1.52v1.07h-2.603V0Z' />
					<path
						fillRule='evenodd'
						d='M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24l-6.944-1.928Zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571H9.183Z'
						clipRule='evenodd'
					/>
				</g>
				<defs>
					<clipPath id='svgIDa'>
						<path fill='#fff' d='M0 0h24v24H0z' />
					</clipPath>
				</defs>
			</g>
		</svg>
	);
}

export function SvgReact(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 512 512'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M410.66 180.72q-7.67-2.62-15.45-4.88q1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83c-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11q-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69c-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07q-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49c25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25q6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93c25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86q4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78c-.02-29-33.52-57.01-85.36-74.9Zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39c16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16a481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89q7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63c13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78q10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32a434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48Zm13.72-73.07q-6.64-12.65-13.81-25q-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39Zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18ZM145.66 65.86c16.06-9.32 51.57 4 89 37.27c2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83Zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81c-11.88-10.19-17.9-20.36-17.9-28.6c0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75a502.46 502.46 0 0 0-23.69 61.58Zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72c-14.78 5.23-26.55 5.38-33.66 1.27c-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39a501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74Zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86c-15.13 8.78-47.48-2.63-82.36-32.72c-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2a477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47Zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94a481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52c44.42 15.32 71.52 38 71.52 55.43c0 18.6-29.27 42.74-76.78 58.52Z'
			/>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M256 298.55a43 43 0 1 0-42.86-43a42.91 42.91 0 0 0 42.86 43Z'
			/>
		</svg>
	);
}

export function SvgFirebase(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 24 24'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M5.239 15.063L7.21 2.381a.453.453 0 0 1 .847-.145l2.12 3.979l-4.938 8.848zM19.24 18.14L17.363 6.469a.454.454 0 0 0-.766-.246L4.76 18.14l6.55 3.691c.411.23.912.23 1.323 0l6.607-3.691zM13.917 7.955L12.4 5.052a.452.452 0 0 0-.8 0L4.939 16.989l8.978-9.034z'
			/>
		</svg>
	);
}

export function SvgNodejs(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 24 24'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8Z'
			/>
		</svg>
	);
}

export function SvgLearning(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 2048 2048'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M384 1536h128v128H256V384H128v1408h384v128H0V256h256V128h384q88 0 169 27t151 81q69-54 150-81t170-27h384v128h256v819l-128-58V384h-128v575l-128-59V256h-256q-71 0-136 24t-120 71v608l-128 58V351q-54-46-119-70t-137-25H384v1280zm1408 255l-448 225l-448-225q0-36 1-76t8-81t20-77t36-67l-193-88v582H640v-640l704-320l704 320l-321 146l8 11q21 31 32 67t17 73t7 76t1 74zm-448-627l-395 180l395 180l395-180l-395-180zm0 709l320-161q-1-26-4-47t-11-41t-16-39t-23-42l-266 121l-266-121q-15 24-24 43t-16 38t-9 40t-4 49l319 160z'
			/>
		</svg>
	);
}

export function SvgProject(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 32 32'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z'
			/>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z'
			/>
		</svg>
	);
}

export function SvgExperince(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 20 20'
			{...rest}
		>
			<g fill={fill ? fill : 'currentColor'}>
				<path
					fillRule='evenodd'
					d='M3.5 11v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-4h2Z'
					clipRule='evenodd'
				/>
				<path
					fillRule='evenodd'
					d='M1 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7Zm16 0H3v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7Z'
					clipRule='evenodd'
				/>
				<path
					fillRule='evenodd'
					d='M7 4.746V6.5H5V4.746a3 3 0 0 1 .09-.727l.061-.247A3 3 0 0 1 8.061 1.5h3.877a3 3 0 0 1 2.91 2.272l.062.247a3 3 0 0 1 .09.727V6.5h-2V4.746a.997.997 0 0 0-.03-.242l-.061-.247a1 1 0 0 0-.97-.757H8.061a1 1 0 0 0-.97.757l-.062.247a1 1 0 0 0-.03.242Z'
					clipRule='evenodd'
				/>
				<path d='M7.866 11.5a1 1 0 0 1-1.732 0L5.268 10a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5l-.866 1.5Z' />
				<path
					fillRule='evenodd'
					d='M7 10.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1Z'
					clipRule='evenodd'
				/>
				<path d='M13.866 11.5a1 1 0 0 1-1.732 0l-.866-1.5a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5l-.866 1.5Z' />
				<path
					fillRule='evenodd'
					d='M13 10.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1Z'
					clipRule='evenodd'
				/>
			</g>
		</svg>
	);
}

export function SvgStar(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 256 256'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='m234 115.5l-45.2 37.6l14.3 58.1a16.5 16.5 0 0 1-15.8 20.8a16.1 16.1 0 0 1-8.7-2.6l-50.5-31.9h-.2L81 227.2a18 18 0 0 1-20.1-.6a18.5 18.5 0 0 1-7-19.6l13.5-53.1L22 115.5a16.8 16.8 0 0 1-5.2-18.1A16.5 16.5 0 0 1 31.4 86l59-3.8l22.4-55.8A16.4 16.4 0 0 1 128 16a16.4 16.4 0 0 1 15.2 10.4l22 55.5l59.4 4.1a16.4 16.4 0 0 1 14.6 11.4a16.8 16.8 0 0 1-5.2 18.1Z'
			/>
		</svg>
	);
}

export function SvgPhone(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 24 24'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M10 20h4v-1h-4Zm-3 3q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-7h10V6H7Z'
			/>
		</svg>
	);
}

export function SvgEnvelope(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 256 256'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='m224 96l-78.5 56h-35L32 96l96-64Z'
				opacity='.2'
			/>
			<path
				fill={fill ? fill : 'currentColor'}
				d='m228.4 89.3l-96-64a8.2 8.2 0 0 0-8.8 0l-96 64A7.9 7.9 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a7.9 7.9 0 0 0-3.6-6.7ZM40 111.5L96.7 152L40 192Zm73.1 48.5h29.8l56.6 40h-143Zm46.2-8l56.7-40.5V192ZM128 41.6l81.9 54.6l-67 47.8h-29.8l-67-47.8Z'
			/>
		</svg>
	);
}

export function SvgGithub(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 24 24'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'
			/>
		</svg>
	);
}

export function SvgLinkedin(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			width={width ? width : '1rem'}
			height={height ? height : '1rem'}
			viewBox='0 0 24 24'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z'
			/>
		</svg>
	);
}

export function CaretBack(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg width={width} height={height} viewBox='0 0 512 512' {...rest}>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M321.94 98L158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18Z'
			/>
		</svg>
	);
}

export function DoubleCaretBack(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg width={width} height={height} viewBox='0 0 512 512' {...rest}>
			<path
				fill={fill ? fill : 'currentColor'}
				d='m30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53Z'
			/>
		</svg>
	);
}

export function CaretForward(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg width={width} height={height} viewBox='0 0 512 512' {...rest}>
			<path
				fill={fill ? fill : 'currentColor'}
				d='m190.06 414l163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18Z'
			/>
		</svg>
	);
}

export function CaretDoubleForward(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg width={width} height={height} viewBox='0 0 512 512' {...rest}>
			<path
				fill={fill ? fill : 'currentColor'}
				d='m481.29 229.47l-188.87-113a30.54 30.54 0 0 0-31.09-.39a33.74 33.74 0 0 0-16.76 29.47v79.05L63.85 116.44a30.54 30.54 0 0 0-31.09-.39A33.74 33.74 0 0 0 16 145.52v221A33.74 33.74 0 0 0 32.76 396a30.54 30.54 0 0 0 31.09-.39L244.57 287.4v79.08A33.74 33.74 0 0 0 261.33 396a30.54 30.54 0 0 0 31.09-.39l188.87-113a31.27 31.27 0 0 0 0-53Z'
			/>
		</svg>
	);
}

export function FileDownload(
	props: SVGProps<SVGSVGElement>
) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 20 20'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H9.743A5.5 5.5 0 0 0 4 9.207V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM5.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-2.354-4.146a.5.5 0 0 1 .708-.708L5 15.293V12.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.351.146h-.006a.5.5 0 0 1-.348-.144l-.003-.003l-2-2Z'
			/>
		</svg>
	);
}
