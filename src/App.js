import Header from "./components/Header";
import Layout from "./layout/Layout";

import Hero from "./components/Hero";

import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Content />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
