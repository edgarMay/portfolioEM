'use client';

import { useMemo, useState } from 'react';
import { Wordcloud } from '@visx/wordcloud';
import { scaleLog } from 'd3-scale';
import  useIsMobile from '../hook/useIsMobile.ts';


type WordInfo = { text: string; value: number };

const words: WordInfo[] = [
  { text: 'JavaScript', value: 60 },
  { text: 'React', value:80 },
  { text: 'Node', value: 90 },
  { text: 'SwiftUI', value: 90 },
  { text: 'TypeScript', value: 75 },
  { text: 'Spring', value: 90 },
  { text: 'SQL Server', value: 75 },
  { text: 'Figma', value: 50 },
  { text: 'Python', value: 75 },
  { text: 'C#', value: 50 },
  { text: 'ASP .Net', value: 75 },
  { text: 'HTML', value: 130 },
  { text: 'Firebase', value: 70 },
  { text: 'MongoDB', value: 85 },
  { text: 'CSS', value: 65 },
];

export default function WordCloud() {
  const [active, setActive] = useState<WordInfo | null>(null);
  const isMobile = useIsMobile();               // ← detecta <768 px

  const fontScale = useMemo(() => {
    const min = Math.min(...words.map(w => w.value));
    const max = Math.max(...words.map(w => w.value));
    // Rango más pequeño en mobile
    const range = isMobile ? [8, 40] : [12, 70];
    return scaleLog().domain([min, max]).range(range);
  }, [isMobile]);

  return (
    <svg width="100%" height="100%" className="cursor-pointer">
      <Wordcloud
        words={words}
        fontSize={(d: WordInfo) => fontScale(d.value)}
        padding={3}
        rotate={() => ~~(Math.random() * 2) * 90}
        spiral="archimedean"
        width={800}
        height={400}
        random={() => Math.random()}
      >
        {cloudWords =>
          cloudWords.map((w, i) => (
            <text
              key={i}
              textAnchor="middle"
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily="Arial"
              fill={active?.text === w.text ? '#000' : '#fff'}
              onClick={() =>
                setActive(active?.text === w.text ? null : words.find(ww => ww.text === w.text) || null)
              }
            >
              {w.text}
            </text>
          ))
        }
      </Wordcloud>
    </svg>
  );
}
