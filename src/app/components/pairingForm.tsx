export default function PairingForm(setSubmitted: any) {
    const handleSubmit = () => {
        setSubmitted(true);
        alert("Submitted info.");
        console.log("Submitted info.")
    };
    return (
    <form className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-left justify-center">
            <label className="text-left">Your First Name</label>
            <input type="text" className="rounded-md border-2 border-gray-400 p-2 w-80" />
        </div>
        <div className="flex flex-col items-left justify-center">
            <label className="text-left">Where are you sitting?</label>
            <input type="text" className="rounded-md border-2 border-gray-400 p-2 w-80" />
        </div>
        <div className="flex flex-col items-left justify-center">
            <label className="text-left">Briefly describe your appearance.</label>
            <input type="text" className="rounded-md border-2 border-gray-400 p-2 w-80" />
        </div>
        <button className="bg-blue-500 text-white rounded p-2 items-end m-3" type="submit" onSubmit={handleSubmit}>
            Submit
        </button>
    </form>);
}