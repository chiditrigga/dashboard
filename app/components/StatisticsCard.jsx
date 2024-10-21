import { FaInfoCircle } from 'react-icons/fa';
import Up from '@/app/public/images/arrow-up.png'
import Down from '@/app/public/images/arrow-down.png'
import I from '@/app/public/images/i.png'
import Image from 'next/image';

const StatisticsCard = () => {
  const stats = [
    {
      title: 'Total Events',
      value: '100,000',
      change: '+5.0%',
      isPositive: true,
    },
    {
      title: 'Active Speakers',
      value: '25',
      change: '-5.0%',
      isPositive: false,
    },
    {
      title: 'Total Registrations',
      value: '300',
      change: '+5.0%',
      isPositive: true,
    },
    {
      title: 'Total Revenue',
      value: '$500,000',
      change: '+5.0%',
      isPositive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-4 bg-white dark:bg-gray-800  border dark:border-none rounded-lg"
        >
          <div className="flex items-center">
            <h3 className="text-gray-500 dark:text-gray-400 font-semibold pe-1">
              {stat.title}
            </h3>
       <Image src={I} />
          </div>
          <div style={{alignItems:'center'}} className="mt-2 text-2xl font-bold text-gray-900 dark:text-white flex">
            {stat.value}
         
      
            <span
              className={`ps-1 text-sm ${
                stat.isPositive
                  ? 'text-green-500 dark:text-green-400'
                  : 'text-red-500 dark:text-red-400'
              }`}
            >
              {stat.isPositive ?<div className='flex'><Image src={Up} />{stat.change}</div>  : <div className='flex'><Image src={Down} />{stat.change}</div>} 
            </span>
            </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCard;
