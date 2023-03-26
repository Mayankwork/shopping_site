import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { additem } from "../utils/appSlice";
import { useSelector } from "react-redux";
const SingleProduct = ({ name, description, image, price,id }) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.app.cart);
  const handleButtonClick = (event) => {
    event.stopPropagation();
    let data = [...cart];
    data.push(id);
    dispatch(additem(data));
  }



  return (
    <Card className="shadow m-2" style={{ width: "14rem", height: "15rem" }}>
      <div
        className="d-flex justify-content-center align-content-center"
        style={{ width: "14rem" }}
      ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/productview?id=${id}`}>
        <Card.Img
          style={{ width: "6rem", height: "8rem", padding: "4px" }}
          variant="top"
          src={image}
        /></Link>
      </div>
      <Card.Body>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/productview?id=${id}`}>
        <Card.Title style={{ height: "2.5rem" }} className="h6 text-center">
          {name.slice(0, 40)}
          {name.length > 40 ? "..." : ""}
        </Card.Title>
        </Link>

     
        <Card.Text>
          <div className="row">
            <div className="col-7 pt-1 small">Price: ${price} </div>
            <span className="col-5 float-end">
              {cart.includes(id)? <Button variant="success" size="sm" onClick={handleButtonClick}>
                Added
              </Button>: <Button variant="primary" size="sm" onClick={handleButtonClick}>
                Add +
              </Button>}
              {/* <Button variant="primary" size="sm" onClick={handleButtonClick}>
                Add +
              </Button> */}
            </span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
