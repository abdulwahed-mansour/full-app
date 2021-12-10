import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Frontend Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;