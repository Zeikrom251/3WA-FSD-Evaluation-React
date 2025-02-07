import { ExpenseProvider } from "./components/ExpenseContext"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import "./App.css"
import "./components/css/ExpenseForm.css"
import "./components/css/ExpenseList.css"
import CategoryPieChart from "./components/CategoryPieChart"

function App() {
  return (
    <ExpenseProvider>
      <h1 className="app-title">Suivi des dépenses</h1>
      <ExpenseForm />
      <CategoryPieChart />
      <ExpenseList />
    </ExpenseProvider>
  )
}

export default App
