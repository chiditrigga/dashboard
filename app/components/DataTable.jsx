"use client"
import { useState, useEffect } from "react";

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
  // Add more sample data as needed
];

export default function DataTable() {
  const [data, setData] = useState(eventsData); // Main data
  const [sortOrder, setSortOrder] = useState("asc"); // For sorting names
  const [currentPage, setCurrentPage] = useState(1); // Pagination control
  const [rowsPerPage, setRowsPerPage] = useState(10); // Number of rows per page
  const [searchQuery, setSearchQuery] = useState(""); // Search term
  const [filterStatus, setFilterStatus] = useState("All"); // Filter for event status
  const [sortDateOrder, setSortDateOrder] = useState("Newest"); // Sorting by date
  const [accordionOpen, setAccordionOpen] = useState(null); // Accordion state

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

    return filteredData;
  };

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredAndSortedData().slice(indexOfFirstRow, indexOfLastRow);

  // Change accordion open state
  const toggleAccordion = (id) => {
    setAccordionOpen(accordionOpen === id ? null : id);
  };

  // Rendering table for larger screens and accordion for mobile
  return (
    <div className="container mx-auto px-4 py-8">
    {/* Toolbar */}
<div className="mb-4 flex flex-col md:flex-row md:gap-x-2">
  {/* Search Input */}
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search events"
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white mb-2 md:mb-0"
  />

  {/* Filter Dropdown */}
  <select
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white mb-2 md:mb-0"
  >
     <option value="">status</option>
    <option value="All">All</option>
    <option value="Completed">Completed</option>
    <option value="In Progress">In Progress</option>
  </select>

  {/* Sort by Date */}
  <select
    value={sortDateOrder}
    onChange={(e) => setSortDateOrder(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
    
  >
    <option value=''>Date</option>
    <option value="Newest">Newest</option>
    <option value="Oldest">Oldest</option>
  </select>
 
 <div className=" flex  justify-between w-full">
   
   <div style={{display:'flex',alignItems:'center'}} className="h-full font-semibold">
   Displaying 100 results
   </div>

   <div>
   <select
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white mb-2 md:mb-0"
  >
     <option value="">status</option>
    <option value="All">All</option>
    <option value="Completed">Completed</option>
    <option value="In Progress">In Progress</option>
  </select>
  <select
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white mb-2 md:mb-0"
  >
     <option value="">status</option>
    <option value="All">All</option>
    <option value="Completed">Completed</option>
    <option value="In Progress">In Progress</option>
  </select>
  <select
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white mb-2 md:mb-0"
  >
     <option value="">status</option>
    <option value="All">All</option>
    <option value="Completed">Completed</option>
    <option value="In Progress">In Progress</option>
  </select>
   </div>

 </div>
</div>



      {/* Table - Display on larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 text-black dark:text-white">
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
                className={`hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer ${
                  index % 2 === 0
                    ? "bg-gray-100 dark:bg-gray-900"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                <td className="px-6 py-4">{event.name}</td>
                <td className="px-6 py-4">{event.date}</td>
                <td className="px-6 py-4">{event.speaker}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      event.status === "Completed"
                        ? "bg-green-500"
                        : event.status === "In Progress"
                        ? "bg-blue-500"
                        : "bg-yellow-500"
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
    <div key={event.id} className="mb-4 border-b max-w-full">
      <button
        className="w-full text-left flex items-center md:px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-white"
        onClick={() => toggleAccordion(event.id)}
      >
        <span
          className={`mr-2 ${
            accordionOpen === event.id ? "rotate-180" : ""
          } transition-transform`}
        >
          ▼
        </span>
        <div className="flex-grow">
          {/* Show truncated event name */}
          <p className={`overflow-hidden whitespace-nowrap text-ellipsis text-xs ${accordionOpen === event.id ? 'block' : 'hidden'}`}>
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
              ? "bg-green-500"
              : event.status === "In Progress"
              ? "bg-blue-500"
              : "bg-yellow-500"
          }`}
        >
          {event.status}
        </span>
      </button>
      {accordionOpen === event.id && (
        <div className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white text-xs">
          <h3 className="font-bold">Date:</h3>
          <p>{event.date}</p>
          <h3 className="font-bold">Speaker:</h3>
          <p>{event.speaker}</p>
        </div>
      )}
    </div>
  ))}
</div>


      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {Math.ceil(filteredAndSortedData().length / rowsPerPage)}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredAndSortedData().length / rowsPerPage)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

