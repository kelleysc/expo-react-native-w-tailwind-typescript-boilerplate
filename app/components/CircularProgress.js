// CircularProgress.js
import React from 'react';
import { View } from 'react-native';
import { Svg, G, Circle, Text } from 'react-native-svg';
import * as d3 from 'd3';

const CircularProgress = ({
  size = 200,
  strokeWidth = 20,
  percentage = 23.1
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const arcLength = (percentage / 100) * circumference;

  // Colors for the segments
  const gradient = ['#4ade80', '#a855f7', '#fb923c']; // Green to Purple to Orange

  // D3 scale to map percentage values to arc lengths
  const arcScale = d3.scaleLinear().domain([0, 100]).range([0, arcLength]);

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
        {/* Background circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Foreground arcs */}
        {gradient.map((color, index) => (
          <Circle
            key={index}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${arcScale(percentage)} ${circumference}`}
            strokeDashoffset={index * arcLength}
          />
        ))}
      </G>
      <Text
        x={size / 2}
        y={size / 2 + strokeWidth}
        fill="#fff"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {`${percentage}%`}
      </Text>
    </Svg>
  );
};

export default CircularProgress;
