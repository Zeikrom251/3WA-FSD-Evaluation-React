import { useReducer } from "react"
import "./css/ExpenseForm.css"

const categories = [
  "Alimentation",
  "Logement",
  "Transport",
  "Divertissement",
  "Santé",
  "Éducation",
  "Autres",
]

const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload

    default:
      return state
  }
}

const SelectInput = ({ category, setCategory }) => {
  const [state, dispatch] = useReducer(CategoryReducer, category)

  const handleChange = (e) => {
    const { value } = e.target
    dispatch({ type: "SET_CATEGORY", payload: value })
    setCategory(value)
  }

  return (
    <select value={state} onChange={handleChange} className="select-input">
      <option value="">---</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
