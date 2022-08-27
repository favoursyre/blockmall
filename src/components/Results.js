import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
import "./Results.css";
import { products } from "../products.js";
//import { Geo_api.countryName, Geo_api.countryCode } from "./Location";
import { LocationCountry } from "./Location.js";

import axios from "axios";
import React, { useState } from "react";

function Results({ category, rating, priceMin, priceMax }) {
  //console.log("Cate code", code)
  // let locate = useState(LocationCountry)
  // console.log("Locate", locate)
  // async function get_data() {
  //   const api_data = await FetchLocation()
  //   console.log("API_DATA", api_data)
  // }
  // const api_data = await FetchLocation()
  // console.log("API_DATA", api_data)
  //const Testing = Test_data()

  // get_data()
  const productCategory = products[category]
    .filter((x) => x.rating >= rating)
    .filter((x) => x.price > priceMin)
    .filter((x) => x.price <= priceMax);
  //console.log("product", productCategory);

  return (
    <>
      {productCategory.map((e, i) => {
        return (
          <Card>
            <div style={{ display: "flex" }}>
              <div className="result-image">
                <img src={e.image} alt={i} width="300px"></img>
              </div>
              <div>
                <p className="title">{e.name}</p>
                <Rate value={e.rating} disabled={true}></Rate>
                <h2> ${e.price}</h2>
                <LocationCountry />
                <Link to="/product" state={e} className="login">
                  Go to Product Page
                </Link>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default Results;
