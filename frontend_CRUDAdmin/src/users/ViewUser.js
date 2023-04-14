import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [product, setUser] = useState({
    productName: "",
    price: "",
    image: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8384/api/v1/products/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {product.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>FisrtName:</b>
                  {product.productName}
                </li>
                <li className="list-group-item">
                  <b>LastName:</b>
                  {product.price}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {product.image}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
