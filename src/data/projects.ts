export type Slide = {
  img: string;
  caption: string;
};

export type Project = {
  id: string;
  name: string;
  category: 'mobile' | 'web' | 'desktop';
  slides: Slide[];
  tech?: string[];
  url?: string;
  summary?: string;
  highlights?: string[];
};

const tappSearch = '/projects/TAPP_search.png';
const tappPlanned = '/projects/MobileAppiOS.png';
const brt = '/projects/BRT.png';
const pcapp = '/projects/pcApp.png';
const lomsA = '/projects/LomsAudit.png';
const imsShop = '/projects/imsShop.png';
const trialBOS = '/projects/trialBOS.png';

export const projects: Project[] = [
  {
    id: 'TT',
    name: 'Tapping Tool NA',
    category: 'mobile',
    slides: [
      { img: tappSearch, caption: "Quick lookup of kanban materials across trailers or overflow zones, including real-time box availability." },
      { img: tappPlanned, caption: 'Weekly view of planned tappings with color-coded status: completed, pending, overdue, partial, or not found — helping identify pending actions at a glance.'},
    ],
    tech: ['SwiftUI', 'SQL Server', 'ASP .net'],
    url: 'https://play.google.com/…',
    summary: 'Mobile app to coordinate and track material advances (tappings) in real time between Internal Logistics and Parts Ordering',
    highlights: [
      'Reduced total tappings by 75% (from 1800 to ~400) through process automation',
    'Eliminated the second shift in Parts Ordering by centralizing communication via the app',
    'Replaced manual Excel instructions and email with QR-based real-time validation',
    'Improved traceability and fulfillment of planned deliveries using color-coded status indicators',
    'Integrated live trailer search and kanban tracking from multiple systems',
    'Currently under regional rollout with TMNA and TMMTX developers'
    ]
  },
  // …más proyectos…
  {
    id: 'BRT',
    name: 'Broadcast Reorder',
    category: 'mobile',
    slides: [
      {
        img: brt,
        caption: 'Part detail screen: image, description, current stock, and quantity input.'
      },
      {
        img: brt,
        caption: 'Main screen: searchable, filterable list of parts in real time.'
      },
      {
        img: brt,
        caption: 'Part View: menu activated, View with part selected.'
      },
    ],
    tech: ['SwiftUI', 'ASP .NET Core', 'SQL Server'],
    url: 'https://play.google.com/…',
    summary:
      'Mobile app that allows shop-floor personnel to quickly reschedule and request replacement parts from internal suppliers, preventing wrong-part errors and centralizing order management in a single system.',
    highlights: [
      'Reduced total part request time from 45 minutes to under 20 seconds.',
      'Eliminated wrong-part errors through VIN lookup and searchable part lists (0% error rate).',
      'Automatically records each order in the database (part number, quantity, requester, location, reason, and VIN).',
      'Generates and emails a ticket to all internal stakeholders and the supplier in one step.',
      'Provides a complete audit trail for purchasing and finance reconciliation: no more quantity discrepancies.',
      'Full adoption: 100% of the Welding team uses it daily, and the Assembly team is currently at 35% adoption.'
    ]
  },
  {
    id: 'PCApp',
    name: 'Production Control APP',
    category: 'mobile',
    slides: [
      {
        img: pcapp,
        caption: 'Hour-by-hour dashboard: real-time summary of production across three shops.',
      },
      {
        img: tappPlanned,
        caption: 'Shop detail view: see breakdown comments and drill down into specific events.',
      },
      {
        img: tappPlanned,
        caption: 'Major breakdown entry screen: log a production stoppage that automatically updates hour-by-hour totals.',
      },
      {
        img: tappPlanned,
        caption: 'Push notification alert: immediate real-time notification when a breakdown or production change occurs.',
      },
    ],
    tech: ['SwiftUI', 'ASP .NET Core', 'SQL Server', 'Firebase'],
    url: 'https://play.google.com/…',
    summary:
      'Real-time mobile application for supervisors to track production hour by hour, automatically log breakdowns, and send push notifications for any stoppages or production changes. All data is stored in SQL Server and accessed via a RESTful API.',
    highlights: [
      'Hour-by-hour data entry and reporting reduced from 5 hours/day (manual Excel) to 20 minutes/week.',
      'Breakdown logging time cut from ~10 minutes to ~2 minutes on average, with automatic aggregation.',
      'Real-time production data across three shops available instantly instead of having to wait for hourly emails.',
      'Push notifications for line stoppages and production changes ensure supervisors can react immediately.',
      'Eliminated reliance on multiple Excel files—now all reports are secure in SQL Server and visualized via Power BI.',
      'Zero manual reconciliation at month-end: accurate, auditable production records stored centrally.'
    ]
  },
  {
    id: 'TP',
    name: 'Trial Parts',
    category: 'mobile',
    slides: [
      {
        img: trialBOS,
        caption: 'Box scanning screen: scan a box and enter the number of parts received in the pop-up.'
      },
      {
        img: tappPlanned,
        caption: 'Discrepancy report: scan the box to populate main fields and attach up to four photos of any discrepancy.'
      },
    ],
    tech: ['SwiftUI', 'ASP .NET', 'SQL Server'],
    url: 'https://play.google.com/…',
    summary:
      'Mobile app to track trial parts across departments—scan each box, confirm received quantities, and upload photos of discrepancies in real time.',
    highlights: [
      'Reduced report generation time from 3 hours to just 10 minutes.',
      'Eliminated material losses in the flow—now zero lost parts.',
      'Saved $20,000 annually by discontinuing the rented system and $6,500 on scanner hardware.',
      'Stores discrepancy photos directly in the database, simplifying supplier issue submissions.',
      'Built-in login system captures department information and automatically logs material location.'
    ]
  },
  {
    id: 'IMS',
    name: 'Inventory Management Systems (Rack control)',
    category: 'mobile',
    slides: [
      {
        img: imsShop,
        caption: 'Rack detail view: scan a rack to update its fill level and location instantly.'
      },
      {
        img: tappPlanned,
        caption: 'Menu of location scan',
      },
    ],
    tech: ['SwiftUI', 'SQL Server', 'ASP. NET'],
    url: 'https://play.google.com/…',
    summary:
      'Mobile app for real-time tracking of material racks—scan each rack to update whether it’s empty or full, enabling instant inventory across all areas.',
    highlights: [
      'Reduced manual rack counts from 6 hours/day to 30 minutes/week via barcode scanning and real-time updates.',
      'Eliminated counting errors by instantly updating rack status in SQL Server.',
      'Real-time visual dashboard helps supervisors make faster, data-driven decisions on material movements.',
      'Consolidates inventory data from multiple areas into one unified view, removing reliance on disparate spreadsheets.',
      'Provides alerts when rack status changes, ensuring material availability is always up to date.'
    ]
  },
  {
    id: 'LOMS',
    name: 'Local Overflow Managemnt System',
    category: 'mobile',
    slides: [
      {
        img: lomsA,
        caption: 'Real-time inventory list: scan list items .'
      },
      {
        img: tappPlanned,
        caption: 'Audit mode: scan to update stock, with poka-yokes to prevent duplicate entries.'
      },
    ],
    tech: ['iOS', 'SQL Server', 'ASP. NET'],
    url: 'https://play.google.com/…',
    summary:
      'Mobile app for real-time tracking and management of material boxes in overflow and expansion areas—scan items to update inventory, search by zone, and run audits with built-in poka-yokes.',
    highlights: [
      'Reduced manual zone searches from 15 minutes down to 1 minute via filtered zone lookup.',
      'Cut daily audit time from 4 hours to just 30 minutes per week using QR/barcode scanning.',
      'Built-in poka-yokes prevent duplicate entries during audit mode, ensuring data integrity.',
      'Automatically synchronizes inventory in SQL Server—inputs and outputs update in real time.',
      'Saved $15,000 annually by eliminating paper-based counts and ad-hoc spreadsheets.',
      'Triggers email notifications when discrepancies are found during audits, then auto-cleans inventory records.'
    ]
  },
  {
    id: 'ECIM',
    name: 'ECI Management',
    category: 'web',
    slides: [
      {
        img: lomsA,
        caption: 'Main dashboard: list of pending ECIs with status for each department.'
      },
      {
        img: tappPlanned,
        caption: 'Upload screen: departments submit evidence files and update change status.'
      }
    ],
    tech: ['React (VS Code)', 'ASP .NET Core Web API (Visual Studio)', 'SQL Server'],
    url: 'https://play.google.com/…',
    summary:
      'Web application that publishes engineering changes and involves all participating departments (Quality, Assembly, Parts Ordering, Conveyance, Logistics, Packaging). It centralizes communication, displays change status, specifies departmental leads, and validates uploaded evidence.',
    highlights: [
      'Zero errors in the first 3 months of use—no department missed a step because all change data is on the web portal.',
      'Reduced monthly process time from 20 hours to just 4 hours.',
      'Provides a single view for all departments to track pending ECIs and their requirements.',
      'Enforces evidence uploads per department, ensuring each team validates and documents their part of the change.'
    ]
  },
  {
    id: 'EAMMPF',
    name: 'Portfolio',
    category: 'web',
    slides: [
      {
        img: lomsA,
        caption: 'Home screen: responsive hero section with animations and dark mode support.'
    },
      {
        img: tappPlanned,
        caption: 'Projects carousel: showcases all project cards filterable by category.'
    },
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Netlify', 'Cloudflare DNS', 'EmailJS'],
    url: 'https://play.google.com/…',
    summary:
      'Personal portfolio website built with React, Vite, and Tailwind CSS, deployed on Netlify with a custom Cloudflare DNS, environment variables managed via Netlify, and contact form emails sent through EmailJS.',
    highlights: [
      'Automatic deployments: pushes to GitHub trigger `npm run build` and redeploy on Netlify in seconds.',
      'Custom domain on Cloudflare: effortless DNS management and SSL provisioning.',
      'Responsive design with dark mode: adjusts seamlessly across mobile, tablet, and desktop.',
      'Dynamic project filtering using Swiper.js and Tailwind classes, organized by category.',
      'Secure environment variables managed via Netlify dashboard for API keys and config.',
      'Optimized build performance with Vite: near-instant reloads and minimal bundle size.',
      'Contact form powered by EmailJS: sends user messages directly to my inbox without a custom backend.'
    ]
  },
  {
    id: 'LOMSD',
    name: 'LOMS Desktop',
    category: 'desktop',
    slides: [
      {
        img: lomsA,
        caption: 'Pantalla de listas con drag-and-drop.',
      },
      {
        img: tappPlanned,
        caption: 'Editor de tareas con voz y etiquetas.',
      },
    ],
    tech: ['Python', 'SQL Server'],
    url: 'https://play.google.com/…',
    summary:
    'Desktop application for real-time tracking and management of material boxes in overflow and expansion areas—syncs with the mobile app so you can scan inventory on the go and visualize every location’s box counts in a friendly GUI.',
    highlights: [
      'Reduced manual zone searches from 15 minutes down to 1 minute via filtered zone/kanban lookup in the main screen.',
      'Connected to the mobile app: each scan updates the desktop’s graphical view of all locations and box levels in real time.',
      'Design and print QR codes for locations to streamline scanning and tracking.',
      'Generate summary or detailed reports with one click and export them to Excel.',
    ]
  },
  {
    id: 'IMSD',
    name: 'IMS Desktop',
    category: 'desktop',
    slides: [
      {
        img: lomsA,
        caption: 'Graficas de inventario en tiempo real.',
      },
      {
        img: tappPlanned,
        caption: 'Administracion de numeros de parte de los racks',
      },
    ],
    tech: ['Python', 'SQL Server'],
    url: 'https://play.google.com/…',
    summary:
    'Desktop application for real-time tracking and management of material racks in Press shop and expansion areas—syncs with the mobile app so you can scan inventory on the go and visualize total material in a friendly Chart.',
    highlights: [
      'Reduced manual zone searches from 15 minutes down to 1 minute via filtered zone/kanban lookup in the main screen.',
      'Connected to the mobile app: each scan updates the desktop’s graph view of all locations and racks in real time.',
      'Design and print QR codes for new parts numbers.',
      'Admin module to add new parts, configure colors, new users, new locations',
    ]
  },
  {
    id: 'TPD',
    name: 'Trial Parts Desktop',
    category: 'desktop',
    slides: [
      {
        img: lomsA,
        caption: 'Pantalla de listas con drag-and-drop.',
      },
      {
        img: tappPlanned,
        caption: 'Editor de tareas con voz y etiquetas.',
      },
    ],
    tech: ['React Native', 'Expo'],
    url: 'https://play.google.com/…',
  },
  {
    id: 'TTD',
    name: 'Taping Tool Desktop',
    category: 'desktop',
    slides: [
      {
        img: lomsA,
        caption: 'Pantalla de listas con drag-and-drop.',
      },
      {
        img: tappPlanned,
        caption: 'Editor de tareas con voz y etiquetas.',
      },
    ],
    tech: ['React Native', 'Expo'],
    url: 'https://play.google.com/…',
  },
  {
    id: 'PCD',
    name: 'PC APP Desktop',
    category: 'desktop',
    slides: [
      {
        img: lomsA,
        caption: 'Pantalla de listas con drag-and-drop.',
      },
      {
        img: tappPlanned,
        caption: 'Editor de tareas con voz y etiquetas.',
      },
    ],
    tech: ['React Native', 'Expo'],
    url: 'https://play.google.com/…',
  },
  {
    id: 'BRTD',
    name: 'Broadcast Tool Desktop',
    category: 'desktop',
    slides: [
      {
        img: lomsA,
        caption: 'Pantalla de listas con drag-and-drop.',
      },
      {
        img: tappPlanned,
        caption: 'Editor de tareas con voz y etiquetas.',
      },
    ],
    tech: ['React Native', 'Expo'],
    url: 'https://play.google.com/…',
  },
];

