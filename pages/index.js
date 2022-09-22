import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Login from "./login";

const Home = () => {
  return (
    <div>
      <Head>
        <title>MMT Channel Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
};

export default Home;
