import React from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ChannelManager = () => {
  const router = useRouter();
  const { propertyId } = router.query;
  console.log(propertyId);

  //   const token = localStorage.getItem("token");
  //   console.log(token);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (localStorage.getItem("token") && propertyId !== undefined) {
    }
    console.log(token);
  }, [router]);
  return (
    <>
      <Navbar />
    </>
  );
};

export default ChannelManager;
