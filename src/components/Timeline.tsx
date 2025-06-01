import { jobs } from '../data/jobs';
import TimelineItem from './TimelineItem';

export default function Timeline() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <h2 className="text-center text-3xl font-extrabold mb-16 dark:text-white">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <span className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-indigo-300" />
        {jobs.map((job, i) => (
          <TimelineItem key={job.company} job={job} idx={i} />
        ))}
      </div>
    </section>
  );
}
