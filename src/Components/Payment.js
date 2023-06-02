import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import UpcomingPayment from './UpcomingPayment';
import Overdue from './Overdue';
import PaymentHistory from './PaymentHistory';

export default function Payment() {

    const[state, setState] = useState("")

    // useEffect(()=>{
    //     setState("PreRecorded");
    // })

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
        <Header />
         <div className='' style={{ marginBottom:"100px" }}>
          <div classNameName='p-0' style={{ width:"100%", marginTop:"80px" }} >
            <div className='row'>
                <div className='col-md-12 P-0'>
                   <div className='row px-2' style={{ backgroundColor:"#fff" }}>
                     <div className='col-4'>
                        <div className='py-3' onClick={()=> setState("UpcomingPayment")} style={{ borderBottom:state=="UpcomingPayment"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                            <span style={{ color:state=="UpcomingPayment"?"#ED7A2B":"#545454", fontSize:16, fontWeight:500 }} >Upcoming</span>
                        </div>
                     </div>
                     <div className='col-4'>
                        <div className='py-3' onClick={()=> setState("Overdue")} style={{ borderBottom:state=="Overdue"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span style={{ color:state=="Overdue"?"#ED7A2B":"#545454", fontSize:16, fontWeight:500 }} >Overdue</span>
                        </div>
                     </div>
                     <div className='col-4'>
                        <div className='py-3' onClick={()=> setState("PaymentHistory")} style={{ borderBottom:state=="PaymentHistory"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span style={{ color:state=="PaymentHistory"?"#ED7A2B":"#545454", fontSize:16, fontWeight:500 }} >History</span>
                        </div>
                     </div>
                   </div> 
                   <div className=''>
                     { state === "UpcomingPayment" ? <> <UpcomingPayment /> </> : <></> }
                     { state === "Overdue" ? <> <Overdue /> </> : <></> }
                     { state === "PaymentHistory" ? <> <PaymentHistory /> </> : <></> }
                   </div>
                </div>
            </div> 
           </div>
         </div>
        <Footer />
      </div>
    </div>
  )
}
