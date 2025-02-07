import { useContext } from "react"
import { ExpenseContext } from "./ExpenseContext"
import "./css/ExpenseList.css"
import { TrashCan } from "./icons/TrashCan"

const ExpenseList = () => {
  const { state, dispatch } = useContext(ExpenseContext)

  const total = state.expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const categoryTotal = state.expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount
    return acc
  }, {})

  const categoryColors = {
    Alimentation: "#ff5234",
    Logement: "#4CAF50",
    Transport: "#2196F3",
    Divertissement: "#ff3be5",
    Santé: "#ff933b",
    Éducation: "#2927b0",
    Autre: "#607D8B",
  }

  return (
    <div className="expenses-summary">
      <h3>Total des dépenses : {total} €</h3>
      <div>
        {Object.keys(categoryTotal).map((category) => (
          <div key={category}>
            <span
              className="tag"
              style={{
                backgroundColor: categoryColors[category] || "#607D8B",
              }}>
              {category}
            </span>
            : {categoryTotal[category]} €
          </div>
        ))}
      </div>
      <ul className="expense-list">
        {state.expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            {expense.label} - {expense.amount}€
            <div>
              <span
                className="tag"
                style={{
                  backgroundColor:
                    categoryColors[expense.category] || "#607D8B",
                }}>
                {expense.category}
              </span>
            </div>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_EXPENSE", payload: expense.id })
              }
              className="remove-button">
              <TrashCan />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
