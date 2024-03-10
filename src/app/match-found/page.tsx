const getUsers = async () => {
    try {
        const res = await fetch("http:/localhost:3000/api/users", {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }

        return res.json();
    } catch (err: any) {
        console.error("Error loading users", err);
    }
}

export default async function matchFound() {
    const { users } = await getUsers();
    
    return (
        <main className="flex min-h-screen flex-col items-left justify-between p-24">
            <div className="text-sm">
                <p className="">
                    Just some dummy text for now.
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