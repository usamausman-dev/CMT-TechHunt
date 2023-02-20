import React from 'react'
import { XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';

const monthlyGraph = () => {
  const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 100, pv: 2800, amt: 2800 },
    { name: 'Mar', uv: 600, pv: 2900, amt: 2900 },
    { name: 'April', uv: 200, pv: 2900, amt: 2900 },
    { name: 'May', uv: 700, pv: 2900, amt: 2900 },
    { name: 'Jun', uv: 350, pv: 2900, amt: 2900 },
    { name: 'Jul', uv: 650, pv: 2900, amt: 2900 },
    { name: 'Aug', uv: 800, pv: 2900, amt: 2900 },
    { name: 'Sep', uv: 100, pv: 2900, amt: 2900 },
    { name: 'Oct', uv: 200, pv: 2900, amt: 2900 },
    { name: 'Nov', uv: 400, pv: 2900, amt: 2900 },
    { name: 'Dec', uv: 300, pv: 2900, amt: 2900 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart width={200} height={400} data={data} syncId="anyId" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#95cc9a" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default monthlyGraph
