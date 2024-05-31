'use client'
import React from "react";

export const Sandbox = (items:Array<string>) => {
  const iterate = (items:Array<string>) => {
    items.forEach(element => {
      console.log(element)
      return element
    });
    return iterate
  }

}
console.log(Sandbox(["flip","Flop","flip"]));

export default Sandbox;