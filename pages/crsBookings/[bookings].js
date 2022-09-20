import React from "react";
import NavBar from "../../components/Navbar";
import moment from "moment";
import "antd/dist/antd.css";
import axios from "axios";
import {
  BsFillArrowLeftCircleFill,
  BsFillCaretDownFill,
  BsGlobe,
} from "react-icons/bs";
import { FaShoePrints } from "react-icons/fa";
import { DatePicker } from "antd";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const Bookings = () => {
  const router = useRouter();
  const { bookings } = router.query;
    console.log(bookings);
  // const [token, setToken] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [bookingData, setBookingData] = useState([]);

  const getBookings = async (token) => {
    const res = await axios.get(
      `https://api.bookonelocal.in/api-bookone/api/booking/getCurrentAndFutureBookings/${bookings}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          APP_ID: "BOOKONE_WEB_APP",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const { data } = await res;
    // console.log(data);
    setBookingData(data);
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // console.log(token)
    let bookingPageToken = localStorage.getItem("token");
    if (bookingPageToken && bookings !== undefined) {
      // if (bookings !== undefined) {
      getBookings(bookingPageToken);
      // }
    }
  }, [router]);
  //   console.log(bookingData);
  const back = (e) => {
    
    const token = localStorage.getItem("token");
    e.preventDefault()
    if (token) {
      localStorage.setItem("token", token);
      router.push(`/crs/${bookings}`);
      // router.push(`/csr/${bookings}`)
    }
  }

  return (
    <>
      <NavBar />
      <div
        className="relative"
        style={{ backgroundColor: "#eaf5ff", height: "100vh" }}
      >
        <div
          className="flex flex-column items-center justify-between p-6 h-60 absolute top-0 right-0 left-0"
          style={{ backgroundColor: "#7b75a3" }}
        >
          <div className="flex" style={{ width: "100%" }}>
            <div className="flex gap-2 items-center ml-4 w-[50%]">
              <div>
                {/* <Link href={`/csr/${bookings}`}> */}
                <BsFillArrowLeftCircleFill onClick={back} size={26} />
                {/* </Link> */}
              </div>
              <div>
                <h2 className="mt-2.5">Booking Management</h2>
              </div>
            </div>
            <div className="flex w-[50%]">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative w-full">
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mr-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </span>
                  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
              </div>
            </div>
          </div>
          <div className="mt-8" style={{ width: "100%" }}>
            <div className="p-4 bg-white rounded">
              <div className="flex justify-end">
                <button
                  className="py-1 px-5 text-white rounded shadow-md"
                  style={{ backgroundColor: "#1D174D" }}
                >
                  Reset
                </button>
              </div>
              <div className="flex items-center justify-between my-4">
                <div className="flex border items-center justify-between p-2 rounded shadow-sm w-96 mx-2">
                  <button className="mr-2">Filter by Room Type</button>
                  <BsFillCaretDownFill size={15} className="font-bold" />
                </div>
                <div className="flex border items-center justify-between p-2 rounded shadow-sm w-96 mx-2">
                  <button className="mr-2">Filter by Booking Status</button>
                  <BsFillCaretDownFill size={15} className="font-bold" />
                </div>
                <div className="flex border items-center justify-between p-2 rounded shadow-sm w-96 mx-2">
                  <button className="mr-2">Filter by Booking Source</button>
                  <BsFillCaretDownFill size={15} className="font-bold" />
                </div>
                <DatePicker
                  className="h-10 w-96 mx-2"
                  size="small"
                  placeholder="Booking Date"
                  onChange={(value) => {
                    const bookDate = moment(value).format("YYYY-MM-DD");
                    setBookingDate(bookingDate);
                  }}
                />
                <DatePicker
                  className="h-10 w-96 mx-2"
                  size="small"
                  placeholder="Arrival Date"
                  onChange={(value) => {
                    const arrDate = moment(value).format("YYYY-MM-DD");
                    setArrivalDate(arrivalDate);
                  }}
                />
                <DatePicker
                  className="h-10 w-96 mx-2"
                  size="small"
                  placeholder="Booking Date"
                  onChange={(value) => {
                    const depDate = moment(value).format("YYYY-MM-DD");
                    setDepartureDate(departureDate);
                  }}
                />
              </div>
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr
                      className="text-white"
                      style={{ backgroundColor: "#4a3882" }}
                    >
                      <th scope="col" className="py-3 px-6">
                        Reservation Id
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        From Date
                      </th>
                      <th scope="col" className="py-3 px-6">
                        TO Date
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Arrival
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Departure
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Room Type
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Room No
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Source
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Status
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Payable Amount
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingData?.map((val, i) => {
                      return (
                        <tr
                          key={i}
                          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                          <td className="py-4 px-6 text-black font-semibold">
                            {val.propertyReservationNumber}
                          </td>
                          <td className="py-4 px-6 font-bold">
                            {`${val.firstName}`.charAt(0).toUpperCase() +
                              `${val.firstName}`.slice(1)}{" "}
                            {`${val.lastName}`.charAt(0).toUpperCase() +
                              `${val.lastName}`.slice(1)}
                          </td>
                          <td className="py-4 px-6">
                            {new Date(val.fromDate).toDateString()}
                          </td>
                          <td className="py-4 px-6">
                            {new Date(val.toDate).toDateString()}
                          </td>
                          <td className="py-4 px-6">
                            {new Date(val.fromDate)
                              .toLocaleString("en-GB")
                              .split(",")
                              .splice(0, 1)
                              .join("")
                              .split("/")
                              .join("-")}
                          </td>
                          <td className="py-4 px-6">
                            {new Date(val.toDate)
                              .toLocaleString("en-GB")
                              .split(",")
                              .splice(0, 1)
                              .join("")
                              .split("/")
                              .join("-")}
                          </td>
                          <td className="py-4 px-6">{val.roomName}</td>
                          <td className="py-4 px-6">
                            {val.roomNumbers === null
                              ? "null"
                              : val.roomNumbers}
                          </td>

                          {val.externalSite == "Walkin" ? (
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-evenly px-1 py-1 bg-green-400 text-white font-semibold rounded">
                                <FaShoePrints />
                                <div>Walkin</div>
                              </div>
                            </td>
                          ) : val.externalSite == "Website" ? (
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-evenly px-1 py-1 bg-blue-400 text-white font-semibold rounded">
                                <BsGlobe />
                                <div>Website</div>
                              </div>
                            </td>
                          ) : val.externalSite === null ? (
                            <td className="py-4 px-6">No-Source</td>
                          ) : (
                            ""
                          )}
                          <td className="py-4 px-6">{val.bookingStatus}</td>
                          <td className="py-4 px-6">{val.payableAmount}</td>
                          <td className="py-4 px-6">
                            {val.notes == null ? "No Notes" : val.notes}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
