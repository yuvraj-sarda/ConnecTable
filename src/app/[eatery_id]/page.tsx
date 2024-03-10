'use client'
import { useRouter } from 'next/navigation';

export default function Eatery() {
    const router = useRouter();
    const handleNext = () => {
        router.push(`${window.location.pathname}/form`);
    };

    return (
      <main className="flex min-h-screen flex-col items-left justify-between p-24">
        <div className="text-sm">
          <p className="">
            This is the page for the eatery!
          </p>
          <p className="">
            More dummy text.
          </p>
          <button className="bg-blue-500 text-white rounded p-2" onClick={handleNext}>
            Lets start!
          </button>
        </div>
  
      </main>
    );
  }
  