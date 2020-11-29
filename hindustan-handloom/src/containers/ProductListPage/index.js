import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";
import { generatePublicUrl } from "../../urlConfig";
import "./style.css";

/**
 * @author
 * @function ProductListPage
 **/
const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000

  });
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(props);
    const { match } = props;

    dispatch(getProductsBySlug(match.params.slug));
  }, [dispatch, props]);

  return (
    <Layout>
      {Object.keys(product.productsByPrice).map((key, index)  => {
        return (
          <div className="card">
            <div className="cardHeader">
        <div> { props.match.params.slug } under { priceRange[key] } </div>
              <button> view all </button>
            </div>
            <div style={{ display:"flex" }}>
              {product.productsByPrice[key].map((product,  key={index}) => (
                <div className="productContainer" key={index}>
                  <div className="productImgContainer">
                    <img
                      src={ generatePublicUrl(product.productPictures[0].img) }
                      alt="images"
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}> { product.name} </div>
                    <div>
                      <span> 4.3 </span> &nbsp;
                      <span> 4333 </span>
                    </div>
              <div className="productPrice"> {product.price} </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default ProductListPage;
