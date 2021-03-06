import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CircleD3 = () => {
  const ref = useRef()

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append("circle")
      .attr("cx", 150)
      .attr("cy", 70)
      .attr("r",  50)
  }, [])

  return (
    <svg
      ref={ref}
    />
  )
}

export default CircleD3;
