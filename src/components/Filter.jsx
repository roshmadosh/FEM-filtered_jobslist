import { useState } from "react";
import FilterList from "./FilterList";

const initOpenCategories = {
    role: false,
    level: false,
    location: false,
    languages: false,
}


function Filter({ activeFilters }) {
    const [openCategories, setOpenCategories] = useState(initOpenCategories);

    function onClick(category) {
        setOpenCategories({ ...openCategories, [category]: !openCategories[category]});
    }

    function curriedToggle(label) {
        return function(ind) {
            activeFilters.toggle(label, ind);
        }
    }

    return (
       <div className="flex justify-evenly w-4/5 p-4 bg-indigo-500/50 rounded shadow mx-auto">
            <div className="block">
                <button onClick={() => onClick('role')}>Role</button>
                <FilterList 
                    isOpen={openCategories.role}
                    options={activeFilters.state.role} 
                    toggle={curriedToggle('role')} />
            </div>
            <div className="block">
                <button onClick={() => onClick('level')}>Level</button>
                <FilterList 
                    isOpen={openCategories.level}
                    options={activeFilters.state.level} 
                    toggle={curriedToggle('level')} />
            </div>
            <div className="block">
                <button onClick={() => onClick('location')}>Location</button>
                <FilterList 
                    isOpen={openCategories.location}
                    options={activeFilters.state.location} 
                    toggle={curriedToggle('location')} />
            </div>
            <div className="block">
                <button onClick={() => onClick('language')}>Language</button>
                <FilterList 
                    isOpen={openCategories.language}
                    options={activeFilters.state.language} 
                    toggle={curriedToggle('language')} />
            </div>
       </div> 
    )
}

export default Filter;