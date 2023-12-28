import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/about.css'
import '../styles/services.css'
import '../styles/news.css'
import '../styles/career.css'
import '../styles/client.css'
import '../styles/footer.css'
import '../styles/contact.css'
import Head from 'next/head';


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        /* Define styles for your fonts here */
        body {
          font-family: 'Manrope', sans-serif;
          font-family: 'Poppins', sans-serif;
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </>
  );
};

export default MyApp;
