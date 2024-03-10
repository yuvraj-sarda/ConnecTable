export default function PageNotFound() {
    return (
      <main className="flex min-h-screen flex-col items-left items-center justify-center p-24">
        <div className="">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
            <a href="/" className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </a>
        </div>
      </main>
    );
  }
  