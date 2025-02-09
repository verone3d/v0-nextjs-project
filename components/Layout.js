import Head from "next/head"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Verone.net</title>
        <meta name="description" content="Personal website of Verone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4 shadow-md">
          <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">
              Verone.net
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/domains" className="hover:text-gray-300 transition-colors">
                  Domains
                </Link>
              </li>
              <li>
                <Link href="/christmas-cards" className="hover:text-gray-300 transition-colors">
                  Christmas Cards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Verone.net. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

