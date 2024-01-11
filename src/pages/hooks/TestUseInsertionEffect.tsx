import {  useEffect, useLayoutEffect, useInsertionEffect } from "react";

const Index = ()=>{
  useEffect(() => console.log("useEffect"), []);

  useLayoutEffect(() => console.log("useLayoutEffect"), []);


  useInsertionEffect(()=>{
    console.log("useInsertionEffect")
    const style = document.createElement('style')
    style.innerHTML = `
    .css-in-js{
      color: blue;
    }
    `;
    document.head.appendChild(style);
  })

  return (
    <>
      <div className="css-in-js">Let's learn hooks together</div>
    </>
  )
}

export default Index;