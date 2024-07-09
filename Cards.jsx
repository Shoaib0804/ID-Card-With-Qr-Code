import React from "react";
import QRCode from "react-qr-code";

const pic14= 'image/pic14.jpg'
const pic25= 'image/pic25.png'



const Cards = () => {
    const Info = {
        ID: 'ABC123470',
        NAME: 'MD. SHOAIB BADAR',
        Phone: '6202268239',
        Email: 'mdshoaibbadar@gmail.com',
        Department: 'BCA',
        expire: '25-06-2025',
    }
    return(
        <>
        <div className="container">
            <div className="card">
                <div className="image"></div>
                <div className="image25"></div>
                <img src={pic25} alt={pic25} className='pic24' />
                
            <div className="image">
                 <div className="outer">
                     <div className="inner">
                     <img src={pic14} alt={pic14} height={125} width={120}></img>
                </div>
            </div>
        </div>
        <div className="name">
            MD. SHOAIB BADAR
        </div>
        <div className="details">
             <div className="col">
                <ul type="name">
                    <li>DEPARTMENT : BCA</li>
                    <li>YEAR : 2022-25</li>
                    <li>ENROLLMENT NO.: A9140222127</li>
                    <li>CARD ID : ABC123470</li>
                    <li>CONTACT : 6202268239</li>
                </ul>
             </div>
             <QRCode className='qqrr' 
      value="Name - MD. Shoaib Badar   {ID Card No : ABC123470}  {E-mail:- mdshoaibbadar@gmail.com}  {Mobile No : 6202268239} {Deparment : BCA} {Expiry Date : 25-06-2024}"
      
      
      />
            
        </div>
    </div>
 </div>
    


        </>
    )
}

export default Cards
