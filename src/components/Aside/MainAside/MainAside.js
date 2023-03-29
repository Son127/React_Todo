/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Navigation } from 'react-minimal-side-navigation/lib';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FcTodoList } from "react-icons/fc";
import { HiHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { VscChecklist } from "react-icons/vsc";

import  * as S from './style'


const MainAside = () => {
  const navigate = useNavigate();

  const [isAsideHidden, setAsideHidden] = useState(false);

  const toggleAsideVisibility = () => {
      setAsideHidden(!isAsideHidden);
  }

  return (
    <>
      <aside css={ isAsideHidden ? S.sideHidden : S.style} hidden={isAsideHidden}>
          <Navigation
          activeItemId="/"
          onSelect={({ itemId }) => {
              navigate(itemId);
          }}
        items={[
          {
            title:'Home',
            itemId: '/',
            elemBefore: () => <HiHome />,
          },
          {
            title: 'TodoList',
            itemId: '/todo',
            elemBefore: () => <FcTodoList />,

          },

        ]}
      />
      </aside>
      <button css={isAsideHidden ? S.pushButton2 : S.pushButton} onClick={toggleAsideVisibility} >
        {isAsideHidden ? <IoIosArrowForward /> : <IoIosArrowBack />} 
      </button>
    </>
  );
};

export default MainAside;