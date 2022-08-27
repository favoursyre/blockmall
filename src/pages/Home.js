import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer_ from "../components/Footer";
import "./Home.css";
import { Carousel, Card } from "antd";

const carousel = [
  "https://drive.google.com/uc?export=download&id=1XQf579_H1uH8R1xssiig1fiG2BOGXaSF",
];

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Carousel autoplay className="carousel">
          {carousel.map((e) => {
            return <img src={e} className="carousel-img" alt="carousel"></img>;
          })}
        </Carousel>
        <div className="cards">
          <Card className="card">
            <h1>Browse Books</h1>
            <img
              src="https://drive.google.com/uc?export=download&id=144BTtp5ePkEqbu1IaZBU4NgEh0E_NdyM"
              alt="Books Category"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state="Books" className="link">
              View Product
            </Link>
          </Card>
          <Card className="card">
            <h1>Browse Electronics</h1>
            <img
              src="https://drive.google.com/uc?export=download&id=1BV4a7EarJBzO5pXY7l8uxsG7kyiD4d1D"
              alt="Electronics Category"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state="Electronics" className="link">
              View Product
            </Link>
          </Card>
          <Card className="card">
            <h1>Browse Furnitures</h1>
            <img
              src="https://drive.google.com/uc?export=download&id=1P5VLUxKtkao_1S5Z6QGWHEsIJwMfbgDp"
              alt="Furnitures Category"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state="Furnitures" className="link">
              View Product
            </Link>
          </Card>
          <Card className="card">
            <h1>Browse Fashion</h1>
            <img
              src="https://drive.google.com/uc?export=download&id=1us_lGCNuoGrnyAuCeB0AinAc78rRVWvm"
              alt="Fashion Category"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state="Fashion" className="link">
              View Product
            </Link>
          </Card>
          <Card className="card">
            <h1>Browse Provisions</h1>
            <img
              src="https://drive.google.com/uc?export=download&id=1p_sb7TNPtlW1NWMDcnrZarWYRBFZJ24F"
              alt="Provisions Category"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state="Provisions" className="link">
              View Product
            </Link>
          </Card>
          <Card className="card">
            <h1>Browse Cosmetics</h1>
            <img
              src="https://drive.google.com/uc?export=download&id=1j2Mg6-nemco0WDq-bjN23PHZI3S0jJu5"
              alt="Cosmetics Category"
              className="card-content"
            ></img>
            <br />
            <Link to="/categories" state="Cosmetics" className="link">
              View Product
            </Link>
          </Card>
        </div>
      </div>
      <Footer_ />
    </>
  );
};

export default Home;
