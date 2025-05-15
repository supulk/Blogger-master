import React, { useState } from 'react';
import './sideBar.css';

function SideBar({isCollapsed = true}){
    return(
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className='sidebar-content'>

                {isCollapsed ? (
                    <div className="sidebar-icons">
                        <button className="icon-button">+</button>
                        <button className="icon-button">⚙️</button>
                        <button className="icon-button">📚</button>
                    </div>
                    ) : (
                    <div className="sidebar-menu">
                        <button className="sidebar-button">Create Blog</button>
                        <button className="sidebar-button">Settings</button>
                        <button className="sidebar-button">Reading List</button>
                    </div>
                    )}
            </div>
        </aside>
    )
}
export default SideBar;