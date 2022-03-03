import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CustomLink from "./customcontrols/CustomLink";

const HomePage = React.lazy(() => import("./components/HomePage"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));
const Products = React.lazy(() => import("./components/Products"));
const ProductDesc = React.lazy(() => import("./components/ProductDesc"));
const Categories = React.lazy(() => import("./components/Categories"));
const UserDetail = React.lazy(() => import("./components/UserDetail"));
const Register = React.lazy(() => import("./components/Register"));
const Footer = React.lazy(() => import("./components/Footer"));
const Settings = React.lazy(() => import("./components/Settings"));
const RequireAuth = React.lazy(() => import("./components/RequireAuth"));

export default function AppRouter() {
  const [isLogged, setIsLogged] = useState(false);
  const userName = "serhatzor";
  return (
    <BrowserRouter>
      <main className="header">
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/products",
                search: "?type=bestsellers",
              }}
              state={{ from: "navigationBar" }}
            >
              Best Sellers
            </Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <CustomLink to="/register">Register</CustomLink>
          </li>
          <li>
            <CustomLink to="/user-detail">User Detail</CustomLink>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/ssdfsdfsdf">UnKnown Place</Link>
          </li>
        </ul>
      </main>
      <div className="body">
        <Suspense fallback={<>Loading</>}>
          <Routes>
            <Route
              path="*"
              element={<NotFound section="General"></NotFound>}
            ></Route>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
            <Route path="/products" element={<Products></Products>}>
              <Route
                path=":productId"
                element={<ProductDesc></ProductDesc>}
              ></Route>
            </Route>
            <Route
              path="/categories/*"
              element={<Categories></Categories>}
            ></Route>
            <Route
              path="/user-detail"
              element={
                <UserDetail
                  isLogged={isLogged}
                  userName={userName}
                ></UserDetail>
              }
            ></Route>
            <Route
              path="/register"
              element={<Register isLogged={isLogged}></Register>}
            ></Route>
            <Route
              path="/settings"
              element={
                <RequireAuth isLogged={isLogged}>
                  <Settings></Settings>
                </RequireAuth>
              }
            ></Route>
          </Routes>
        </Suspense>
      </div>

      <Footer></Footer>
      <Routes>
        <Route
          path="/products/*"
          element={
            <h3>
              <br />
              This page shows you our products
            </h3>
          }
        ></Route>
      </Routes>
      {isLogged ? (
        <button
          onClick={() => {
            setIsLogged(false);
          }}
        >
          Set As Logged Out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLogged(true);
          }}
        >
          Set As Logged In
        </button>
      )}
    </BrowserRouter>
  );
}
