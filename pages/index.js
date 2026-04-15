import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ada Data Showcase</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Ada Data Showcase</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sample site for ADA-54: showcase analytics and charts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">Interactive Charts</h2>
              <p className="text-gray-600">Explore data with dynamic visualizations.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">Data Explorer</h2>
              <p className="text-gray-600">Browse and filter datasets easily.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">CSV Downloads</h2>
              <p className="text-gray-600">Export data for offline analysis.</p>
            </div>
          </div>
          <Link href="/dashboard" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            View Dashboard
          </Link>
        </div>
      </main>
    </>
  )
}
