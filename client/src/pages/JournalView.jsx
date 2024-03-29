import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';
import { GET_USER_AND_JOURNAL } from "../graphql/queries";
import JournalViewCard from '../components/JournalViewCard'; // Assuming you have a separate component for the journal entry card

function JournalView() {
    const { loading, data } = useQuery(GET_USER_AND_JOURNAL,)

    if (loading) return <p>Loading...</p>;
    if (!data) return <p>No data found</p>;

    console.log(data)


    const journalEntries = data?.user.journel;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div className='grid-container' style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
                <div className='text-center'>
                    <h1 className='text-4xl font-lucida-calligraphy font-bold mb-4 mt-5'>My Journal</h1>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4">
                    {journalEntries.map((entry) => (
                        <JournalViewCard key={entry.id} entry={entry} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default JournalView