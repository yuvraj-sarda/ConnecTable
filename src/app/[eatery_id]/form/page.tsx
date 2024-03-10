'use client';
import { useEffect, useState } from 'react';
import matchFound from '../../algorithms/findMatch';
import { useRouter } from 'next/navigation';
import { POST } from '../../api/users/route';
import { userData } from '../../libs/types';
import { getUsers } from '../../libs/getUsers';

export default function Form() {
  const [screen, setScreen] = useState(0);
  
  const [userData, setUserData] = useState<userData>({
    eateryId: 'xxx',
    interests: [""],
    okayOutsideInterests: true,
    conversationType: "",
    firstName: "",
    location: "",
    outfit: "",
    active: true
  });

  useEffect(() => {
    const eateryId: string = window.location.pathname.split('/')[1] || '1000';;
    setUserData(prevState => ({ ...prevState, eateryId }));
  }, []);

  let otherUsers: any[] = [];
  // getUsers().then(
  //   (data: any[]) => otherUsers = data.filter(
  //     (other: any) => 
  //   other.eateryId === userData.eateryId &&
  //   other.active)
  // );

  const screens = [
    <Interests key="0" setScreen={setScreen} userData={userData} setUserData={setUserData} otherUsers={otherUsers}/>,
    <OkayOutsideInterests key="1" setScreen={setScreen} userData={userData} setUserData={setUserData} otherUsers={otherUsers}/>,
    <ConversationType key="2" setScreen={setScreen} userData={userData} setUserData={setUserData} otherUsers={otherUsers}/>
  ]

  return (
    <main className="flex min-h-screen flex-col items-left justify-center px-10 py-32">
      {screens[screen]}
    </main>
  );
}

function Interests({ setScreen, userData, setUserData, otherUsers }: any) {
  const router = useRouter();
  const handleNext = () => {
    // if (otherUsers) {
    //   const matches = otherUsers.filter((other: any) => 
    //     other.interests.filter((interest: any) => userData.interests.includes(interest)).length > 0
    //   )

    //   if (matches.length > 0) {
    //     console.log("Match found!");
    //     router.push(`/match-found`);
    //   }
    // }

    // for some reason, am unable to remove the empty string from the array.
    // const interestsWithoutEmptyStrings = userData.interests.filter((i: string) => i !== "");
    // setUserData({ ...userData, interests: interestsWithoutEmptyStrings});

    console.log(userData);
    setScreen(1);
  };

  const interestOptions: string[] = [
    "Creative arts", "Science", "Books", "Food", "Music", "Academics", "Sports", "Travel", "Work", 
    "Outdoor activities", "Movies/TV shows", "Gaming"]

  return (
    <div className="">
      <p className="font-bold text-lg">
        Please select 3 or more topics that interest you.
      </p>
      {interestOptions.map((interest: string) => (
        <div key={interest} className='py-1'>
          <input type="checkbox" id={interest} name={interest} value={interest} onChange={(e) => {
            if (e.target.checked) {
              setUserData({ ...userData, interests: [...userData.interests, e.target.value] });
            } else {
              setUserData({ ...userData, interests: userData.interests.filter((i: string) => i !== e.target.value) });
            }
          }}/>
          <label htmlFor={interest} className="px-2">{interest}</label>
        </div>
      ))}
      
      <div className='flex flex-row-reverse'>
        <button onClick={handleNext} className="bg-blue-500 text-white rounded px-8 py-3">
          Next
        </button>
      </div>
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
      <div className="">
        <p className="font-bold text-xl">
          Would you be willing to meet people who do not share any of your the interests you selected?
        </p>
        <button onClick={handleYes} className="bg-green-300 text-black rounded p-2 my-5">
          Yes, sounds exciting!
        </button>
        <button onClick={handleNo} className="bg-red-300 text-black rounded p-2">
          No, sounds like a bad idea.
        </button>
      </div>
  );
}

function ConversationType({ setScreen, userData, setUserData }: any) {
  const router = useRouter();
  const handleChange = (e: any) => {
    setUserData({ ...userData, conversationType: e.target.value });
  };
  
  const handleSubmit = () => {
    if (matchFound(userData)) {
      router.push(`/match-found`);
    } else {
      // POST(userData);
      router.push(`/pairing`);
    }
  }

  return (
    <div className="space-y-8">
      <p className="font-bold text-xl">
        Finally, what kind of a conversation would you like to have today?
      </p>
      <div>
        <input type="radio" id="deep" value="snackable" onChange={handleChange}/>
        <label className="px-2">An easy, light conversation (a snackable chat!)</label>
      </div>

      <div>
        <input type="radio" id="deep" value="main" onChange={handleChange}/>
        <label className="px-2">Something fulfilling, engaging (main course!)</label>
      </div>

      <div>
        <input type="radio" id="deep" value="dessert" onChange={handleChange}/>
        <label className="px-2">Rich, indulding, complex (dessert!)</label>
      </div>

      <button onClick={handleSubmit} className="bg-green-700 text-white rounded p-2 w-full">
        Find your match!
      </button>
    </div>
  );
}