'use client';
import { getUsers } from "../libs/getUsers";
import { useState } from "react";
import PairingForm from "../components/pairingForm";

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
