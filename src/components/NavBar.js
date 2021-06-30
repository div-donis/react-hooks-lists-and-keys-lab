import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linkElements = links.map((links) => {
    const tag = `#`;
    return <a href = {tag + links} key ={links}>{links}</a>
  })
  return <nav>{
    [linkElements]
    }</nav>;
}

export default NavBar;
