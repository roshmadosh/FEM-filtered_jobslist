import { useState } from "react";
import FilterList from "./FilterList";
import cntl from "cntl";
import { MODAL_STATUS_ERROR } from "../hooks/useModal";
import { ClickOutsideWrapper } from "./ClickOutsideWrapper";

const initOpenCategories = {
    role: false,
    level: false,
    location: false,
    language: false,
}

function Filter({ dispatchModal, activeFilters, toggleFilter }) {
    const containerStyles = cntl`
        flex 
        justify-between 
        sm:justify-evenly 
        w-full 
        p-4 
        bg-white 
        rounded 
        shadow 
        mx-auto
    `

    const [openCategories, setOpenCategories] = useState(initOpenCategories);

    function onClick(category) {
        if (category == 'location' && activeFilters.location.length == 0) {
            dispatchModal("No locations available for current results.", MODAL_STATUS_ERROR)
            return;
        }
        if (category == 'language' && activeFilters.language.length == 0) {
            dispatchModal("No languages available for current results.", MODAL_STATUS_ERROR)
            return;
        }

        const init = { ...openCategories };
        Object.keys(init).forEach(key => init[key] = false);
        setOpenCategories({ ...init, [category]: !openCategories[category]});
    }

    function curriedToggle(label) {
        return function(ind) {
            toggleFilter(label, ind);
        }
    }

    return (
       <div className={containerStyles}>
        {Object.keys(initOpenCategories).map(key => (
            <div className="block">
                <button onClick={() => onClick(key)}>{key}</button>
                <ClickOutsideWrapper enabled={openCategories[key]} onClickOutside={() => setOpenCategories(initOpenCategories)}>
                    <FilterList 
                        isOpen={openCategories[key]}
                        options={activeFilters[key]} 
                        close={() => setOpenCategories(initOpenCategories)}
                        toggle={curriedToggle(key)} />
                </ClickOutsideWrapper> 
            </div>
        ))}
       </div> 
    )
}

export default Filter;