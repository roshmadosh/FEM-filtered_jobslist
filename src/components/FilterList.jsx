import cntl from "cntl";
import { ClickOutsideWrapper } from "./ClickOutsideWrapper";

function FilterList({ close, lastOfType, isOpen, options, toggle }) {
    const ulStyles = cntl`
        absolute 
        top-2 
        ${lastOfType ? 'right-0 sm:left-0 sm:right-auto': 'left-0'} 
        rounded 
        border-solid 
        border-gray-400 
        border-2 
        p-4 
        bg-white
        transition-opacity
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `
    const liStyles = cntl`
        flex 
        mb-8 
        [&>*]:cursor-pointer 
        last-of-type:mb-0
    `

    return (
        <div className="relative">
            <ul className={ulStyles}>
            {options.map((option, ind) => ( 
                <li key={`${option.label}-${ind}`} className={liStyles}>
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