import React, { useState } from "react";

export default function Sports() {

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    const [count3,setCount3] = useState(0);
    const [count4,setCount4] = useState(0);

  return (
    <>
      <div className="container my-5 d-flex">
        <div className="card mx-auto" style = {{'width': '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Cricket</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="btn-group " role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary" onClick={()=>setCount1(count1-1)}>
                -
              </button>
             <p className="m-2">{count1}</p>
              <button type="button" className="btn btn-primary" onClick={()=>setCount1(count1+1)}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card mx-auto" style = {{'width': '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Football</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="btn-group " role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary" onClick={()=>setCount2(count2-1)}>
                -
              </button>
             <p className="m-2">{count2}</p>
              <button type="button" className="btn btn-primary" onClick={()=>setCount2(count2+1)}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card mx-auto" style = {{'width': '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Lawn Tennis</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="btn-group " role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary" onClick={()=>setCount3(count3-1)}>
                -
              </button>
             <p className="m-2">{count3}</p>
              <button type="button" className="btn btn-primary" onClick={()=>setCount3(count3+1)}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card mx-auto" style = {{'width': '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Snooker</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="btn-group " role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary" onClick={()=>setCount4(count4-1)}>
                -
              </button>
             <p className="m-2">{count4}</p>
              <button type="button" className="btn btn-primary" onClick={()=>setCount4(count4+1)}>
                +
              </button>
            </div>
          </div>
        </div>
        
        
      </div>
      <div className="container">
        <button className="btn btn-primary text-white mx-auto">Add To Cart</button>
      </div>

    </>
  );
}
