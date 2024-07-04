import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../feature/ChangeColor/ChangeColor';

function MenuList() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ul className='menu'>
      <li className='menu__list-element'>
        <NavLink to='/' className='menu__list-element_link' style={{ color: theme.color }}>Main</NavLink>
      </li>
      <li className='menu__list-element'>
        <NavLink to='/contacts' className='menu__list-element_link' style={{ color: theme.color }}>Contacts</NavLink>
      </li>
      <li className='menu__list-element'>
        <NavLink to='/about' className='menu__list-element_link' style={{ color: theme.color }}>About me</NavLink>
      </li>
      <li className='menu__list-element'>
        <button type='button' className='btn btn-dark menu__list-element_link' onClick={toggleTheme}>change of style</button>
      </li>
    </ul>
  );
}

export default MenuList;
