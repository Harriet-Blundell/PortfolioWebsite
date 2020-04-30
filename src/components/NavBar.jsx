import React from 'react'
import { Link } from '@reach/router'

const NavBar = (props) => {
  return (
    <div className='navBar'>
      <ul>
        {props.sideBarItems.map((item) => {
          return (
            <Link to={item.link} className='menuItems'>
              <li className='pageLink'>{item.label}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default NavBar
