import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adamantite Analytics</title>
      </Head>
      <main className="min-h-screen bg-dark text-white">
        <header className="border-b border-dark-100 px-8 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Adamantite Analytics</h1>
            <nav className="flex items-center gap-6">
              <Link href="/dashboard" className="text-gray-400 hover:text-white transition">
                Dashboard
              </Link>
              <Link href="/dashboard" className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition">
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <section className="px-8 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Autonomous Analytics for <span className="text-primary">Small Teams</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Automate data collection, surface high-value insights, and monetize clean datasets.
            </p>
            <Link href="/dashboard" className="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
              Explore Dashboard
            </Link>
          </div>
        </section>

        <section className="px-8 py-16 bg-dark-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-10 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-100 rounded-xl p-6 border border-dark-200 hover:border-primary/50 transition">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Interactive Charts</h4>
                <p className="text-gray-400">Explore data with dynamic visualizations and real-time updates.</p>
              </div>
              <div className="bg-dark-100 rounded-xl p-6 border border-dark-200 hover:border-primary/50 transition">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Data Connectors</h4>
                <p className="text-gray-400">Connect to APIs, files, and warehouses with scheduled pipelines.</p>
              </div>
              <div className="bg-dark-100 rounded-xl p-6 border border-dark-200 hover:border-primary/50 transition">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Monetize Data</h4>
                <p className="text-gray-400">Export clean, anonymized datasets for revenue opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-dark-100 px-8 py-8">
          <div className="max-w-6xl mx-auto text-center text-gray-500">
            <p>Adamantite Analytics - Lean, revenue-first analytics orchestration</p>
          </div>
        </footer>
      </main>
    </>
  )
}
