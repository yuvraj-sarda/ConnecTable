import { getUsers } from "../libs/getUsers";

export default async function matchFound() {
    const { users } = await getUsers();
    
    return (
        <main className="flex min-h-screen flex-col items-left justify-between p-24">
            <div className="text-sm">
                <p className="">
                    
                </p>
                <p className="">
                    More dummy text.
                </p>
                {users.map((user: any) => (
                    <div key={user._id}>
                        <h2>{user.firstName}</h2>
                        <p>{user.interests.join(", ")}</p>
                        <p>{user.location}</p>
                    </div>)
                )}
            </div>

        </main>
    );
}