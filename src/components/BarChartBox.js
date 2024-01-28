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

const BarChartBox = ({ selectedInterval }) => {

  const getAdjustedSales = (originalSales) => {
    switch (selectedInterval) {
      case 'Weekly':
        return originalSales * 0.5;
      case 'Daily':
        return originalSales * 0.9;
      default:
        return originalSales;
    }
  };
  
  const data = [
    { name: "Jan", sales: getAdjustedSales(5000) },
    { name: "Feb", sales: getAdjustedSales(10000) },
    { name: "Mar", sales: getAdjustedSales(20000) },
    { name: "Apr", sales: getAdjustedSales(30000) },
    { name: "May", sales: getAdjustedSales(45000) },
    { name: "Jun", sales: getAdjustedSales(32000) },
    { name: "Jul", sales: getAdjustedSales(23000) },
    { name: "Aug", sales: getAdjustedSales(33000) },
    { name: "Sep", sales: getAdjustedSales(39000)},
    { name: "Nov", sales: getAdjustedSales(37000) },
    { name: "Dec", sales: getAdjustedSales(43000) }

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