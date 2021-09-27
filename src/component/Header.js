import { useState } from "react";
import arrow from '../images/icon-arrow-down.svg';
export default function Header(){
    const [active,setActive] = useState(false);
    const [activeList,setActiveList] = useState();
    const list = ["About","Services","Projects","Contact"]
    return(
        <header>
        <div className="nav-bar">
          <b>sunnyside</b>
          <div onClick={()=>setActive(!active)} className="btn">
            <div className={`${active?"active":""} hamburger-btn`}></div>
          </div>
          <div className={`${active?"active-nav":"hide"} nav-container`}>
            <ul>
                {
                    list.map((val,key)=>{
                        return(
                            <li onClick={()=>setActiveList(key)} key={key} className={`${activeList==key?"active-li":""} ${active?"":"hide"}`}>{val}</li>
                        );
                    })
                }
            </ul>
          </div>
        </div>
        <h1>we are creatives</h1>
        <img src={arrow} aly="arrow"/>
      </header>
    );
}