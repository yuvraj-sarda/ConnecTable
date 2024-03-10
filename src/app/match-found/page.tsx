import { getUsers } from "../libs/getUsers";
import Image from 'next/image';

export default async function matchFound() {
    const { users } = await getUsers();
    const user = users[0];
    const firstName = "Yuvraj";
    const interests = ["Sports", "Music", "food"];
    const location = "Sitting near the stairs.";
    const outfit = "I'm wearing blue jeans and a creme hoody."

    return (
        <main className="flex min-h-screen flex-col items-left justify-center px-10 py-16">
            <div className="">
                <a href="/"><p className="text-xl text-center">
                    <span className='text-red-700 font-bold'>Connec</span>
                    <span className="text-green-800 font-bold">Table</span>
                </p></a>
                
                <p className="text-green-700 w-full text-center py-8 my-6 text-3xl font-bold">
                    We found a great match for you!
                </p>

                <div className="rounded-full overflow-hidden w-48 h-50 mx-auto mt-10 mb-3">
                    <Image src={'/SamplePic.png'} alt="Profile Picture" width={200} height={200}/>
                </div>

                <p className="text-center text-xl mb-10">
                    Meet <b>{firstName}</b>.
                </p>
                <p className="">
                    <b>Interests:</b> {interests.map((interest) => 
                    <span key={interest} className="px-2 py-1 bg-green-400 rounded-full mx-1">{interest}</span>)}
                </p>
                
                <p className="">
                    <b>Location:</b> {location}
                </p>
                <p className="">
                    <b>Outfit:</b> {outfit}
                </p>
            </div>

        </main>
    );
}