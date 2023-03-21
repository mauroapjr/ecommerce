import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
      <div className="col-md-6">
        <Skeleton height={400}/>
      </div>
      <div className="col-md-6" style={{lineHeight:2}}>
        <Skeleton height={50} width={300}/>
        <Skeleton height={75}/>
        <Skeleton height={25} width={150}/>
        <Skeleton height={50}/>
        <Skeleton height={150}/>
        <Skeleton height={50} width={100}/>
        <Skeleton height={50} width={100} style={{marginLeft:6}}/>
      </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>
          <h1 className="display-5 ">
            {product.title}
          </h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
          </p>
          <h3 className="display-6 fw-bold my-4">
            $ {product.price}
          </h3>
          <p className="lead">{product.description}</p>
          <Link to="/my_cart" className="btn btn-outline-dark px-4 py-2">Add to Cart</Link>
          <Link to="/my_cart" className="btn btn-dark px-4 py-2 ms-2">My Cart</Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
}
