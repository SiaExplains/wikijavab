import React from "react";

import Footer from "../src/components/Layout/footer";
import Header from "../src/components/Layout/header";

const Home = () => {
  return (
    <div>
      <Header hasLogo={false} title="WOW!" />
      This is Home
      <Footer />
    </div>
  );
};

export default Home;
