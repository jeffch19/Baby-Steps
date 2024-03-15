import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_AND_JOURNAL } from "../graphql/queries";
import JournalViewCard from '../components/JournalViewCard';

function JournalView() {
    const{loading, data} = useQuery(GET_USER_AND_JOURNAL,)

    if (loading) return <p>Loading...</p>;
    if (!data) return <p>No data found</p>;

    console.log(data)

    const { journalEntries } = data.user; 

    return (
        <>
            <div className="journal-view-container">
                <h1 className="text-3x1 font-bold text-center mb-4">Journal Entries</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {journalEntries.map((entry) => (
                        <JournalViewCard key={entry.id} entry={entry} />
                    ))}
               </div>
            </div>
        </>
    )
}

export default JournalView