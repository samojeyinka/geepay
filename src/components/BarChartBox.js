import React from 'react'

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const BarChartBox = () => {
  const data = [
    { name: "Jan", sales: 5000 },
    { name: "Feb", sales: 10000 },
    { name: "Mar", sales: 20000 },
    { name: "Apr", sales: 30000 },
    { name: "May", sales: 45000 },
    { name: "Jun", sales: 32000 },
    { name: "Jul", sales: 23000 },
    { name: "Aug", sales: 33000 },
    { name: "Sep", sales: 39000 },
    { name: "Oct", sales: 12000 },
    { name: "Nov", sales: 37000 },
    { name: "Dec", sales: 43000 }

  ];

  const CurrencyFormatter = (value) => '$' + value.toLocaleString();

  return (
    <>
      <BarChart
        width={750}
        height={284}
        data={data}
        margin={{
          top: 5,
          right: 40,
          left: 5,
          bottom: 5,
        }}

        barSize={28}

      >
        <XAxis
          dataKey="name"
          scale="point"
          tickLine={false}
          axisLine={false}
          padding={{ left: 30, right: 30 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}


        />

        <Tooltip contentStyle={{ background: '#000', border: 'none', paddingTop: '0px' }}
          itemStyle={{ color: '#ffffff' }}
          formatter={CurrencyFormatter}

        />


        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="sales" fill="var(--major-clr)" background={{ fill: "transparent" }} radius={[50, 50, 0, 0]} />
      </BarChart>
    </>
  )
}

export default BarChartBox