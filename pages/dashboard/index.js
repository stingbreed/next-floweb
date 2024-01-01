import Head from 'next/head';
import NewsForm from './components/NewsForm'

function index() {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name="description" content="News App Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>News App</h1>
        <NewsForm />
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  )
}

export default index