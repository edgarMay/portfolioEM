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

import tappSearch from '../assets/projects/TAPP_search.png';
import tappPlanned from '../assets/projects/MobileAppiOS.png';
import brt from '../assets/projects/BRT.png';
import pcapp from '../assets/projects/pcApp.png';
import lomsA from '../assets/projects/LomsAudit.png';
import imsShop from '../assets/projects/imsShop.png';
import trialBOS from '../assets/projects/trialBOS.png';

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
        caption: 'Pantalla de listas con drag-and-drop.',
      },
      {
        img: brt,
        caption: 'Editor de tareas con voz y etiquetas.',
      },
    ],
    tech: ['React Native', 'Expo'],
    url: 'https://play.google.com/…',
  },
  {
    id: 'PCApp',
    name: 'Tapping Tool OS',
    category: 'mobile',
    slides: [
      {
        img: pcapp,
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
    id: 'TP',
    name: 'Trial Parts',
    category: 'mobile',
    slides: [
      {
        img: trialBOS,
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
    id: 'IMS',
    name: 'IMS',
    category: 'mobile',
    slides: [
      {
        img: imsShop,
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
    id: 'LOMS',
    name: 'LOMS',
    category: 'mobile',
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

