import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  // console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    // =======================================
    <h2 className="section-title">sorry, no drinks with this name</h2>;
  }

  return (
    <section className="section ">
      <h2 className="section-title">drinks</h2>
      <div className="drinks-section">
        {cocktails.map((drink) => {
          return <Cocktail key={drink.id} {...drink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
