function Header() {
    return (
        <header className="absolute top-0 left-0 -z-10 w-full">
            <img className="hidden sm:block w-full" src="images/bg-header-desktop.svg" alt="Desktop header background image." />
            <img className="sm:hidden w-full" src="images/bg-header-mobile.svg" alt="Desktop header background image." />
        </header> 
    )
}

export default Header;