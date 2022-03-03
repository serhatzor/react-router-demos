import React, { Suspense } from "react";
import AppRouter from "./AppRouter";

import "./App.css";

export default function App() {
  return (
    <Suspense fallback={<div>Loading App</div>}>
      <AppRouter></AppRouter>
    </Suspense>
  );
}
