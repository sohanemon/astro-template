
import * as React from "react";
import { Button } from "./ui/button";
export const Test = () => {
  React.useEffect(() => {
    console.warn("🚀: test.tsx:4")
  }, [])
  function handleClick() {
    alert('Clicked')
  }

  return (
    <div><Button onClick={handleClick}>Click on me</Button> </div>
  )
}

