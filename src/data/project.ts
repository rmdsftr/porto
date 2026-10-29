import type { Project } from '../types/project'
import envirooMobilePreview from '../assets/bank-sampah/preview-mobile-app.webp'
import envirooWebPreview from '../assets/bank-sampah/preview-app-web.png'

export const projects: Project[] = [
  {
    slug: 'digital-waste-bank',
    title: 'Digital Waste Bank Information System',
    description:
      'Waste bank management system integrating deposits, sales, profit sharing, withdrawals, and waste savings monitoring into a traceable data flow, with automated calculations, QR-based transaction verification, concurrency-safe balance processing, and scheduling automation.',
    tags: [
      'Go (Gin)',
      'Flutter',
      'React (Vite)',
      'PostgreSQL',
      'Cloudflare R2',
      'FCM',
      'Docker',
      'VPS',
    ],
    detail: {
      appName: 'ENVIROO',
      overview:
        'A waste bank management system consisting of a Flutter mobile app, a React web application, and a Go backend, supporting two-tier (BSM–Customer) and three-tier (BSI–BSU–Customer) operational models. Piloted across 6 waste banks in Padang and funded by Andalas University.',
      repos: [
        {
          name: 'enviroo-backend',
          tech: ['Go (Gin)', 'PostgreSQL', 'Cloudflare R2', 'FCM', 'Docker'],
          architecture:
            'Layered architecture that separates HTTP handling, business logic, and data access (handler → service → repository), with an adapter layer that decouples external service integrations from the core domain.',
          url: 'https://github.com/rmdsftr/enviroo-be',
        },
        {
          name: 'enviroo-mobile',
          tech: ['Flutter', 'FCM'],
          architecture:
            'MVVM architecture (screen → provider → service), using Provider for reactive state management and a Firebase Cloud Messaging listener to receive real-time push notifications.',
          url: 'https://github.com/rmdsftr/enviroo-mobile-frontend',
        },
        {
          name: 'enviroo-web',
          tech: ['React', 'TypeScript', 'Vite', 'Docker'],
          architecture:
            'Clean architecture with business logic encapsulated in custom hooks, keeping UI components focused purely on presentation.',
          url: 'https://github.com/rmdsftr/enviroo-web-frontend',
        },
      ],
      features: [
        'Designed and implemented RESTful APIs in Go (Gin) backed by PostgreSQL, using Cloudflare R2 for file storage and Firebase Cloud Messaging for push notifications.',
        'Integrated core business processes (waste deposits, sales, profit-sharing, and withdrawals) into one consistent, traceable data flow.',
        'Implemented automated profit-sharing calculations, balance mutations, QR code–based transaction verification, scheduling management, and waste savings monitoring.',
        'Ensured balance consistency in profit-sharing and balance mutations using database transactions with row-level locking, preventing race conditions from concurrent requests.',
        'Delivered push notifications to many users concurrently with goroutines, running delivery outside the request path so API response times were unaffected.',
        'Built a background worker using goroutines and time.Ticker to automate scheduling management.',
        'Secured the API with rate limiting and single-session enforcement.',
        'Wrote unit tests with Testify for core business logic; containerized and deployed the backend and web application using Docker on a Linux VPS.',
      ],
      images: [envirooMobilePreview, envirooWebPreview],
    },
  },
  {
    slug: 'pc-registration-denso',
    title: 'PC Registration System at PT Denso Indonesia',
    description:
      "Developed an internal web and desktop application for corporate PC registration, automating hardware specification scanning and integrating digital registration forms with the company's internal database.",
    tags: ['Express.js', 'SQL Server', 'MySQL', 'Python'],
    detail: {
      overview:
        'An internal web and desktop application for automated corporate PC registration, developed during an internship at PT Denso Indonesia.',
      repos: [
        {
          name: 'Web Application',
          tech: ['Express.js', 'SQL Server', 'MySQL'],
          architecture:
            "MVC architecture built with Express.js and SQL Server, integrated with the company's existing MySQL database. Exposes a REST API that receives hardware specifications from the desktop scanner and fills in the registration form automatically.",
        },
        {
          name: 'Desktop Scanner',
          tech: ['Python'],
          architecture:
            'Standalone Python executable (.exe) that runs on the PC being registered, reads its hardware specifications, and sends them to the web application through the REST API.',
        },
      ],
      features: [
        'Built automated hardware specification scanning using Python, packaged as a standalone executable that runs directly on the PC being registered.',
        'Connected the scanner to the web application through a REST API, so scanned specifications are filled into the registration form automatically.',
        "Developed a digital registration form integrated with the company's internal database.",
        'Generated registration documents in PDF format.',
      ],
      sourceNote: 'Internal project at PT Denso Indonesia. The source code is not publicly available.',
    },
  },
  {
    slug: 'internship-attendance-bappeda',
    title: 'Internship Attendance System at BAPPEDA Sumatera Barat',
    description:
      'Developed a web-based attendance management system with real-time attendance recording through location-restricted QR code verification and streamlined attendance management for internship participants.',
    tags: ['Express.js', 'MySQL'],
    detail: {
      overview:
        'A web-based attendance management system for internship participants, developed during an internship at BAPPEDA Sumatera Barat.',
      repos: [
        {
          name: 'Web Application',
          tech: ['Express.js', 'MySQL', 'Handlebars (hbs)'],
          architecture:
            'MVC architecture built with Express.js and MySQL, using Handlebars (hbs) as the server-side view engine. Attendance check-ins are only accepted from devices connected to the office Wi-Fi network.',
        },
      ],
      features: [
        'Implemented real-time attendance recording with QR code verification restricted to the office Wi-Fi network, ensuring attendance can only be recorded on-site.',
        'Built attendance reporting with Excel export functionality.',
        'Simplified attendance management for internship participants.',
      ],
      sourceNote: 'Private repository at BAPPEDA Sumatera Barat. The source code is not publicly available.',
    },
  },
]
