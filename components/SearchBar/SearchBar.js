"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";

// Import your local data sources
import { domainAreasData, socialBusinessesData, solutionsData, scaleAcceleratorsData, incubateesData, teamData, collaborativeInitiativesData } from "../../utils/data";

function SearchModal() {
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchTime, setFetchTime] = useState(null);
  const [resultCount, setResultCount] = useState(0);
  

  const categoryIds = [77, 72, 71, 16, 86, 87, 69, 64, 59, 62, 80];

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchQuery) {
        setResults([]);
        setResultCount(0);
        setFetchTime(null);
        return;
      }

      setLoading(true);
      const startTime = performance.now();

      try {
        // Fetch WordPress backend results
        const resultsPerCategory = await Promise.all(
          categoryIds.map(async (id) => {
            const response = await fetch(
              `https://docs.cms.org.in/wp-json/wp/v2/posts?search=${searchQuery}&categories=${id}`
            );
            return response.json();
          })
        );

        const wordpressResults = resultsPerCategory.flat();

        // Filter local data sources based on the search query
        const filterLocalData = (data) => {
          return data.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase())
          );
        };

        const domainResults = filterLocalData(domainAreasData);
        const socialResults = filterLocalData(socialBusinessesData);
        const solutionsResults = filterLocalData(solutionsData);

        // Combine all results
        const allResults = [
          ...wordpressResults.map((item) => ({
            id: item.id,
            title: item.title?.rendered,
            link: `/insights/${item.slug || ""}`,
          })),
          ...domainResults.map((item) => ({
            id: item.id,
            title: item.title,
            link: item.path,
          })),
          ...socialResults.map((item) => ({
            id: item.id,
            title: item.title,
            link: item.path,
          })),
          ...solutionsResults.map((item) => ({
            id: item.id,
            title: item.title,
            link: item.path,
          })),
          ...scaleAcceleratorsData.map((item) => ({
            id: item.id,
            title: item.title,
            link: item.path,
          })),
          ...incubateesData.map((item) => ({
            id: item.id,
            title: item.title,
            link: item.websiteUrl,
          })),
          ...teamData.map((item) => ({
            id: item.id,
            title: item.name,
            link: item.inUrl,
          })),
          ...collaborativeInitiativesData.map((item) => ({
            id: item.id,
            title: item.title,
            link: item.path,
          })),
        ];

        const endTime = performance.now();

        setResults(allResults);
        setResultCount(allResults.length);
        setFetchTime((endTime - startTime).toFixed(2));
      } catch (error) {
        console.error("Error fetching results:", error);
      }

      setLoading(false);
    };

    const debounceTimer = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <div className="text-black">
      {/* Trigger Button */}
      <button
        className="text-white text-lg p-2"
        onClick={() => setOpenModal(true)}
      >
        <FaSearch className="cursor-pointer"/>
      </button>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-cms-primary w-full max-w-md mx-4 rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                className="ml-2 text-white rounded-full p-1 hover:text-gray-800"
                onClick={() => setOpenModal(false)}
              >
                <IoIosCloseCircle className="text-4xl"/>
              </button>
            </div>

            {/* Body */}
            <div className="p-4 max-h-80 overflow-y-auto bg-cms-primary-green">
              {loading ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-2 text-gray-600">Loading...</p>
                </div>
              ) : (
                <>
                  {resultCount > 0 && (
                    <p className="text-xl text-cms-primary mb-5">
                      Total <strong>{resultCount}</strong> results
                    </p>
                  )}
                  {results.length > 0 ? (
                    <ul className="space-y-2">
                      {results.map((result) => (
                        <li key={result.id} className="border-b border-gray-500 pb-2">
                          <Link
                            href={result.link}
                            onClick={() => setOpenModal(false)}
                            className="text-white hover:underline hover:text-cms-primary"
                            target="_blank"
                          >
                            {result.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    searchQuery && <p>No results found.</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchModal;
