'use client'

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react'

// type InitialState = {
//     name: string,
//     password: string,
//     message: string,
// }

export default function Feedback() {

    const [formData, setFormData] = useState({
        name: "",
        password: "",
        message: "",
    });
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData);
        const res = await fetch(`http://localhost:3000/api/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        console.log(data);

        //* Routing to thank-you page
        router.push('/thank-you');
    }

    return (
        <main className='p-4 bg-slate-700 min-h-screen flex justify-center items-center'>
            <form
                className='w-full sm:w-9/12 md:w-6/12 p-6 flex flex-col bg-slate-600 rounded-lg shadow-lg'
                onSubmit={handleSubmit}
            >
                <input
                    className="m-2 p-4 rounded-lg outline-none border-none text-red-600 font-bold"
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter Your name'
                />
                <input
                    className="m-2 p-4 rounded-lg outline-none border-none text-red-600 font-bold"
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter Your Password'
                />
                <textarea
                    className="m-2 p-2 rounded-lg outline-none border-none text-yellow-600 font-bold"
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='What is in your mind'
                />
                <button
                    type='submit'
                    className='p-4 sm:w-7/12 md:w-5/12 mx-auto my-2 rounded-lg shadow-lg border-none font-bold bg-black text-red-600/70 hover:text-red-600'>
                    Send
                </button>
            </form>
        </main>
    )
}
