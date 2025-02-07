import React, { useContext, useEffect } from "react"
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import { ExpenseContext } from "./ExpenseContext"
import "./css/CategoryPieChart.css"

const categoryColors = {
  Alimentation: "#ff5234",
  Logement: "#4CAF50",
  Transport: "#2196F3",
  Divertissement: "#ff3be5",
  Santé: "#ff933b",
  Éducation: "#2927b0",
  Autre: "#607D8B",
}

const CategoryPieChart = () => {
  const { state, dispatch } = useContext(ExpenseContext)

  useEffect(() => {
    dispatch({ type: "UPDATE_CATEGORY_TOTAL" })
  }, [state.expenses, dispatch])

  const categoryData = Object.keys(state.categoryTotal).map((category) => ({
    name: category,
    value: state.categoryTotal[category],
    color: categoryColors[category] || "#999999",
  }))

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p
            style={{
              margin: 0,
            }}>{`${payload[0].name}: ${payload[0].value}€`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="chart-container">
      <h3>Dépenses par catégorie</h3>
      <PieChart width={500} height={350}>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          paddingAngle={5}
          label={(entry) => `${entry.name}: ${entry.value} €`}>
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  )
}

export default CategoryPieChart
