import { useState } from "react"
import { Header, Filter } from "./components";

class FilterOption {
  label;
  isChecked = false;

  constructor(label) {
    this.label = label;
  }
}

const initRoleOptions = [
  new FilterOption("Frontend"), 
  new FilterOption("Backend"), 
  new FilterOption("Fullstack")
];
    
const initLevelOptions = [
  new FilterOption("Midweight"), 
  new FilterOption("Junior"), 
  new FilterOption("Senior"), 
];

const initLocationOptions = [];
const initLanguageOptions = []

const initActiveFilters =  {
  role: initRoleOptions,
  level: initLevelOptions,
  location: initLocationOptions,
  language: initLanguageOptions,
}

function App() {
  const [activeFilters, setActiveFilters] = useState(initActiveFilters);
  
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
