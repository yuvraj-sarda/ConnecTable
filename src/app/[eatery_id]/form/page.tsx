'use client';

import { useEffect, useState } from 'react';
import matchFound from '../../algorithms/findMatch';
import { useRouter } from 'next/navigation';
import { POST } from '../../api/users/route';

export default function Form() {
  const [screen, setScreen] = useState(0);
  

  const [userData, setUserData] = useState({
    eateryId: 'xxx',
    interests: [],
    okayOutsideInterests: true
  });

  useEffect(() => {
    const eateryId: string = window.location.pathname.split('/')[1] || '1000';;
    setUserData(prevState => ({ ...prevState, eateryId }));
  }, []);


  const screens = [
    <Interests key="0" setScreen={setScreen} userData={userData} setUserData={setUserData}/>,
    <OkayOutsideInterests key="1" setScreen={setScreen} userData={userData} setUserData={setUserData}/>,
    <ConversationType key="2" setScreen={setScreen} userData={userData} setUserData={setUserData}/>
  ]

    return (
      <main className="flex min-h-screen flex-col items-left justify-between p-10">
        {screens[screen]}
      </main>
    );
}

function Interests({ setScreen, userData, setUserData }: any) {
  const handleNext = () => {
    setScreen(1);
  };
  return (
    <div className="text-sm">
      <p className="">
        Please select at least 3 interests from the list below.
      </p>
      <p className="">
        More dummy text.
      </p>
      <button onClick={handleNext} className="bg-blue-500 text-white rounded p-2">
        Next
      </button>
    </div>
  );
}

function OkayOutsideInterests({ setScreen, userData, setUserData }: any) {
  const handleYes = () => {
    setUserData({ ...userData, okayOutsideInterests: true });
    setScreen(2);
  };

  const handleNo = () => {
    setUserData({ ...userData, okayOutsideInterests: false });
    setScreen(2);
    console.log(userData);
  };

  return (
      <div className="text-sm">
        <p className="">
          Would you be willing to meet people who do not share any of your the interests you selected?
        </p>
        <button onClick={handleYes} className="bg-blue-500 text-white rounded p-2">
          Yes, sounds exciting!
        </button>
        <button onClick={handleNo} className="bg-blue-500 text-white rounded p-2">
          No, sounds like a bad idea.
        </button>
      </div>
  );
}

function ConversationType({ setScreen, userData, setUserData }: any) {
  const router = useRouter();
  const handleSubmit = () => {
    setUserData({ ...userData, okayOutsideInterests: true });
    if (matchFound(userData)) {
      router.push(`/match-found`);
    } else {
      // POST(userData);
      router.push(`/pairing`);
    }
  }

  return (
    <div className="text-sm">
      <p className="">
        What kind of a conversation would you like to have today?
      </p>
      <button onClick={handleSubmit} className="bg-blue-500 text-white rounded p-2">
        Submit
      </button>
    </div>
  );
}