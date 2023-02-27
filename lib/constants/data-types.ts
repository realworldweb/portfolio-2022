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
    name: string;
    feedback: string;

}

interface fields {
    [key : string]: string
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
    fields,
    feedback
};
