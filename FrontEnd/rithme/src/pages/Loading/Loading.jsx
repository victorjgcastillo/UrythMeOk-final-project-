import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import "./Loading.scss";


export default function Loading() {
  return (
    <>
      <Link to="/">
      <div className="loading">
        <Header/>
      </div>
      </Link>
    </>
  );
}