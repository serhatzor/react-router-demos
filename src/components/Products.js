import React from "react";
import { Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
import products from "../data/products";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  let typeQueryString = "";
  if (type) {
    typeQueryString = "?type=" + type;
  }
  const location = useLocation();

  let from = "AnyWhere";
  if (location && location.state && location.state.from) {
    from = location.state.from;
  }

  return (
    <div>
      Products Component From : {from}
      <ul>
        {products.map((product, index) => {
          if (type === "bestsellers" && !product.isInBestSellers) {
            return null;
          }
          return (
            <>
              <li>
                {product.isInBestSellers ? "Best" : ""} {product.name}{" "}
                <Link key={product.id} to={`${product.id}${typeQueryString}`}>
                  Go
                </Link>
              </li>
            </>
          );
        })}
      </ul>
      {type !== "bestsellers" ? (
        <button onClick={() => setSearchParams({ type: "bestsellers" })}>
          Show Best Sellers
        </button>
      ) : (
        <button onClick={() => setSearchParams({})}>Show All Products</button>
      )}
      <div className="desc-container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
