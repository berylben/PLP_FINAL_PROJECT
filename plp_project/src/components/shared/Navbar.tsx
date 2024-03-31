import React from "react";
import { navLinks } from "../../data/data";

export default function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg bg-info">
    //   <div className="container-fluid">
    //     <a className="navbar-brand text-dark" href="/">
    //       Villa
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className=""></span>
    //     </button>
    //     <div className="" id="navbarNav">
    //       <ul className="">
    //         <li className="">
    //           <a className="" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className="" href="/">
    //             About Us
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className="" href="/">
    //             Management
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className="" href="/">
    //             Programmes
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className="" href="/">
    //             Contact Us
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className=" " href="/">
    //             Login
    //           </a>
    //         </li>
    //         <li className="">
    //           <a className=" " href="/">
    //             Sign Up
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="flex justify-between items-center p-5 sticky top-0 shadow-md">
      <div>logo</div>
      <div className="flex gap-4">
        {navLinks.map((navLink) => (
          <div key={navLink.id}>
            <ul>
              <a href={navLink.url}>
                <li>{navLink.value}</li>
              </a>
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
