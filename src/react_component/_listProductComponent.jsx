import React from "react";
import { NavLink } from "react-router-dom";

function ListProductComponent({ data }) {
  return (
    <main className="main-home">
      {data.map((housing) => (
        <article key={housing.id}>
          <NavLink to={`/housing/${housing.id}`}>
            <h4>{housing.title}</h4>
            <img src={housing.cover} alt={housing.title} className="darken" />
          </NavLink>
        </article>
      ))}
    </main>
  );
}

export default ListProductComponent;
