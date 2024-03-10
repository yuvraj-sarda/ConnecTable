'use client'
import { useRouter } from 'next/navigation';

export default function Eatery() {
    const router = useRouter();
    const handleNext = () => {
        router.push(`${window.location.pathname}/form`);
    };

    return (
      <main className="flex min-h-screen flex-col items-left justify-center px-10 py-32">
        <p className="text-4xl items-start">
          Welcome to </p>
        <a href="/"><p className="text-4xl">
          <span className='text-red-700 font-bold'>Connec</span>
          <span className="text-green-800 font-bold">Table</span>!
        </p></a>
        <p className="text-lg py-5">
          We&apos;re glad to have you here.
        </p>
        <p className="text-lg py-16">
          Answer a few quick questions and we will match you with someone you&apos;d enjoy eating with.
        </p>
        <button className="bg-blue-500 text-white rounded p-2 items-end" onClick={handleNext}>
          Lets start!
        </button>
  
      </main>
    );
  }
  