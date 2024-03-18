import React from 'react';
import '../css/journalview.css';

function JournalViewCard ( entry ) {
  console.log(entry);
  return (
    <div className="view max-w-md mx-auto px-4 py-2 bg-beige-100 shadow-md border rounded-lg text-black">
      <div className="p-2 h-[400px] overflow-y-auto my-4 mx-2">
        <h2 className="text-xl font-bold mb-2">{entry.entry.title}</h2>
        <p className="text-black-600 mb-2">Date: {entry.entry.date}</p>
        <p className="text-black-600 mb-2">Trimester: {entry.trimester}</p>
        <p className="text-black-600 mb-2">Month: {entry.entry.month}</p>
        <p className="text-black-600 mb-2">Baby's Weight: {entry.entry.babyWeight}</p>
        <div className="mt-2">
          <p className="text-black-600 mb-2">Pregnancy Journal of the Day:</p>
          <p className="text-black-800">{entry.entry.body}</p>
        </div>
        {entry.entry.image && <img src={entry.entry.image} />}
      </div>
    </div>
  );
};

export default JournalViewCard;
