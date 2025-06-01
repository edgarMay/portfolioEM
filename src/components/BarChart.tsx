// BarChart.tsx
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

type BarChartProps = {
  data: { label: string; value: number }[];
};

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <Parallax key={index} translateY={[30, -30]}>
          <div className="bg-blue-500 h-6 rounded-md" style={{ width: `${item.value}%` }} />
          <span className="text-sm">{item.label}</span>
        </Parallax>
      ))}
    </div>
  );
};

export default BarChart;
