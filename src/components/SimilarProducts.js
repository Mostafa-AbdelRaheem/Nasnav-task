import React, { Component, Suspense } from "react";
import ProductCardSuspense from "./ProductCardSuspense";

const ProductCard = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2 * 1000)).then(() =>
    import("./ProductCard").catch((err) => {
      console.log(err);
    })
  );
});

class SimilarProducts extends Component {
  render() {
    return (
      <div className="similarMainProductsContainer">
        <h2 className="similarProductsHeader">Similar Products</h2>
        <p>You may like these products also</p>
        {this.props.products && (
          <div className="similarProductsContainer">
            {ProductCard &&
              this.props.products
                .filter((product) => product.id !== 1)
                .map((product, index) => (
                  <Suspense key={index} fallback={<ProductCardSuspense />}>
                    <ProductCard key={index} product={product} />
                  </Suspense>
                ))}
          </div>
        )}
      </div>
    );
  }
}

export default SimilarProducts;
