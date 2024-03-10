import GoToEateryPage from "./components/go-to-eatery-page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-center px-10 py-32">
      <div className="text-sm">
        <p className="text-4xl">
          <span className='text-red-700 font-bold'>Connec</span>
          <span className="text-green-800 font-bold">Table</span>!
        </p>
        
        <p className="">
          Don&apos;t eat alone. Find someone to eat with.
        </p>
      </div>
      <GoToEateryPage />
    </main>
  );
}
