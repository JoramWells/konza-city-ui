import React from "react";
import { ResponsiveContainer, PolarGrid, PolarAngleAxis,Radar,RadarChart,PolarRadiusAxis,Legend } from "recharts";
import Title from "./Title";


const data = [
    {
      "subject": "Ambulances",
      "A": 120,
      "B": 110,
      "fullMark": 150
    },
    {
      "subject": "Police Cars",
      "A": 98,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "Fire fighter",
      "A": 86,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "Matatus",
      "A": 99,
      "B": 100,
      "fullMark": 150
    },
    {
      "subject": "Private",
      "A": 85,
      "B": 90,
      "fullMark": 150
    },
    {
      "subject": "Escort",
      "A": 65,
      "B": 85,
      "fullMark": 150
    }
  ]
  


export default function Chart2() {

  return (
    <React.Fragment>
      <Title>
        {" "}
        <span style={{ color: "#ff8080" }}>
          {" "}
          <b>Current traffic</b>{" "}
        </span>{" "}
      </Title>
      <ResponsiveContainer>
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
