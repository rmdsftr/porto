import type { Profile } from '../types/profile'
import foto from '../assets/gweh ni.jpeg'
import cv from '../assets/file/CV - Ramadhani Safitri.pdf'

const email = 'ramadhanisgy@gmail.com'

export const profile: Profile = {
  name: 'Ramadhani Safitri',
  nickname: 'Rani',
  role: 'Software Engineer',
  tagline:
    'I build reliable and maintainable applications with multi-tier and layered architectures, MVC, and MVVM. I work across backend, mobile, and web development using Go, Node.js, Flutter, and React',
  location: 'Pekanbaru, Riau, Indonesia (open to relocation)',
  photo: foto,
  cvUrl: cv,
  email,

  status: { label: 'Open to Work & Freelance' },

  socials: [
    { label: 'GitHub', url: 'https://github.com/rmdsftr', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rmdsftr', icon: 'linkedin' },
    { label: 'Instagram', url: 'https://www.instagram.com/nyainim', icon: 'instagram' },
    { label: 'Email', url: `mailto:${email}`, icon: 'mail' },
  ],

  skills: [
    { category: 'Languages', items: ['Go', 'TypeScript', 'Dart', 'SQL', 'JavaScript', 'Python'] },
    {
      category: 'Backend',
      items: ['Go (Gin)', 'Node.js (NestJS, Express.js)', 'REST API Development'],
    },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server'] },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'VPS (Linux)', 'Postman', 'Cloudflare', 'Figma'],
    },
    { category: 'Frontend & Mobile', items: ['Flutter', 'React (Vite)'] },
  ],

  exploring: ['Microservices', 'NoSQL', 'Cybersecurity'],

  experiences: [
    {
      title: 'IT Intern',
      place: 'BAPPEDA Sumatera Barat',
      period: 'Jan 2025 — Feb 2025',
      description: 'Built a web-based internship attendance system with location-restricted QR verification.',
    },
    {
      title: 'Information Systems Intern',
      place: 'PT Denso Indonesia',
      period: 'Jul 2024 — Aug 2024',
      description: 'Built an internal PC registration system with automated hardware specification scanning.',
    },
  ],

  education: [
    {
      title: "Bachelor of Information Systems",
      place: 'Andalas University',
      period: '2022 — 2026',
      description:
        'GPA 3.78/4.00. Thesis: Development of a Mobile and Web-Based Waste Bank Information System Using a Two-Level Hierarchical Model at the Integrated Waste Processing Center of Universitas Andalas.',
    },
  ],

  contactText:
    "Have a project, a job opportunity, or just want to say hi? Send me a message and I'll get back to you as soon as I can.",
}
