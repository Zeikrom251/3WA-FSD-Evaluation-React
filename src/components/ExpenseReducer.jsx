const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] }

    case "REMOVE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      }

    case "UPDATE_TOTAL":
      return {
        ...state,
        total: state.expenses.reduce((sum, expense) => sum + expense.amount, 0),
      }

    case "UPDATE_CATEGORY_TOTAL":
      return {
        ...state,
        categoryTotal: state.expenses.reduce((acc, expense) => {
          acc[expense.category] = (acc[expense.category] || 0) + expense.amount
          return acc
        }, {}),
      }

    default:
      return state
  }
}

export default ExpenseReducer
