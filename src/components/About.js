import React from "react";
import Links from "./Links"

function About(props) {
  console.log(props)
  if (props.bio !== undefined && props.bio !== '') {
    return (
<div id="about">
   <h2>About Me</h2>
   <p>{props.bio}</p>
   <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
   <Links github={props.github} linkedin={props.linkedin}/>
  </div>
    )
  } else if (props.bio === undefined || props.bio === '') {
return (
  <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.github} linkedin={props.linkedin}/>
      </div>
)
  }

// {if (props.bio !== undefined && props.bio !== '')}
// return (
//    ((props.bio !== undefined && props.bio !== '') ?
//   (
//    <div id="about">
//      <h2>About Me</h2>
//      <p>{props.bio}</p>
//      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//      {props.Links};

//    </div>
//  ) : (props.bio === undefined || props.bio === '') ?
//     (
//      <div id="about">
//        <h2>About Me</h2>
//        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//        {props.Links};
//      </div>
//    ))

// )

};

export default About;
