import { useState } from "react";
import FilterList from "./FilterList";
import cntl from "cntl";
import { MODAL_STATUS_ERROR } from "../hooks/useModal";

const initOpenCategories = {
    role: false,
    level: false,
    location: false,
    language: false,
}

function Filter({ dispatchModal, activeFilters }) {
    const containerStyles = cntl`
        flex 
        justify-between 
        sm:justify-evenly 
        w-full 
        sm:w-4/5 
        p-4 
        bg-white 
        rounded 
        shadow 
        mx-auto
    `

    const [openCategories, setOpenCategories] = useState(initOpenCategories);

    function onClick(category) {
        if (category == 'location' && activeFilters.state.location.length == 0) {
            dispatchModal("No locations available for current results.", MODAL_STATUS_ERROR)
            return;
        }
        if (category == 'language' && activeFilters.state.language.length == 0) {
            dispatchModal("No languages available for current results.", MODAL_STATUS_ERROR)
            return;
        }

        const init = { ...openCategories };
        Object.keys(init).forEach(key => init[key] = false);
        setOpenCategories({ ...init, [category]: !openCategories[category]});
    }

    function curriedToggle(label) {
        return function(ind) {
            activeFilters.toggle(label, ind);
        }
    }

    return (
       <div className={containerStyles}>
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
                    lastOfType={true}
                    isOpen={openCategories.language}
                    options={activeFilters.state.language} 
                    toggle={curriedToggle('language')} /> 
            </div>
       </div> 
    )
}

export default Filter;