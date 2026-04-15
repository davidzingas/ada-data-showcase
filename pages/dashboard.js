import Head from 'next/head'
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
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
    },
    {
      label: 'Users',
      data: [400, 600, 800, 700, 900, 1100],
      backgroundColor: 'rgba(16, 185, 129, 0.6)',
    },
  ],
}

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Ada Data Showcase</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Revenue & Users</h2>
            <Bar data={sampleData} />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Total Revenue (YTD): $14,600</li>
              <li>Total Users (YTD): 4,500</li>
              <li>Top Region: North America</li>
              <li>Best Month: June</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
