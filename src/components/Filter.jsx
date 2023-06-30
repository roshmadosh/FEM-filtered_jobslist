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
                {openCategories.role && (
                    <FilterList options={activeFilters.state.role} toggle={curriedToggle('role')} />
                )}
            </div>
            <button>Level</button>
            <button>Location</button>
            <button>Languages</button>
       </div> 
    )
}

export default Filter;