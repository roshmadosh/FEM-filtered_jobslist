import { useEffect, useState } from "react"
import { Header, Filter, Modal } from "./components";
import { useModal } from "./hooks/useModal"; 

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
  const [modalState, dispatchModal] = useModal(); 
  const [activeFilters, setActiveFilters] = useState(initActiveFilters);
  
  function toggleFilter(key, ind) {
    const nestedUpdate = [ ...activeFilters[key] ];
    nestedUpdate[ind].isChecked = !nestedUpdate[ind].isChecked;
    const update = { ...activeFilters, [key]: nestedUpdate }
    setActiveFilters(update);
  }

  return (
    <div className="min-h-screen bg-light-cyan">
      <Header /> 
      <main className="max-w-7xl mx-auto p-0 sm:p-8">
        <Filter dispatchModal={dispatchModal} activeFilters={{ state: activeFilters, toggle: toggleFilter }} />
      </main>
      {modalState.isActive && <Modal modalState={modalState} />}
    </div>
  )
}

export default App
