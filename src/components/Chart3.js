import React from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Legend,
  Tooltip,
  Scatter,
} from "recharts";
import Title from "./Title";


const data01 = [
  {
    x: "Mon",
    y: "Mon",
    z: "Tue",
  },
  {
    x: 120,
    y: 100,
    z: 260,
  },
  {
    x: 170,
    y: 300,
    z: 400,
  },
  {
    x: 140,
    y: 250,
    z: 280,
  },
  {
    x: 150,
    y: 400,
    z: 500,
  },
  {
    x: 110,
    y: 280,
    z: 200,
  },
];
const data02 = [
  {
    x: "Mon",
    y: 260,
    z: 240,
  },
  {
    x: 240,
    y: 290,
    z: 220,
  },
  {
    x: 190,
    y: 290,
    z: 250,
  },
  {
    x: 198,
    y: 250,
    z: 210,
  },
  {
    x: 180,
    y: 280,
    z: 260,
  },
  {
    x: 210,
    y: 220,
    z: 230,
  },
];

export default function Chart3() {

  return (
    <React.Fragment>
      <Title>
        {" "}
        <span style={{ color: "#ff8080" }}>
          {" "}
          <b>Recent accidents</b>{" "}
        </span>{" "}
      </Title>
      <ResponsiveContainer>
        <ScatterChart
          width={730}
          height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="stature" unit=" cycles" />
          <YAxis dataKey="y" name="weight" unit=" cars" />
          <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Major" data={data01} fill="#8884d8" />
          <Scatter name="Minor" data={data02} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
