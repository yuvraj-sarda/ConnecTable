export const getUsers = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error loading users", err);
        return []; // Return an empty array or handle the error as needed
    }
}