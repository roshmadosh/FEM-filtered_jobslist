import { useEffect, useState } from "react"
import { Header, Filter, Modal, ActiveFilter } from "./components";
import { useModal } from "./hooks/useModal"; 
import cntl from "cntl";
import { useJobs } from "./hooks/useJobs";

class FilterOption {
  label;
  isChecked = false;

  constructor(label) {
    this.label = label;
  }
}

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

function App() {
  /* styles */
  const containerStyles = cntl`
    min-h-screen 
    bg-light-cyan
  ` 
  const mainStyles = cntl`
    max-w-7xl 
    mx-auto 
    p-0 
    sm:p-8 
  `
  const [modalState, dispatchModal] = useModal(); 
  const [jobs, fetchers] = useJobs();
  const [activeFilters, setActiveFilters] = useState();

  useEffect(() => {
    if (jobs && !activeFilters) {
      const role = fetchers.role()
        .filter(onlyUnique)
        .map(role => new FilterOption(role));

      const level = fetchers.level()
        .filter(onlyUnique)
        .map(level => new FilterOption(level));

      const location = fetchers.location()
        .filter(onlyUnique)
        .map(loc => new FilterOption(loc));

      const language = fetchers.language()
        .flat()
        .filter(onlyUnique)
        .map(lang => new FilterOption(lang));

      const data = { role, level, location, language };
      setActiveFilters(data);
    }
  }, [jobs])

  function toggleFilter(key, ind) {
    const nestedUpdate = [ ...activeFilters[key] ];
    nestedUpdate[ind].isChecked = !nestedUpdate[ind].isChecked;
    const update = { ...activeFilters, [key]: nestedUpdate };
    setActiveFilters(update);
  }

  function filtered() {
    return Object.values(activeFilters)
      .flatMap(option => option.filter(opt => opt.isChecked))
      .map(option => option.label);
  }

  return (
    <div className={containerStyles}>
      <Header /> 
        {activeFilters && 
          <main className={mainStyles}>
            <Filter 
              dispatchModal={dispatchModal} 
              activeFilters={activeFilters}
              toggleFilter={toggleFilter}
            />
            <ActiveFilter filtered={filtered()} />
          </main>
         }
      {modalState.isActive && <Modal modalState={modalState} />}
    </div>
  )
}

export default App
