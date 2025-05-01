'use client';

import { useState, useRef, useEffect } from 'react';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if you click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
      >
        TikTok Menu
      </button>
      {open && (
        <div className="absolute bottom-full mb-2 left-0 bg-white border rounded shadow-md w-48 z-10">
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Share</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;