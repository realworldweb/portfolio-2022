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

interface education {
    title: string;
    description: string;
    tech: Array<string>;
    dateCompleted: string;
    awardedBy: string;
}


export type {
    experince,
    project,
    education,
};
