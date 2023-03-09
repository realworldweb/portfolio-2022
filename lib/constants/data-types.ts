interface experince {
	employer: string;
	role: string;
	period: string;
	description: string;
	tech: Array<string>;
}

interface project {
	project: string;
	description: string;
	tech: Array<string>;
	type: string;
	url: string;
	github: string;
}

interface feedback {
	_id?: any;
	name: string | null;
	feedback: string;
	approved?: boolean;
}

interface fields {
	[key: string]: string;
}

interface education {
	title: string;
	description: string;
	tech: Array<string>;
	dateCompleted: string;
	awardedBy: string;
}

interface mailing {
	phone: string | null;
	subject: string | null;
	email: string | null;
	name: string | null;
	message: string | null;
}

export type { experince, project, education, fields, feedback, mailing };
