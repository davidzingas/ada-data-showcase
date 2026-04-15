import Head from 'next/head'
import Link from 'next/link'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      data: [1200, 1900, 3000, 2500, 2800, 3200],
      backgroundColor: 'rgba(139, 92, 246, 0.8)',
      borderColor: 'rgba(139, 92, 246, 1)',
      borderWidth: 1,
      borderRadius: 4,
    },
    {
      label: 'Users',
      data: [400, 600, 800, 700, 900, 1100],
      backgroundColor: 'rgba(34, 211, 238, 0.8)',
      borderColor: 'rgba(34, 211, 238, 1)',
      borderWidth: 1,
      borderRadius: 4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#9ca3af',
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    y: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
  },
}

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Adamantite Analytics</title>
      </Head>
      <main className="min-h-screen bg-dark text-white">
        <header className="border-b border-dark-100 px-8 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white">Adamantite Analytics</Link>
            <nav className="flex items-center gap-6">
              <span className="text-primary font-medium">Dashboard</span>
            </nav>
          </div>
        </header>

        <section className="px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Analytics Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-dark-50 rounded-xl p-6 border border-dark-100">
                <p className="text-gray-400 text-sm mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-white">$14,600</p>
                <p className="text-primary text-sm mt-1">+12% from last month</p>
              </div>
              <div className="bg-dark-50 rounded-xl p-6 border border-dark-100">
                <p className="text-gray-400 text-sm mb-1">Total Users</p>
                <p className="text-3xl font-bold text-white">4,500</p>
                <p className="text-cyan-400 text-sm mt-1">+8% from last month</p>
              </div>
              <div className="bg-dark-50 rounded-xl p-6 border border-dark-100">
                <p className="text-gray-400 text-sm mb-1">Top Region</p>
                <p className="text-3xl font-bold text-white">North America</p>
                <p className="text-gray-500 text-sm mt-1">42% of users</p>
              </div>
              <div className="bg-dark-50 rounded-xl p-6 border border-dark-100">
                <p className="text-gray-400 text-sm mb-1">Best Month</p>
                <p className="text-3xl font-bold text-white">June</p>
                <p className="text-primary text-sm mt-1">$3,200 revenue</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-dark-50 rounded-xl p-6 border border-dark-100">
                <h2 className="text-xl font-semibold mb-4 text-white">Monthly Revenue & Users</h2>
                <Bar data={sampleData} options={chartOptions} />
              </div>
              <div className="bg-dark-50 rounded-xl p-6 border border-dark-100">
                <h2 className="text-xl font-semibold mb-4 text-white">Summary</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-dark-100">
                    <span className="text-gray-400">Total Revenue (YTD)</span>
                    <span className="text-white font-semibold">$14,600</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-100">
                    <span className="text-gray-400">Total Users (YTD)</span>
                    <span className="text-white font-semibold">4,500</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-100">
                    <span className="text-gray-400">Top Region</span>
                    <span className="text-white font-semibold">North America</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Best Month</span>
                    <span className="text-white font-semibold">June</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
