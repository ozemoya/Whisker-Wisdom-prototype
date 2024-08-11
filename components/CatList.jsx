// components/CatList.jsx

import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

const CatList = ({ cats }) => {
  return (
    <div className="bg-gradient-orange">
      <Navbar />
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-gradient-orange ">
        {cats.map((cat) => (
          <li key={cat.id} className="py-1">
            <Link href={`/cats/${cat.id}`} className="btn py-20 flex flex-col items-center bg-white no-border">
              {cat.reference_image_id && (
                <img
                  src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                  className="w-20 h-20 rounded-full mb-2" // Add rounded-full class to make the image circular and mb-2 for margin-bottom
                  alt={cat.name}
                />
              )}
              <span>{cat.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <Link href="/" className="bg-orange-300  py-2 px-4 rounded hover:bg-orange-400 transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CatList;