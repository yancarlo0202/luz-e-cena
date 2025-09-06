import React from 'react'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'
import Logo from '../Logo'
import HeaderLinks from './components/HeaderLinks'
import HeadersFormFilters from './components/HeadersFormFilters'
import HeaderActions from './components/HeaderActions'

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src='/Logo.png'/>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeadersFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  );
};

export default Header