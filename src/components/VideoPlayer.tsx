// VideoPlayer.tsx
import { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  /** Si es true, renderiza el <video> inline en lugar de botón/popup */
  inline?: boolean;
}

export function VideoPlayer({ videoUrl, inline = false }: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Modo embebido: sólo el video
  if (inline) {
    return (
      <video
        src={videoUrl}
        controls
        className="w-full rounded-lg shadow-md object-contain max-h-[60vh]"
      />
    );
  }

  // Modo popup (como lo tenías)
  return (
    <>
      <button
        className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
        onClick={() => setIsOpen(true)}
      >
        Ver Video
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-black rounded-lg overflow-hidden max-w-2xl w-full max-h-[80vh]">
            {/* Botón de cerrar */}
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
