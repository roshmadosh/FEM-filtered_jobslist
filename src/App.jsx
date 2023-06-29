import { useState } from "react"
import { Header, Filter } from "./components";

const initRoleOptions = [
    {
        label: "Frontend",
        isChecked: false
    },
    {
        label: "Backend",
        isChecked: false
    },
    {
        label: "Fullstack",
        isChecked: false
    },
]

function App() {
  // each filter "category" is a key. The value is a list of the options for that category.
  const [activeFilters, setActiveFilters] = useState({ role: initRoleOptions });

  
  function toggleFilter(key, ind) {
    const nestedUpdate = [ ...activeFilters[key] ];
    nestedUpdate[ind].isChecked = !nestedUpdate[ind].isChecked;
    const update = { ...activeFilters, [key]: nestedUpdate }
    setActiveFilters(update);
  }

  return (
    <>
      <Header /> 
      <main className="max-w-7xl mx-auto mt-32 p-8">
        <Filter activeFilters={{ state: activeFilters, toggle: toggleFilter }} />
      </main>
    </>
  )
}

export default App
