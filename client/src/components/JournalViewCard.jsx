import React from 'react';

const JournalViewCard = ({ entry }) => {
  return (
    <div className="max-w-md mx-auto bg-beige-100 shadow-md border border-green-200 rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
        <p className="text-gray-600 mb-2">Date: {entry.date}</p>
        <p className="text-gray-600 mb-2">Trimester: {entry.trimester}</p>
        <p className="text-gray-600 mb-2">Month: {entry.month}</p>
        <p className="text-gray-600 mb-2">Baby's Weight: {entry.babyWeight}</p>
        <div className="mt-2">
          <p className="text-gray-600 mb-2">Body:</p>
          <p className="text-gray-800">{entry.body}</p>
        </div>
      </div>
    </div>
  );
};

export default JournalViewCard;