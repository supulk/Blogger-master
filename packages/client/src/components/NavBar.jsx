import './navBar.css'
function NavBar({toggleSidebar}){

    return(
        <nav className="navbar">
            <div className="navbar-content">

                <div className='navbar-left'>
                    <button className="menu-button" onClick={toggleSidebar}>Menu</button>
                    <div className="logo">Logo</div>
                </div>

                <div className="navbar-right">
                    <div className="user-info">User</div>
                </div>

            </div>
        </nav>
    )
}
export default NavBar