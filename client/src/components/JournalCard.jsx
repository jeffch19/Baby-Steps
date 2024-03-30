import { ADD_Journel } from "../graphql/mutations";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import '../css/journalcard.css';
import CloudinaryUploadWidget from "./CloudButton";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';


export default function JournalCard() {
    const [publicId, setPublicId] = useState('');
    const [cloudName] = useState('dlosqugku');
    const [image_url, setImageUrl] = useState('');
    const [uploadPreset] = useState('hi3hlojn');
    const [uwConfig] = useState({
        cloudName,
        uploadPreset
    });
    const cld = new Cloudinary({
        cloud: {
            cloudName
        }
    });

    const myImage = cld.image(publicId);

    const [formState, setFormState] = useState({
        title: '', date: '', weight: '', month: '', trimester: '', body: ''
    });
    const [submission] = useMutation(ADD_Journel);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await submission({
                variables: { ...formState, image: image_url },
            });
            setFormState({
                title: '', date: '', babyWeight: '', month: '', trimester: '', body: '' 
            });
        }
        catch (e) {
            console.error(e);
        }
    }
    const handleChange = (e) => {
        console.log(formState);
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    return (
        <div className='mx-auto sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 text-black my-3 sm:px-2 md:px-4 lg:px-4 xl:px-4'>
            <form onSubmit={handleFormSubmit}>
                <div className='flex flex-col'>
                    <input className="my-2" name='title' placeholder='Title' onChange={handleChange}></input>
                    <div className='flex'>
                        <input className="my-2 w-1/2" name='date' placeholder='Date' onChange={handleChange}></input>
                        <input className="my-2 w-1/2" name='babyWeight' placeholder='Weight' onChange={handleChange}></input>
                    </div>
                    <div className='flex'>
                        <select name='month' className='my-2 h-12 w-1/2' onChange={handleChange}>
                            <option value='' disabled selected>Month</option>
                            <option value='1'>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        <select name='trimester' className='my-2 h-12 w-1/2' onChange={handleChange}>
                            <option value='' disabled selected>Trimester</option>
                            <option value='1'>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>    
                <textarea className='w-full' name='body' placeholder='Type thoughts/events here...' rows='8' onChange={handleChange} />
                <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} setImageUrl={setImageUrl} />
                <div className='mx-auto'>
                    <AdvancedImage style={{ maxWidth: '300px', maxHeight: '200px' }}
                        cldImg={myImage}
                        plugins={[responsive(), placeholder()]} className='mx-auto'/>
                </div>
                <button type='submit' onClick={handleFormSubmit}>Save Entry</button>
            </form>
            <button><Link to='/journalview' style={{ color: 'black' }}>Journal View</Link></button>
        </div>
    )
}