import React, { useState } from "react";
import "../home/home.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.jpg";

const Container = () => {
    const [count, setcount] = useState(0);
  const data = [
    { img: img1, text: "Happy Birthday Sanchari. Wish you a very happy birthday. Obossoi Success pa, etai chauar iswar er theke." },
    { img: img2, text: "Aladai lagche bl" },
    { img: img3, text: "Ei hasi ta mukhe rakhis. Jotoi kharap time thakuk tui thiki parbi sb periye beriye aste. Chesta krbo jotota tor sathe thakar." },
    { img: img4, text: "Ultra ta kintu kinte hbe bujhli...." },
    { img: img5, text: "Eta na khujte giye fot kre plm , tbe valo lagche :)" },
  ];

  return (
    <section className="container">
      <p className="heading">Looking back to your days</p>

      <div className="carosol">
        <div className="controller">
          <button className="icon-btn" onClick={(e)=>{if(count!==0){setcount(count-1)}else{setcount(0)}}} disabled={count===0}>
          <i className="fa-solid fa-caret-left"></i>
          </button>
          <img className="profile" src={data[count].img} alt="Loading ...." />
          <button className="icon-btn" onClick={(e)=>{if(count!==4){setcount(count+1)}else{setcount(4)}}} disabled={count===4}><i class="fa-solid fa-caret-right"></i></button>
        </div>
        <p className="sub-text">{data[count].text}</p>
      </div>
    </section>
  );
};

export default Container;
