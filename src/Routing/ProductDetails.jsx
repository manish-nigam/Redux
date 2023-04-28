import { useEffect } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActionCreator } from "../Redux/ActionCreator";

function Products(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((storedata) => {
    return storedata;
  });

  useEffect(() => {
    if (products.length === 0) {
      console.log("Sent Request");
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(productActionCreator(data));
        });
    }
  }, []);
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "red" }}>Products Component</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        suscipit illo alias ad, esse impedit, consequuntur qui iste dolorem
        ullam cumque minima laudantium temporibus voluptate provident nihil?
        Ratione odit inventore excepturi vitae, in officiis animi non dicta
        assumenda ut adipisci quidem, voluptatum alias iusto rem nemo beatae
        soluta. Enim facere harum quibusdam doloremque nostrum repellendus
        dicta, repudiandae, quisquam, nobis nam magni dolorem quos quis fugiat
        quam atque illum architecto quidem! Nobis architecto quas veniam, maxime
      </p>
      {products.length > 0 ? (
        <div className="container">
          {products.map((product) => {
            return (
              <div className="cardStyle">
                <img src={product.image} width="200" height="200"  alt=""/>
                <h3>{product.title}</h3>
                <p>$ {product.price} </p>
                <Link to={`/productdetails/${product.id}`}>
                  <button>Product Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
          No Product to Display
        </h2>
      )}
    </div>
  );
}

export default Products;
