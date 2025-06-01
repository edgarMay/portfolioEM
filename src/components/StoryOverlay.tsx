import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';   // pequeño modal accesible
import type { Project } from '../data/projects.js';

type Props = { project: Project; onClose: () => void };

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
                <Dialog.Title className="text-3xl font-extrabold mt-2 mb-1">
                  {project.name}
                </Dialog.Title>
              </header>

              {/* Contenido scrollable */}
              <div className="mt-6 space-y-20 px-10 pb-20">
                {project.slides.map((s, i) => (
                  <div
                    key={i}
                    className={`grid gap-10 items-center ${
                      i % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 md:flex-row-reverse'
                    }`}
                  >
                    {/* Texto */}
                    <div className="text-lg leading-relaxed">
                      <p className="whitespace-pre-line">{s.caption}</p>
                    </div>

                    {/* Imagen */}
                    <div>
                      <img
                        src={s.img}
                        alt={`${project.name} screenshot ${i + 1}`}
                        className="w-full rounded-lg shadow-md object-contain"
                      />
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
