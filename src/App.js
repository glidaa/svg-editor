import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class TowDAnmation extends Component {
	componentDidMount () {
	var list = document.getElementById("ownScript");
	if(list.childNodes.length==0){
    const script1 = document.createElement("script");
    script1.src = "./dist/polyfills.94fdce32edebba40e960.js";
    script1.async = true;

   
	const script2 = document.createElement("script");
    script2.src = "./dist/runtime.ec2944dd8b20ec099bf3.js";
    script2.async = true;

	const script3 = document.createElement("script");
    script3.src = "./dist/main.c5fee1df25bbdf1633b8.js";
    script3.async = true;
	document.getElementById("ownScript").appendChild(script1);
	document.getElementById("ownScript").appendChild(script2);
    document.getElementById("ownScript").appendChild(script3);
	}
}
componentUnMount () {
   var list = document.getElementById("ownScript");
  list.removeChild(list.childNodes[0]);
  list.removeChild(list.childNodes[1]);
  list.removeChild(list.childNodes[2]);
}
  render() {
    return (
        <div >  
		   <app-root></app-root>
		</div>
    )
  }
}
