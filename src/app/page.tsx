import GoToEateryPage from "./components/go-to-eatery-page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <div className="text-sm">
        <p className="">
          This is the home page for this platform!
        </p>
        <p className="">
          More dummy text.
        </p>
      </div>
      <GoToEateryPage />
    </main>
  );
}
