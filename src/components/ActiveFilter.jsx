import cntl from "cntl"

export function ActiveFilter({ filtered }) {
    const containerStyles = cntl`
        w-full
        bg-white
        border-2
        p-4
        mt-8
    `

    return (
        <ul className={containerStyles}>
            {filtered.map(option => (
                <li>{option}</li>
            ))}
        </ul>   
    )
}