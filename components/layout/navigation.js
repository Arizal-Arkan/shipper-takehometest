import React from 'react'
import Styled from "styled-components";

//Icons
import { HiHome, HiOutlineCalendar } from "react-icons/hi";
import { RiMapPinUserFill } from "react-icons/ri";

//Style

const ItemMenu = Styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const ListItem = Styled.ul`
    position: sticky;
    top: 5rem;
    line-height: 2;
    flex-direction: column;
    display: flex;
    padding: 2.5rem 1.25rem 2.5rem 0.75rem;
    font-size: 1rem;
`;

const TextMenu = Styled.p `
    margin-left: 20px;
    font-wight: 500;
`;

function Nav() {
  return (
    <navigation>
      <ListItem>
        <ItemMenu>
          <HiHome size="2em" /> <TextMenu data-testid="navigation-item">Beranda</TextMenu>
        </ItemMenu>
        <ItemMenu>
          <RiMapPinUserFill size="2em" /> <TextMenu data-testid="navigation-item">Driver Management</TextMenu>
        </ItemMenu>
        <ItemMenu>
          <HiOutlineCalendar size="2em" /> <TextMenu data-testid="navigation-item">Pickup</TextMenu>
        </ItemMenu>
      </ListItem>
    </navigation>
  );
}

export default React.memo(Nav)
