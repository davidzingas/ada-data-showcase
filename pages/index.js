import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ada Data Showcase</title>
      </Head>
      <main style={{fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', padding: 32}}>
        <h1 style={{fontSize: 36, marginBottom: 8}}>Ada Data Showcase</h1>
        <p style={{fontSize: 16, color: '#333'}}>Sample site for ADA-54: showcase analytics and charts.</p>
        <section style={{marginTop: 24}}>
          <h2 style={{fontSize: 20}}>Highlights</h2>
          <ul>
            <li>Interactive charts</li>
            <li>Data explorer</li>
            <li>Downloadable CSVs</li>
          </ul>
        </section>
      </main>
    </>
  )
}
