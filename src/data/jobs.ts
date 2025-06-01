
export type Role = {
  title: string;
  start: string;
  end: string;
  description: string;
  stack?: string[]; // ← aquí agregas el array de tecnologías para mostrar logos
};
export type Job = {
  company: string;
  roles: Role[];
  highlight?: boolean; // o usa color?: string si prefieres más control
};

export const jobs: Job[] = [
  {
    company: 'Toyota Motor Manufacturing de Guanajuato',
    roles: [
      {
        title: 'Sr Software Engineer',
        start: '2024-04',
        end: 'Present',
        description: `
  • Team leader for software development and automation projects across 9 internal departments within PC&L.
  • Led the design and development of cross-platform solutions: mobile, desktop, and web.
  • Created custom software aligned with internal client needs, from requirements to deployment.
  • Developed REST APIs (ASP.NET Core) to enable real-time data communication between systems.
  • Automated executive-level reporting through Power BI and SQL Server integration.
  • Reduced SQL Server query times by 40% through schema optimization.
  `.trim(), 
  stack: ['SwiftUI', 'Python', 'ASP.NET Core', 'SQL Server', 'Power BI', 'Git']
      },
      {
        title: 'Fullstack Developer',
        start: '2018-07',
        end: '2024-03',
        description: `
  • Designed and delivered 10+ cross-platform tools (mobile and desktop) to support internal parts ordering and logistics operations.
  • Led the migration of legacy Excel-based processes to centralized SQL-driven applications.
  • Automated reporting workflows by replacing manual data exports with direct SQL queries, providing real-time, ready-to-use insights.
  • Reduced manual processing errors by 70% and significantly improved decision-making speed.
        `.trim(),
        stack: ['Swift', 'Python', 'React', 'SQL Server']
      },
    ]
  },
  {
    company: 'Stellantis',
    roles: [
      {
        title: 'Jr. Developer',
        start: '2017-04',
        end: '2018-06',
        description: `
        • Built iPad-based CMMS (Computerized Maintenance Management System).
        • Implemented offline sync logic for maintenance tasks.
        • Contributed to UX improvements that increased technician efficiency by 20%.
        • Built a web-based system using ASP.NET to log and classify PLC failure modes in real time.
        `.trim(),
        stack: ['Xcode', 'Python', 'ASP.NET Core', 'SQL Server','Firebase','Objective-C', 'SQLite']
      },
      {
        title: 'Database Engineer',
        start: '2015-01',
        end: '2017-03',
        description: `
        • Designed and maintained relational DBs (SQL Server) for plant-wide systems.
        • Created data pipelines and automated ETL processes using Python scripts.
        • Migrated legacy Excel-based data sources to SQL Server, improving data integrity and scalability.
        • Developed MS Access tools to automate manual workflows and reduce operator dependency.
        `.trim(),
        stack: ['SQL Server', 'Python', 'MS Access']
      }
    ]
  },
  {
    company: 'IBM Campus Tecnológico Guadalajara',
    roles: [
      {
        title: 'Jr. Software Developer',
        start: '2012-06',
        end: '2014-12',
        description: `
        • Contributed to the development of a web-based server configuration system for IBM hardware sales.
        • Used C# and XML to dynamically generate UI components and pricing logic.
        • Focused on frontend validation to guide users through complex server builds.
        • Collaborated with QA engineers and testers to align features with quality requirements and delivery timelines.
              `.trim(),
              stack: ['C#', 'ASP.NET Core', 'XML']
      }
    ]
  },
  {
    company: 'Certifications & Highlights',
    roles: [
      {
        title: 'Certifications',
        start: '',
        end: '',
        description: `
        • Microsoft Professional Certificate – Full-Stack Developer (in progress, Coursera)
        • IBM Professional Certificate – IT Scrum Master (in progress, Coursera)
        • Microsoft Professional Certificate – Python Development (Coursera)
        • Introduction to Scrum Master – SkillUp EdTech
        • REST APIs with .NET Core and C# – Udemy
        `.trim()
      },
      {
        title: 'Personal Highlights',
        start: '',
        end: '',
        description: `
        • Awarded "Lead of Leaders" at Stellantis for spearheading the CMMS iPad system.
        • Built a mix-Kanban monitoring system integrated with SKPI via SFTP for live data transmission.
        • Co-led the automation strategy across 9 departments, optimizing multiple cross-functional workflows.
        • Two internally developed apps (Tapping Tool and LOMS) have been adopted for regional deployment.
          `.trim()
      }
    ],
    highlight : true
  },
];
