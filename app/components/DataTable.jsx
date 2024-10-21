"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Download from "@/app/public/images/download.png";

// Sample events data with unique IDs
const eventsData = [
  {
    id: 1,
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    id: 2,
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    id: 3,
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    id: 4,
    name: "Sustainable Tech Conference",
    date: "2025-02-01",
    speaker: "Dr. Alan Turing",
    status: "Completed",
  },
  {
    id: 5,
    name: "Innovative Marketing Strategies",
    date: "2025-02-15",
    speaker: "Ms. Mary Johnson",
    status: "In Progress",
  },
  {
    id: 6,
    name: "Data Science for Business Leaders",
    date: "2025-03-05",
    speaker: "Dr. Robert Brown",
    status: "Completed",
  },
  {
    id: 7,
    name: "Artificial Intelligence in Education",
    date: "2025-03-20",
    speaker: "Dr. Alice Cooper",
    status: "In Progress",
  },
  {
    id: 8,
    name: "Digital Transformation Forum",
    date: "2025-04-12",
    speaker: "Mr. Kevin O'Leary",
    status: "Completed",
  },
  {
    id: 9,
    name: "The Future of Renewable Energy",
    date: "2025-04-25",
    speaker: "Dr. Michelle Green",
    status: "In Progress",
  },
  {
    id: 10,
    name: "Innovations in Robotics",
    date: "2025-05-10",
    speaker: "Mr. Charles Babbage",
    status: "Completed",
  },
  {
    id: 11,
    name: "Navigating the Metaverse",
    date: "2025-05-22",
    speaker: "Ms. Clara Johnson",
    status: "In Progress",
  },
  {
    id: 12,
    name: "Data Privacy and Ethics",
    date: "2025-06-01",
    speaker: "Dr. Fiona Stewart",
    status: "Completed",
  },
  {
    id: 13,
    name: "Augmented Reality Applications",
    date: "2025-06-15",
    speaker: "Mr. Sam Lee",
    status: "In Progress",
  },
  {
    id: 14,
    name: "Future Trends in AI",
    date: "2025-07-02",
    speaker: "Dr. Laura Knight",
    status: "Completed",
  },
  {
    id: 15,
    name: "Cybersecurity Best Practices",
    date: "2025-07-20",
    speaker: "Ms. Emily White",
    status: "In Progress",
  },
  {
    id: 16,
    name: "The Next Big Thing in Tech",
    date: "2025-08-15",
    speaker: "Mr. Henry Ford",
    status: "Completed",
  },
  {
    id: 17,
    name: "Exploring Quantum Computing",
    date: "2025-09-05",
    speaker: "Dr. Niels Bohr",
    status: "In Progress",
  },
  {
    id: 18,
    name: "AI in Financial Services",
    date: "2025-09-20",
    speaker: "Ms. Alice Monroe",
    status: "Completed",
  },
  {
    id: 19,
    name: "The Future of Cloud Computing",
    date: "2025-10-10",
    speaker: "Dr. Philip Johnson",
    status: "In Progress",
  },
  {
    id: 20,
    name: "Blockchain Innovations",
    date: "2025-10-22",
    speaker: "Mr. Alan Shepard",
    status: "Completed",
  },
  {
    id: 21,
    name: "Cybersecurity in 2025",
    date: "2025-11-05",
    speaker: "Ms. Clara Kent",
    status: "In Progress",
  },
  {
    id: 22,
    name: "AI for Healthcare",
    date: "2025-11-25",
    speaker: "Dr. Emily Wright",
    status: "Completed",
  },
  {
    id: 23,
    name: "Smart Cities of the Future",
    date: "2025-12-02",
    speaker: "Mr. Henry Powell",
    status: "In Progress",
  },
  {
    id: 24,
    name: "Next-Gen Cybersecurity",
    date: "2025-12-18",
    speaker: "Ms. Laura Cooper",
    status: "Completed",
  },
  {
    id: 25,
    name: "Blockchain in Business",
    date: "2026-01-10",
    speaker: "Dr. Rachel Miles",
    status: "In Progress",
  }
];




export default function DataTable() {
  const [selectedEvent, setSelectedEvent] = useState(null);
 const [sortByName, setSortByName] = useState("A-Z");
 const [data, setData] = useState(eventsData); // Main data
 const [sortOrder, setSortOrder] = useState("asc"); // For sorting names
 const [currentPage, setCurrentPage] = useState(1); // Pagination control
 const [rowsPerPage, setRowsPerPage] = useState(10); // Number of rows per page
 const [searchQuery, setSearchQuery] = useState(""); // Search term
 const [filterStatus, setFilterStatus] = useState("All"); // Filter for event status
 const [sortDateOrder, setSortDateOrder] = useState("Newest"); // Sorting by date
 const [accordionOpen, setAccordionOpen] = useState(null); // Accordion state
 const indexOfLastRow = currentPage * rowsPerPage;
 const indexOfFirstRow = indexOfLastRow - rowsPerPage;


  const handleDelete = (eventId) => {
    setData(data.filter((event) => event.id !== eventId));
    setSelectedEvent(null); // Close modal after delete
  };

  const handleMarkAsCompleted = (eventId) => {
    setData(
      data.map((event) =>
        event.id === eventId ? { ...event, status: "Completed" } : event
      )
    );
    setSelectedEvent(null); // Close modal after marking as completed
  };





  // Helper function to filter and sort data
  const filteredAndSortedData = () => {
    let filteredData = data;

    // Search by event name
    if (searchQuery) {
      filteredData = filteredData.filter((event) =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus !== "All") {
      filteredData = filteredData.filter((event) => event.status === filterStatus);
    }

    // Sort by date
    filteredData = filteredData.sort((a, b) => {
      if (sortDateOrder === "Newest") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

     // Sort by name (A-Z or Z-A)
  if (sortByName === "A-Z") {
    filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortByName === "Z-A") {
    filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name));
  }

    return filteredData;
  };




 
  

  // Change accordion open state
  const toggleAccordion = (id) => {
    setAccordionOpen(accordionOpen === id ? null : id);
  };

  const totalPages = Math.ceil(filteredAndSortedData().length / rowsPerPage);
    // Generate an array of page numbers
    const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

    const currentRows = filteredAndSortedData().slice(indexOfFirstRow, indexOfLastRow);
  return (
    <div className="container mx-auto  py-8">
    {/* Toolbar */}
<div style={{alignItems: 'center'}} className="mb-4 flex flex-col md:flex-row md:gap-x-2 gap-y-4">
  {/* Search Input */}
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search events"
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white mb-2 md:mb-0"
  />
 {/* Sort by Date */}
 <select
    value={sortDateOrder}
    onChange={(e) => setSortDateOrder(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
    
  >
    <option disabled value='Newest'>Date</option>
    <option value="Newest">Newest</option>
    <option value="Oldest">Oldest</option>
  </select>
  {/* Filter Dropdown */}
  <select
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white mb-2 md:mb-0"
  >
     <option disabled value="All">status</option>
    <option value="All">All</option>
    <option value="Completed">Completed</option>
    <option value="In Progress">In Progress</option>
  </select>

{/* Sort by Name */}
<select
  value={sortByName}
  onChange={(e) => setSortByName(e.target.value)}
  className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white mb-2 md:mb-0"
>
  <option disabled value="">Name</option> {/* Empty value for placeholder */}
  <option value="A-Z">A-Z</option>
  <option value="Z-A">Z-A</option>
</select>




 
<div 
  style={{
    display: 'flex', 
    alignItems: 'center', 
    
  }} 
  className="h-full font-semibold w-full"
>
  Displaying {eventsData.length} results
</div>

 <div className=" flex  justify-end w-full">
   
  

  
   
   <div className="flex gap-x-2">
   <div style={{display:'flex',alignItems:'center'}} className="h-full font-normal">
  Sort

   </div>
   <select
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 h-full dark:text-white mb-2 md:mb-0"
  >
     <option disabled value="All">Most Recent</option>
    <option value="All">All</option>
    <option value="Completed">Recent</option>
    <option value="In Progress">Older</option>
  </select>
 <button className="border rounded-sm p-1">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     className="h-6 w-6"
     fill="none"
     viewBox="0 0 24 24"
     stroke="currentColor"
     strokeWidth={1}
   >
     <circle cx={12} cy={12} r={2} />
     <circle cx={12} cy={19} r={2} />
     <circle cx={12} cy={6} r={2} />
   </svg>
 </button>
 <button 
  className="flex items-center py-2 px-4 border rounded-md dark:bg-gray-800 dark:text-white font-semibold"
>
  {/* Export Logo */}
  <Image 
    src={Download} 
    alt="Export Logo" 
    width={20} 
    height={20} 
    className="mr-2"
  />
  <span className="whitespace-nowrap pe-4">Export</span>
</button>

   </div>

 </div>
</div>



      {/* Table - Display on larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-[#F1F5F9] dark:bg-[#484554] text-black dark:text-white">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3">Event Name</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Speaker</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((event, index) => (
              <tr
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer ${
                  index % 2 === 0
                    ? "dark:bg-gray-800 bg-white"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                <td className="px-6 py-4">{event.name}</td>
                <td className="px-6 py-4">{event.date}</td>
                <td className="px-6 py-4">{event.speaker}</td>
                <td className="px-6 py-4">
                <span
  className={`px-3 py-1 rounded-full flex justify-center max-w-full ${
    event.status === "Completed"
      ? "bg-[#D1FAE5] text-[#10B981] dark:text-[#059669] dark:border-2 dark:border-[#059669] dark:bg-transparent"
      : "bg-[#DBEAFE] text-[#3B82F6] dark:text-[#77B1FF] dark:border-2 dark:border-[#77B1FF] dark:bg-transparent"
  }`}
>
  {event.status}
</span>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Accordion - Display on mobile */}
 {/* Accordion - Display on mobile */}
<div className="block md:hidden">
  {/* Global Headers for Event Name and Status */}
  <div className="flex justify-between font-bold mb-2 text-sm">
    <span>Event Name</span>
    <span>Status</span>
  </div>

  {currentRows.map((event) => (
    <div key={event.id} className="mb-4 border-b max-w-full ">
      <button
        className={`w-full text-left flex items-center md:px-2 py-1  ${accordionOpen === event.id ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white': 'bg-white dark:bg-gray-700 dark:text-white'}`}
        onClick={() => toggleAccordion(event.id)}
      >
        <span
          className={`mr-2 ${
            accordionOpen === event.id ? "rotate-180" : ""
          } transition-transform`}
        >
          ▼
        </span>
        <div className="flex-grow ">
          {/* Show truncated event name */}
          <p className={`overflow-hidden whitespace-nowrap text-ellipsis text-xs ${accordionOpen === event.id ? 'block ' : 'hidden'}`}>
            {event.name}
          </p>
          {/* Show a shortened version of the event name initially */}
          <p className={`overflow-hidden whitespace-nowrap text-ellipsis text-xs ${accordionOpen === event.id ? 'hidden' : 'block'}`}>
            {event.name.length > 20 ? `${event.name.substring(0, 20)}...` : event.name}
          </p>
        </div>
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            event.status === "Completed"
         
            ? "bg-[#D1FAE5] text-[#10B981] dark:text-[#059669] dark:border-2 dark:border-[#059669] dark:bg-transparent"
            : "bg-[#DBEAFE] text-[#3B82F6] dark:text-[#77B1FF] dark:border-2 dark:border-[#77B1FF] dark:bg-transparent"
          }`}
        >
          {event.status}
        </span>
      </button>
      {accordionOpen === event.id && (
        <div className="px-4 flex justify-between py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs">
       <p>{event.speaker}</p>
          <p>{event.date}</p>
       
          
        </div>
      )}
    </div>
  ))}
</div>
 
 


{selectedEvent && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedEvent.name}</h3>
        <button onClick={() => setSelectedEvent(null)} className="text-xl text-gray-800 dark:text-gray-200">×</button>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{selectedEvent.date}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedEvent.description}</p>
      <div className="flex items-center mb-4">
        <img src="/path/to/avatar1.png" alt="Avatar 1" className="w-8 h-8 rounded-full mr-2" />
        <img src="/path/to/avatar2.png" alt="Avatar 2" className="w-8 h-8 rounded-full mr-2" />
        <img src="/path/to/avatar3.png" alt="Avatar 3" className="w-8 h-8 rounded-full" />
        <div className="ml-4 text-sm text-gray-600 dark:text-gray-400">{selectedEvent.guestSpeakers} Guest Speakers</div>
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-sm mb-4">{selectedEvent.attendees} Attendees</div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setSelectedEvent(null)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
        >
          Close
        </button>
        <button
          onClick={() => handleDelete(selectedEvent.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
        <button
          onClick={() => handleMarkAsCompleted(selectedEvent.id)}
          className="px-4 py-2 bg-purple-500 text-white rounded-md"
        >
          Mark as Completed
        </button>
      </div>
    </div>
  </div>
)}









   


      {/* Pagination controls */}

      <div className="flex justify-between items-center mt-4">
        <div className="flex md:gap-x-6 gap-x-1">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="md:px-4 md:py-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md"
        >
          -
        </button>

        {/* Page numbers */}
        <div className="flex space-x-2">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`md:px-4 md:py-1 px-4 py-1 rounded-full ${currentPage === number ? 'bg-blue-500 text-white' : ' dark:bg-gray-700 dark:text-white'}`}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="md:px-4 md:py-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md"
        >
          +
        </button>
        </div>
    
           {/* Pagination controls */}
      <div className="flex items-center ">
  <label htmlFor="rowsPerPage" className="mr-2 text-gray-800 dark:text-white">Show:</label>
  <select
    id="rowsPerPage"
    value={rowsPerPage}
    onChange={(e) => {
      setRowsPerPage(Number(e.target.value));
      setCurrentPage(1); // Reset to first page when changing rows per page
    }}
    className="px-2 py-1 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
  >
    <option value={10}>10</option>
    <option value={25}>25</option>
    <option value={50}>50</option>
    <option value={100}>100</option>
  </select>
</div>
    
      </div>

    </div>
  );
}

