import Image from "next/image";

import CustomBarChart from "./components/CustomBarChart";
import ImageCarousel from "./components/ImageCarousel";
import DataTable from "./components/DataTable";
import Head from 'next/head';
import StatisticsCard from "./components/StatisticsCard";

export default function Home() {

  return (
  <div>
    <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-4">Welcome! here your summary</h2>
    <StatisticsCard />
    <div className="my-8">

    <h2 className=" text-lg md:text-xl font-extrabold mb-2 md:mb-4">Event Registrations per month</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
  <div>
    
    <CustomBarChart />
  </div>
  <div>
    
    <ImageCarousel />
  </div>
</div>
</div>



        <DataTable />

  </div>
  );
}
