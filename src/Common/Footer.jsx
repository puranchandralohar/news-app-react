import React, { useEffect, useState } from "react";
import "./Footer.css";

export function Footer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const runningTime = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(runningTime);
    };
  });

  return (
    <>
    <footer>
      <div className="footer_row">
        <div className="footer_left">
          <p class="footer_links">
            <a href="/">Home</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>         
          </p>
        </div>
        <div className="footer_right">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>
          <a href="#"><i class="fa fa-slack"></i></a>
        </div>
      </div>
    </footer>
     <div className="footer_bottom">
     <p>
       Made with{" "}
       <span className="heart">
         <i className="fa-solid fa-heart"></i>
       </span>{" "}
       by Puran Chandra | {date.toLocaleString()}
     </p>
   </div>
   </>
  );
}
