'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GoToEateryPage() {
    const [eateryId, setEateryId] = useState<string>('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEateryId(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/${eateryId}`);
    };

    return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
            type="text"
            value={eateryId}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter the ID for the eatery you're at."
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Take me there!
        </button>
    </form>
  );
}