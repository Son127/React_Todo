/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState } from "react";
import { useRef } from "react";
import * as S from './style'


const Todo = () => {

    const [input, setInput] = useState();

  
    return (
        <>
            <div css={S.TodoContainer}>
                <div css={S.TodoAddition}>
                    <h1>TodoList</h1>
                    <input css={S.Input} type="text" placeholder='...'/>
                    <button css={S.Plus} >+</button>
                </div>
            </div>

        </>
    );
};

export default Todo;