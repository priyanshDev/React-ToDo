import React from 'react'



const Footer = () => {
  let footerStyle = {
      position: "absolute",
      top: "100vh",
      width: "100%",
      border: "2px solid #FF0063",
  }
  
  return (
    <div className= "bg-dark text-light py-2" style ={footerStyle}>
      <p className ="text-center">
        Copyright &copy; MyTodosList.com
      </p>
      
    </div>
  )
}

export default Footer
