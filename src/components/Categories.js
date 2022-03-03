import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CategoryDesc from "./CategoryDesc";
import categories from "../data/categories";

export default function Categories() {
  return (
    <div>
      Categories Component
      <ul>
        {categories.map((category) => {
          return (
            <li>
              <Link to={`${category.id}`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="desc-container">
        <Routes>
          <Route
            path=":categoryId"
            element={<CategoryDesc></CategoryDesc>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
