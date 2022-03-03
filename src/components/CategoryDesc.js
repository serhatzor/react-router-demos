import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryDesc() {
  const { categoryId } = useParams();

  return <div>Category Desc Component CategoryId : {categoryId}</div>;
}
