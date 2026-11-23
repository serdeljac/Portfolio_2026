export type SkillGroup = {
    title: string;
    // Rendered as chips, or as a single line of text when `asText` is true.
    items: string[];
    asText?: boolean;
}

// Highlighted with the accent outline ("Core stack — what I use daily").
export const coreSkills = ['Vue 3', 'TypeScript', 'Sass'];

export const skillGroups: SkillGroup[] = [
    {
        title: 'Frontend',
        items: ['Vue 3', 'TypeScript', 'Sass', 'JavaScript', 'HTML5', 'CSS3', 'React', 'React Router', 'Vue Router', 'Redux', 'Next.js', 'Leaflet'],
    },
    {
        title: 'Backend & data',
        items: ['Node.js', 'Express', 'SQL', 'PostgreSQL', 'MySQL', 'REST APIs', 'Zod', 'Schema design', 'SQL migrations', 'Constraints & transactions', 'Session auth', 'WordPress', 'Stripe', 'PayPal', 'Mailchimp'],
    },
    {
        title: 'Testing',
        items: ['Vitest', 'Supertest', 'React Testing Library'],
    },
    {
        title: 'Tooling & deploy',
        items: ['Git', 'GitHub', 'Vite', 'Docker', 'Docker Compose', 'Axios', 'Figma', 'Claude Code', 'VS Code', 'Cursor', 'Photoshop', 'Microsoft Office', 'Vercel', 'CI/CD', 'AWS', 'Railway', 'Cloudflare'],
    },
    {
        title: 'How I work',
        asText: true,
        items: ['Component-driven architecture', 'Accessible responsive UI', 'Test-first development', 'Documented design decisions', 'Clear communication', 'Teamwork', 'Adaptability', 'Creative problem-solving', 'Time management'],
    },
]

export const projectList = {
    'FFXIV Radar': {
        desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
        tags: ['Vue.js', 'API', 'CSS Grid'],
        links: {
            live: 'https://ffxivradar.space/',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
        },
    }
}