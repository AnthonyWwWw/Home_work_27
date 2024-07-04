import React, { useContext } from 'react';
import MenuList from './MenuList';
import { useStateImg } from '../hooks/useStateImg';
import { ThemeContext } from '../feature/ChangeColor/ChangeColor';

function Header() {
  const { logoState } = useStateImg();
  const { theme } = useContext(ThemeContext);

  return (
    <div className='header-container'>
      <header className='header' style={{ background: theme.background, color: theme.color }}>
        <div className='header__content'>
          <img className='header__logo' src={logoState} alt='LOGO' />
          <nav className='header__menu'>
            <MenuList />
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
