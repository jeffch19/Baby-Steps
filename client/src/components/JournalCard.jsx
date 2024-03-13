export default function JournalCard() {
    return (
        <div className='mx-auto w-6/12 text-black my-3 h-[75vh]'>
            <form>
                <div className='flex flex-col'>
                    <input className="my-2 bg-white" placeholder='Title'></input>
                    <input className="my-2 bg-white" placeholder='Date'></input>
                    <input className="my-2 bg-white" placeholder='Weight'></input>
                    {/* <input list='months'></input> */}
                    <select name='months' className='bg-white my-2 text-black'>
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
                <textArea className='w-full bg-white' placeholder='Type thoughts/events here...' rows='8' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}