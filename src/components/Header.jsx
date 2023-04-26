import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 20px;
  color: white;
  background: rgb(0, 0, 0);
`;

function Header() {
  return (
    <div>
      <StHeader>
        <div>&nbsp;Sunwoo Todo List&nbsp;📑</div>
        <div>React</div>
      </StHeader>
    </div>
  );
}

export default Header;

