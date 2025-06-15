// src/components/StoryOverlay.tsx
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import type { Project, MediaItem } from '../data/projects';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function StoryOverlay({ project, onClose }: Props) {
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={onClose}>
        {/* Fondo atenuado */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        {/* Panel central */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-6"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-6"
        >
          <div className="fixed inset-0 flex justify-center overflow-y-auto py-10">
            <Dialog.Panel className="relative bg-white dark:bg-slate-900 w-full max-w-3xl rounded-lg shadow-xl">
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-300"
              >
                &times;
              </button>

              {/* Cabecera */}
              <header className="px-10 pt-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                  {project.category}
                </p>
                <Dialog.Title className="text-3xl font-extrabold mt-2 mb-1 text-gray-900 dark:text-gray-100">
                  {project.name}
                </Dialog.Title>
              </header>

              {/* Contenido scrollable */}
              <div className="mt-6 space-y-20 px-10 pb-20">
                {project.media.map((m: MediaItem, i: number) => (
                  <div
                    key={i}
                    className={`grid gap-10 items-center ${
                      i % 2 === 0
                        ? 'md:grid-cols-2'
                        : 'md:grid-cols-2 md:flex-row-reverse'
                    }`}
                  >
                    {/* Texto */}
                    {m.caption && (
                      <div className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                        <p className="whitespace-pre-line">{m.caption}</p>
                      </div>
                    )}

                    {/* Imagen o Video */}
                    <div>
                      {m.type === 'image' ? (
                        <img
                          src={m.src}
                          alt={m.caption ?? `${project.name} media ${i + 1}`}
                          className="w-full rounded-lg shadow-md object-contain"
                        />
                      ) : (
                        <video
                          src={m.src}
                          controls
                          className="w-full rounded-lg shadow-md max-h-[60vh] object-contain"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
