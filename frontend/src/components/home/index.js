import React, { useRef } from 'react'
import { useAuth } from '../../contexts/authContext'
import { useState } from "react";
import axios from 'axios';
import { setLogLevel } from 'firebase/app';
import { RxCross2 } from "react-icons/rx";
// import { toast } from 'react-hot-toast'


const Home = () => {
    const { currentUser } = useAuth()
    const [firstName,SetFirstName] = useState('');
    const [LastName,SetLastName] = useState('');
    const [file, setFile] = useState(null);
    const [file2,setFile2] = useState(null)
    function handleChange(e) {
        console.log(e.target.files);
        setFile((e.target.files[0]));
        setFile2(URL.createObjectURL(e.target.files[0]))

    }
    
    async function submithandler(e){
        if(currentUser)
        {
            // e.preventDefault();
            let formData = new FormData(); 
            formData.append("firstname",firstName);
            formData.append("lastname",LastName);
            formData.append("file",file);
           
            try {
                const res = await axios.post("http://localhost:5000/api/v1/infoData",formData);
                console.log(res.data);
                SetFirstName('');
                SetLastName('')
                setFile(null)
                setFile2(null)
            } catch (error) {
            console.log(error);
            }
        }
    }


    // const Datasave = ()=>{
    //     toast.success('Successfully Information saved')
    // }


    return (

        
        <div className='text-2xl font-bold pt-14'>

        <div className='text-center' >
        Hello {currentUser?.displayName ? currentUser?.displayName : currentUser?.email}
        </div>
        



        <div className="w-full mt-10 flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a Form Page</h3>
                        </div>

                    </div>
                    <div
                        // onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Enter First Name
                            </label>
                            <input
                                type="text"
                                onChange={(v)=>SetFirstName(v.target.value)}
                                value={firstName}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div >
                            <label className="text-sm text-gray-600 font-bold">
                                Enter Last Name
                            </label>
                            <input
                                type="text"
                                onChange={(v)=>SetLastName(v.target.value)}
                                value={LastName}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div className='text-sm'>

                            <label className="text-sm text-gray-600 font-bold " >
                                Upload Image
                            </label>
                            {
                            file==null?

                            <input type="file"
                             name='image' id='image' required
                            className='w-full mt-2 px-3 py-2'

                            onChange={handleChange}
                            />
                            :
                            <div>
                            <RxCross2 onClick={()=>(setFile(null),setFile2(null))} />
                            <img src={file2} alt='image' className='w-[100px] h-[100px]' />
                            </div>
                            }
                        </div>

                        <button
                            type="submit"
                            onClick={submithandler}
                            className="w-full px-4 py-2 text-white font-medium rounded-lg bg-gray-300 cursor-not-allowed bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300 cursor-pointer"
                            >
                            Upload Data

                        </button>

                    </div>
                </div>
            </div>

        
        
        
        </div>



       
    )
}

export default Home