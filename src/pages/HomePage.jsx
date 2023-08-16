import React from "react";
import Header from "../react_component/_header";
import Footer from "../react_component/_footer";
import ListProductComponent from "../react_component/_listProductComponent";

function HomePage(props) {
  const { data } = props;
  return (
    <div>
      <div className="container">
        <Header />
        <div className="div-img1">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <ListProductComponent data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
