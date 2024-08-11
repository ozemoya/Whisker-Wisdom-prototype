import Link from "next/link";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-none">
        <h1 className="text-4xl font-bold mb-6">Welcome to Whisker Wisdom</h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover various cat breeds and their information.
        </p>
        <div className="flex space-x-4">
          <Link href="/cats">
            <div className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Explore Cats
            </div>
          </Link>
          <Link href="/about">
            <div className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
              About Us
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;