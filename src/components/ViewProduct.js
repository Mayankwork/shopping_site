import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const ViewProduct = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const [product, setproduct] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      const result = await response.json();
      setproduct(result);
    } catch (err) {}
  };

  return (
    <>
      {product && (
        <div className="container">
          <Card className="shadow m-2 mx-4 px-4">
            <div
              className="d-flex  align-content-center"
            >
             
              <div>
                <Card.Title
                  style={{  width: "100%", marginTop: "4rem" }}
                  className="h2 text-center d-flex justify-content-center"
                >
                  {/* <span className="">Product Name : </span> */}
                  {product.title}
                </Card.Title>
                <div className="row">
                <div className=" col-6" >
                <Card.Text
                  style={{  width: "100%", marginTop: "1rem" }}
                  className="text-center"
                >   
                  <div>Product Description : </div>
                  {product.description}
                </Card.Text>
                <Card.Text
                  style={{ height: "2.5rem", width: "100%", marginTop: "1rem" }}
                  className="text-center"
                >
                  <div>Product Category : </div>
                  {product.category}
                </Card.Text>
                <Card.Text
                  style={{ height: "2.5rem", width: "100%", marginTop: "1rem" }}
                  className="text-center"
                >
                  <div>Product Rating : </div>
                  {product.rating.rate}
                </Card.Text>
                <Card.Text
                  style={{ height: "2.5rem", width: "100%", marginTop: "1rem" }}
                  className="text-center"
                >
                  <div>Product Price: </div>${product.price}
                </Card.Text>   </div>
                <div className="col-6" >
                <Card.Img
                style={{
                  width: "18rem",
                  height: "18rem",
                  padding: "1rem",
                  margin: "2rem",
                }}
                variant="top"
                src={product.image}
              />
                </div>
                </div>
                <Card.Text>
                 
                  <div className="row">
                    <div className="col-8 pt-1 text-lg ">
                     
                    </div>
                    <span className="col-4 float-end">
                      {" "}
                      {/* <Button variant="primary" size="lg">
                        Add +
                      </Button> */}
                    </span>
                  </div>
                </Card.Text>
              </div>
            </div>
            <Card.Body></Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default ViewProduct;
