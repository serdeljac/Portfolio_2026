export type SkillGroup = {
    title: string;
    // Rendered as chips, or as a single line of text when `asText` is true.
    items: string[];
    asText?: boolean;
}

// Highlighted with the accent outline ("Core stack — what I use daily").
export const coreSkills = ['Vue 3', 'TypeScript', 'SASS'];

export const skillGroups: SkillGroup[] = [
    {
        title: 'Frontend',
        items: ['Vue 3', 'TypeScript', 'SASS', 'JavaScript', 'HTML5', 'CSS3', 'React', 'Redux', 'Next.js', 'Leaflet'],
    },
    {
        title: 'Backend & data',
        items: ['Node.js', 'MySQL', 'WordPress', 'Stripe', 'PayPal', 'Mailchimp'],
    },
    {
        title: 'Tooling & deploy',
        items: ['Git', 'GitHub', 'Vite', 'Vitest', 'Axios', 'Claude Code', 'VS Code', 'Cursor', 'Photoshop', 'Vercel', 'AWS', 'Railway', 'Cloudflare'],
    },
    {
        title: 'How I work',
        asText: true,
        items: ['Component-driven architecture', 'Responsive UI', 'Automated testing', 'Clear communication', 'Teamwork', 'Adaptability', 'Creative problem-solving', 'Time management'],
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