"use client";
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value: 600 },
  { name: 'Feb', value: 800 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 300 },
  { name: 'May', value: 1000 },
  { name: 'Jun', value: 700 },
  { name: 'Jul', value: 900 },
  { name: 'Aug', value: 850 },
  { name: 'Sep', value: 650 },
  { name: 'Oct', value: 900 },
  { name: 'Nov', value: 950 },
  { name: 'Dec', value: 700 },
];

const CustomBarChart = () => {
  const [chartWidth, setChartWidth] = useState(600);
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      // On mobile, set the chart width to full screen width with 16px padding on both sides (32px total)
      if (window.innerWidth < 640) {
        setChartWidth(window.innerWidth); // Full width with padding
        setChartHeight(250);
      } else if (window.innerWidth < 768) {
        setChartWidth(500); // Tablet size
        setChartHeight(400);
    
      } else {
        setChartWidth(600); // Default for larger screens
        setChartHeight(350);
      }
    };

    // Add event listener for window resizing
    window.addEventListener('resize', handleResize);

    // Set initial size
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    
    <div className="w-full flex justify-center dark:border-none dark:bg-gray-800 border p-3 md:p-4 h-full rounded"> {/* Center the chart with padding */}

      <BarChart width={chartWidth} height={chartHeight} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
    </>
  );
};

export default CustomBarChart;
