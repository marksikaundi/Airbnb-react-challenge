import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Header />
      <Banner />

      <main>
        <section>
        <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  )
}
