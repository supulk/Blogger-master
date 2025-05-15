import { useState } from 'react'
import Card from './components/Card'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const contentText = "Tailwind CSS is a utility-first CSS framework that can be composed to build any design, directly in your markup. Learn how to leverage its power for rapid UI development. Tailwind CSS is a utility-first CSS framework that can be composed to build any design, directly in your markup. Learn how to leverage its power for rapid UI development.Tailwind CSS is a utility-first CSS framework that can be composed to build any design, directly in your markup. Learn how to leverage its power for rapid UI development.Tailwind CSS is a utility-first CSS framework that can be composed to build any design, directly in your markup. Learn how to leverage its power for rapid UI development.Tailwind CSS is a utility-first CSS framework that can be composed to build any design, directly in your markup. Learn how to leverage its power for rapid UI development."

  const [isSideBarCollapsed, setSideBarCollapsed] = useState(true)

  const toggleSidebar = () => {
    setSideBarCollapsed(!isSideBarCollapsed)
  }


  return (
    <div className='app-container'>
      <NavBar toggleSidebar={toggleSidebar} />

      <div className='app-content'>
        <SideBar isCollapsed={isSideBarCollapsed} />


        <div className={`cards-container ${isSideBarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
          <Card
            author= "Sarah Johnson"
            date= "May 13, 2025"
            title= "Tailwind CSS Tips"
            content= {contentText}
            />
            <Card
            author= "Sarah Johnson"
            date= "May 13, 2025"
            title= "Tailwind CSS Tips"
            content= {contentText}
            />
            <Card
            author= "Sarah Johnson"
            date= "May 13, 2025"
            title= "Tailwind CSS Tips"
            content= {contentText}
            />
            <Card
            author= "Sarah Johnson"
            date= "May 13, 2025"
            title= "Tailwind CSS Tips"
            content= {contentText}
            />
            <Card
            author= "Sarah Johnson"
            date= "May 13, 2025"
            title= "Tailwind CSS Tips"
            content= {contentText}
            />
          </div>
      </div>
    </div>
  )
}

export default App