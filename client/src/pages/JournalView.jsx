import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_AND_JOURNAL } from "../graphql/queries";
import JournalViewCard from '../components/JournalViewCard'; // Assuming you have a separate component for the journal entry card

function JournalView() {
    const{loading, data} = useQuery(GET_USER_AND_JOURNAL,)

    if (loading) return <p>Loading...</p>;
    if (!data) return <p>No data found</p>;

    console.log(data)

    const { journalEntries } = data.user; 

    return (
        <>
            <div>
                <h1>My Journal</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {journalEntries.map((entry) => (
                        <JournalViewCard key={entry.id} entry={entry} />
                    ))}
               </div>
            </div>
        </>
    )
}

export default JournalView