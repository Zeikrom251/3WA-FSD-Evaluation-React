import { createContext, useEffect, useReducer } from "react"
import ExpenseReducer from "./ExpenseReducer"

const initialState = {
  expenses: JSON.parse(localStorage.getItem("expenses")) || [],
  total: 0,
  categoryTotal: {},
}

export const ExpenseContext = createContext()

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState)

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses")
    if (storedExpenses) {
      const parsedExpenses = JSON.parse(storedExpenses)
      parsedExpenses.forEach((expense) =>
        dispatch({ type: "SET_EXPENSES", payload: expense })
      )
    }
  }, [])

  useEffect(() => {
    if (state.expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(state.expenses))
    }
  }, [state.expenses])

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  )
}
