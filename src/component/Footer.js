import fb from '../images/icon-facebook.svg';
import insta from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import { useState } from 'react';
export default function Footer(){
    const [hover,setHover] = useState();
    const social = [fb,insta,twitter,pinterest];
    return(
    <footer>
         
          <div>
            <h1>sunnyside</h1>
            <ul>
                <li>about</li>
                <li>services</li>
                <li>projects</li>
            </ul>
          </div>
          
          <nav>
              {
                  social.map((app,key)=>{
                      return(
                        <a key={key}>
                            <img src={app} alt="social media"/>
                        </a>
                      );
                     
                  })
              }
          </nav>
      </footer>
        
    );
}