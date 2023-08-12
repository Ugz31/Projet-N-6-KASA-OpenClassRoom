import React from "react";
import Header from "./_header";
import Footer from "./_footer";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <div className="container-notfoundpage">
        <Header />
        <div className="container404">
          <p className="error">404</p>
          <p className="mess">Oups! la page que vous avez demandé n'existe pas</p>
          <NavLink to="/" activeclassname="active">
            Retourner sur la page d'accueil
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
