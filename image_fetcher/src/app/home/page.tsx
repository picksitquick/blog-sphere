"use client"
// import {some} from 'styles';
import React, { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Header from '../component/header';

export interface User{
    name: string;
    id: number;
    image: Blob;
}

const Sample = () => {
    const [username , setUsername] = useState(1);
    const [user , setUser] = useState<User | Blob>();
    const [inputValue , setInputValue] = useState(1);

    const handleInputChange = (event: { preventDefault: () => void; target: { value: SetStateAction<Blob>; }; }) => {
        event.preventDefault();
        setInputValue(event.target.value.prototype);
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) =>{
        event.preventDefault();
        setUsername(inputValue);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`http://localhost:3001/users/${username}`);
            const data = await response.blob();
            // document.getElementById(username).src=URL.createObjectURL(data);
            setUser(data);
        };
        fetchUser();
    }, [username]);

    return(
        <main>   
            <Header />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
                <span className="bg-blue-400 mb-4 p-1 font-bold rounded-lg highlight text-white">FetchCraft: The Art of Data Acquisition</span>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <span className="font-bold flex flex-col items-center bg-gray-400 rounded-lg text-white">Enter ID</span>
                    <div className="mt-4">
                        <input
                        className="text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="img"
                        value="{inputValue}"
                        onChange={()=>handleInputChange}
                        placeholder="Image ID"
                        required={true}
                        minLength={1}
                        maxLength={2}
                        />
                    </div>
                </div>
                <div className="mt-4 bg-blue-400 rounded-lg">
                    <button
                        type="button"
                        onSubmit={handleSubmit}
                        className="hover:bg-blue-500 rounded-lg text-white font-bold py-2 px-4">
                        Submit
                    </button>
                </div>
            </div>
        </main>
        
    );
}

export default Sample;

// import React from "react";

// export default function sample(){
//     return(
//         <div>
//             <h1>eargsgsehgdshgs</h1>
//         </div>
//     );
// }