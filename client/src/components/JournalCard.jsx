import { ADD_Journel } from "../graphql/mutations";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';


export default function JournalCard() {
    const [formState, setFormState] = useState({
        title: '', date: '', weight: '', months: '', body: ''
    });
    const [submission, { error }] = useMutation(ADD_Journel);

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        console.log(formState);
        try {
            const { data } = await submission({
                variables: { ...formState },
            });
            console.log(data);
            setFormState({
                title: '', date: '', weight: '', months: '', body: ''
            });
        }
        catch (e) {
            console.error(e);
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    return (
        <div className='mx-auto w-6/12 text-black my-3 h-[75vh]'>
            <form onSubmit={handleFormSubmit}>
                <div className='flex flex-col'>
                    <input className="my-2 bg-white" name='title' placeholder='Title' onChange={handleChange}></input>
                    <input className="my-2 bg-white" name='date' placeholder='Date' onChange={handleChange}></input>
                    <input className="my-2 bg-white" name='weight' placeholder='Weight' onChange={handleChange}></input>
                    {/* <input list='months'></input> */}
                    <select name='months' className='bg-white my-2 text-black' onChange={handleChange}>
                        <option value='' disabled selected>Select a month</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <textArea className='w-full bg-white' name='body' placeholder='Type thoughts/events here...' rows='8' onChange={handleChange}/>
                <button type='submit' onClick={handleFormSubmit}>Submit</button>
                
            </form>
            <button><Link to='/journalview'>To journal view</Link></button>
        </div>
    )
}