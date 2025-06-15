import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

const categories = ['mobile', 'web', 'desktop'] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('mobile');
  const [openId, setOpenId]   = useState<string | null>(null);

  const filtered = projects.filter(p => p.category === filter);
  const selected  = projects.find(p => p.id === openId) ?? null;

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-900">
      <h2 className="text-center text-3xl font-extrabold mb-10 
               text-gray-900 dark:text-gray-100">Projects</h2>

      {/* Tabs Apple-style */}
      <div className="flex justify-center gap-6 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setOpenId(null); }}
            className={`text-sm font-medium pb-1 border-b-2 transition
              ${filter === cat
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Carrusel horizontal */}
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        navigation={false}
        pagination={{
          el: '.custom-bullets',
          clickable: true,
          bulletClass: 'w-3 h-3 bg-slate-500 rounded-full mx-1 opacity-50',
          bulletActiveClass: 'opacity-100 bg-indigo-500',
        }}
        scrollbar={{ draggable: true }}
        // ↓↓↓ breakpoints
        breakpoints={{
          0: {           // 0 – 639 px
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {         // ≥ 640 px
            slidesPerView: 'auto',
            spaceBetween: 24,
          },
        }}
        className="custom-bullets flex justify-center mt-4 pb-10"
      >

        {filtered.map(p => (
          <SwiperSlide key={p.id} className="!h-auto w-full md:!w-[300px] flex-none">
            <button
              onClick={() => setOpenId(p.id)}
              className="
                flex flex-col justify-between h-[460px] w-full
                rounded-2xl bg-white dark:bg-slate-800
                shadow-md hover:shadow-xl transition-all overflow-hidden
                border border-slate-200 dark:border-slate-700
              "
            >
              {/* Aquí nos aseguramos de que el h3 sea un block de ancho completo y tenga text-center */}
              <h3 className="w-full text-center text-base font-semibold mt-4
                            text-gray-800 dark:text-gray-100">
                {p.name}
              </h3>
              
              <div className="flex-1 px-4 py-4">
                {(() => {
                  const firstImage = p.media.find(m => m.type === 'image');
                  return firstImage ? (
                    <img
                      src={firstImage.src}
                      alt={p.name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-xl">
                      <span className="text-gray-500">No image</span>
                    </div>
                  );
                })()}

              </div>

              <span className="text-indigo-600 text-sm underline text-center mb-4 dark:text-gray-100">
                View
              </span>
            </button>
          </SwiperSlide>

        
        ))}
      </Swiper>

      {/* Popup */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setOpenId(null)} />
      )}
    </section>
  );
}
