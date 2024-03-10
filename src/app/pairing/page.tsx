'use client';
import { getUsers } from "../libs/getUsers";
import { useState } from "react";

export default function Pairing() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-left justify-center px-10 py-16">
            <div className="">
                <a href="/"><p className="text-xl text-center">
                    <span className='text-red-700 font-bold'>Connec</span>
                    <span className="text-green-800 font-bold">Table</span>
                </p></a>
                
                <p className="text-green-700 w-full text-center py-8 my-6 text-5xl font-bold">
                    Fantastic! 
                </p>

                <p className="text-black w-full text-center pb-8 my-6 text-xl font-bold">
                    Grab a seat, we should be able to match you with someone soon. Be sure to fill out the details below so your match can find you!
                </p>                
                {!submitted && <PairingForm setSubmitted={setSubmitted}/>}
                {submitted && <p className="text-black w-full text-center pb-8 my-6 text-xl font-bold">
                    Thank you. It shouldn&apos;t be long before we find you a match!
                </p>}

                
            </div>

        </main>
    );
}

export function PairingForm(setSubmitted: any) {
    const handleSubmit = () => {
        setSubmitted(true);
        alert("Submitted info.");
        console.log("Submitted info.")
    };
    return (
    <form className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-left justify-center">
            <label className="text-left">Your First Name</label>
            <input type="text" className="rounded-md border-2 border-gray-400 p-2 w-80" />
        </div>
        <div className="flex flex-col items-left justify-center">
            <label className="text-left">Where are you sitting?</label>
            <input type="text" className="rounded-md border-2 border-gray-400 p-2 w-80" />
        </div>
        <div className="flex flex-col items-left justify-center">
            <label className="text-left">Briefly describe your appearance.</label>
            <input type="text" className="rounded-md border-2 border-gray-400 p-2 w-80" />
        </div>
        <button className="bg-blue-500 text-white rounded p-2 items-end m-3" type="submit" onSubmit={handleSubmit}>
            Submit
        </button>
    </form>);
}