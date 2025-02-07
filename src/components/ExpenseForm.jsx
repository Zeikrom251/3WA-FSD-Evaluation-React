import { useContext, useState } from "react"
import { ExpenseContext } from "./ExpenseContext"
import SelectInput from "./SelectInput"
import "./css/ExpenseForm.css"

const ExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext)
  const [label, setLabel] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADD_EXPENSE",
      payload: { id: Date.now(), label, amount: parseFloat(amount), category },
    })
    setLabel("")
    setAmount("")
    setCategory("")
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Titre"
        className="input-field"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
        className="input-field"
      />
      <SelectInput category={category} setCategory={setCategory} />
      <button type="submit" className="submit-button">
        Ajouter des dépenses
      </button>
    </form>
  )
}

export default ExpenseForm
