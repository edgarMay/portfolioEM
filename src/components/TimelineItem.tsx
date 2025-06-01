import { motion, AnimatePresence } from 'framer-motion';
import type { Job } from '../data/jobs';
import { useState } from 'react'; 
import { iconMap } from '../data/iconMap.ts'; // ajusta la ruta según tu estructura


type Props = { job: Job; idx: number };

export default function TimelineItem({ job, idx }: Props) {
  const [open, setOpen] = useState(false);
  const isLeft = idx % 2 === 0;
  const isHighlight = job.highlight;


  const stack = [
    { name: 'SwiftUI', logo: '/logos/swiftui_org.png' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'ASP.NET Core', logo: '/logos/dotnet.png' },
    { name: 'SQL Server', logo: '/logos/sql-server_logo.jpg.webp' },
    { name: 'Power BI', logo: '/logos/powerbi.png' },
    { name: 'React', logo: '/logos/React.png' },
    { name: 'Node', logo: '/logos/nodejs.png' },
    { name: 'Java Spring', logo: '/logos/spring.png' },
    { name: 'Objective-C', logo: '/logos/objectiveC.png' },
    { name: 'SQLite', logo: '/logos/sqlite.jpg' },
    { name: 'Xcode', logo: '/logos/xcode.png' },
    { name: 'C#', logo: '/logos/csharp.png' },
    { name: 'HTML', logo: '/logos/html5.png' },
    { name: 'CSS', logo: '/logos/css.png' },
    { name: 'JS', logo: '/logos/js.png' },
    { name: 'MongoDB', logo: '/logos/mongodb.png' },
    { name: 'Firebase', logo: '/logos/firebase.png' },
    { name: 'Power App', logo: '/logos/powerapps.png' },
    { name: 'MS Access', logo: '/logos/msAccess.png' },
    { name: 'Swift', logo: '/logos/swift.png' },
    { name: 'XML', logo: null },
    { name: 'Automation', logo: null }
  ];
  

  return (
    <motion.div
      initial={{ opacity: 0, y: isHighlight ? 100 : 40, scale: isHighlight ? 0.95 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`relative mb-16 flex flex-col ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
    >
      {/* Punto */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
      >
        <span className="absolute inline-flex h-5 w-5 rounded-full bg-indigo-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-5 w-5 rounded-full bg-indigo-600" />
      </motion.span>

      {/* Tarjeta */}
      <div
        className={`
          mt-8 lg:mt-0 lg:w-1/2 px-6 py-8 rounded-2xl shadow-lg border transition-all duration-500
          ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}
          ${isHighlight
            ? 'bg-indigo-100 dark:bg-indigo-800 border-indigo-200 dark:border-indigo-600'
            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}
          min-w-[440px]
        `}
      >


        {/* Botón encabezado */}
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full text-left flex justify-between items-center"
        >
          <span className="text-xl font-semibold dark:text-white">{job.company}</span>
          <svg
            className={`w-5 h-5 text-indigo-500 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Contenido */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden mt-6 space-y-12"
            >
              {isHighlight ? (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1">🎖️ Certifications</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-left">
                      <li>Microsoft Professional Certificate – Full-Stack Developer (in progress, Coursera)</li>
                      <li>IBM Professional Certificate – IT Scrum Master (in progress, Coursera)</li>
                      <li>Microsoft Professional Certificate – Python Development (Coursera)</li>
                      <li>Introduction to Scrum Master – SkillUp EdTech</li>
                      <li>REST APIs with .NET Core and C# – Udemy</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1">🏆 Personal Highlights</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-left">
                      <li>Awarded "Lead of Leaders" at Stellantis for spearheading the CMMS iPad system.</li>
                      <li>Built a mix-Kanban monitoring system integrated with SKPI via SFTP for live data transmission.</li>
                      <li>Co-led the automation strategy across 9 departments, optimizing multiple cross-functional workflows.</li>
                      <li>Two internally developed apps (Tapping Tool and LOMS) have been adopted for regional deployment.</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    {stack.map((tech) =>
                      tech.logo ? (
                        <img
                          key={tech.name}
                          src={tech.logo}
                          alt={tech.name}
                          className="w-10 h-10 object-contain"
                          title={tech.name}
                        />
                      ) : (
                        <span
                          key={tech.name}
                          className="bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white text-sm px-3 py-1 rounded-full font-medium shadow-sm border border-indigo-300 dark:border-indigo-500"
                        >
                          {tech.name}
                        </span>
                      )
                    )}
                  </div>


                </div>
              ) : (
                job.roles.map((r, i) => (
                  <li key={i}>
                    <p className="font-medium text-indigo-600 dark:text-indigo-400">{r.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {r.start} – {r.end}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-left">
                      {r.description}
                      {r.stack && (
                      <div className="mt-4">
                        <div className="flex justify-center flex-wrap gap-3 pb-4">
                          {r.stack.map((tech) =>
                            iconMap[tech] ? (
                              <img
                                key={tech}
                                src={iconMap[tech]!}
                                alt={tech}
                                title={tech}
                                className="w-10 h-10 object-contain hover:scale-150 transition-transform duration-200"
                              />
                            ) : (
                              <span
                                key={tech}
                                className="bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white text-sm px-3 py-1 rounded-full font-medium shadow-sm border border-indigo-300 dark:border-indigo-500"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    </p>
                  </li>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
