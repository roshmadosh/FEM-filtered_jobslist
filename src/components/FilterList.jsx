function FilterList({ options, toggle }) {

    function onChecked(ind) {
        const copy = [...options];
        copy[ind].isChecked = !copy[ind].isChecked;
        activeFilters.set([...activeFilters.state, copy[ind].label]);
    }
    
    return (
        <div className="relative">
            <ul className="absolute top-2 left-0 rounded border-solid border-gray-400 border-2 p-4 bg-white">
            {options.map((option, ind) => ( 
                <li key={`${option.label}-${ind}`} className="flex [&>*]:cursor-pointer mb-8 last-of-type:mb-0">
                    <input 
                        onChange={() => toggle(ind)}
                        className="mr-2" 
                        type="checkbox" 
                        name={`${option.label}-checkbox`} 
                        id={`${option.label}-checkbox`} />
                    <label htmlFor={`${option.label}-checkbox`}>{option.label}</label>
                </li>
            ))}
            </ul>
        </div>

    )

}

export default FilterList;