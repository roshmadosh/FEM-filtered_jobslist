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
        switch (category) {
            case 'role':
                setOpenCategories({...openCategories, role: !openCategories.role});
                break;
            case 'level':
                setOpenCategories({...openCategories, role: !openCategories.level});
                break;
            case 'location':
                setOpenCategories({...openCategories, role: !openCategories.location});
                break;
            case 'languages':
                setOpenCategories({...openCategories, role: !openCategories.languages});
                break;
            default:
                break;
        }
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