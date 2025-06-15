// src/components/ProjectModal.tsx
import Modal from 'react-modal';
import type { Project, MediaItem } from '../data/projects';
import { VideoPlayer } from './VideoPlayer';

Modal.setAppElement('#root');

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const highlights = project.highlights ?? [];
  const media = project.media ?? [];
  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start py-10 z-50"
      className="max-h-[90vh] w-full max-w-3xl overflow-y-auto
                 bg-white dark:bg-slate-900 rounded-lg shadow-lg outline-none relative"
    >
      {/* botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-3xl 
                  text-gray-500 dark:text-gray-300 
                  hover:text-gray-300 dark:hover:text-gray-500"
      >
        &times;
      </button>

      {/* cabecera */}
      <header className="px-10 pt-10 mb-9">  
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
          {project.category}
        </p>
        <h3 className="text-3xl font-extrabold mt-2 mb-4 text-gray-900 dark:text-gray-100">
          {project.name}
        </h3>
        {project.summary && (
          <div className="mt-2 mb-4 text-gray-700 dark:text-gray-300 text-base">
            <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
              📌 Project Summary
            </p>
            <p>{project.summary}</p>
          </div>
        )}
      </header>

      {/* bloques de contenido */}
      <div className="space-y-5 px-10 pb-10">
        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="px-10 -mt-8 pb-2">
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Highlights
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Media: imágenes y videos en un solo flujo */}
        {project.media.map((m: MediaItem, i: number) => (
          <div key={i} className="bg-gray-100 dark:bg-slate-800 rounded-2xl p-8">
            <div
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
            >
              {/* Texto (caption) */}
              {m.caption && (
                <div className="md:w-1/2 text-lg leading-relaxed">
                  <p className="whitespace-pre-line text-gray-800 dark:text-gray-200">
                    {m.caption}
                  </p>
                </div>
              )}

              {/* Renderiza la imagen o el video */}
              <div className="md:w-1/2">
                {m.type === 'image' ? (
                  <img
                    src={m.src}
                    alt={`${project.name} media ${i + 1}`}
                    className="w-full rounded-lg shadow-md object-contain"
                  />
                ) : (
                  <VideoPlayer videoUrl={m.src} />
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Enlace externo solo si no hay media */}
        {project.url && project.media.length === 0 && (
          <div className="px-10 pt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 
                         bg-indigo-600 text-white 
                         rounded hover:bg-indigo-700 transition"
            >
              Ver Video
            </a>
          </div>
        )}
      </div>
    </Modal>
  );
}
