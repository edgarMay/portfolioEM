import { jobs } from '../data/jobs';
import TimelineItem from './TimelineItem';

export default function Timeline() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <h2 className="text-center text-3xl font-extrabold mb-16 dark:text-white">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
      <span className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-indigo-300 z-0" />

        {/* Fecha inicial "Current" */}
        <span className="absolute left-1/2 -translate-x-1/2 -top-6 text-sm font-semibold text-gray-700 dark:text-gray-400 bg-white dark:bg-slate-900 px-2">
          Current
        </span>

        {jobs.map((job, i) => (
          <div key={job.company} className="relative">
            <TimelineItem job={job} idx={i} />

            {/* Insertar fecha al final del item si no es el último */}
            {i < jobs.length - 1 && (
              <span className={`
                absolute left-1/2 -translate-x-1/2 
                top-[calc(100%+0.5rem)] 
                text-sm font-semibold text-gray-700 dark:text-gray-400
                bg-white dark:bg-slate-900 px-2 rounded
              `}>
                {jobs[i + 1].roles[0].end}
              </span>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
