function Header() {
    return (
        <header className="-z-10 w-full">
            <img className="hidden sm:block w-full bg-desaturated" src="images/bg-header-desktop.svg" alt="Desktop header background image." />
            <img className="sm:hidden w-full bg-desaturated" src="images/bg-header-mobile.svg" alt="Desktop header background image." />
        </header> 
    )
}

export default Header;