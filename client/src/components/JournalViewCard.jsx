import React from 'react';
import '../css/journalview.css';

const JournalViewCard = ({ entry }) => {
  return (
    <div className="view max-w-md mx-auto px-4 py-2 bg-beige-100 shadow-md border rounded-lg">
      <div className="p-2 h-[400px] overflow-y-auto my-4 mx-2">
        <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
        <p className="text-black-600 mb-2">Date: {entry.date}</p>
        <p className="text-black-600 mb-2">Trimester: {entry.trimester}</p>
        <p className="text-black-600 mb-2">Month: {entry.month}</p>
        <p className="text-black-600 mb-2">Baby's Weight: {entry.babyWeight}</p>
        <div className="mt-2">
          <p className="text-black-600 mb-2">Pregnancy Journal of the Day:</p>
          <p className="text-black-800">{entry.body}</p>
        </div>
      </div>
    </div>
  );
};

export default JournalViewCard;
