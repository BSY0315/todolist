import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 4px;
  overflow: hidden;
  border-radius: 50%;
`;

const ListTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
`;

const ListWrapper = ({ title, children }) => {
  return (
    <Wrapper>
      <ListTitle>{title}</ListTitle>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default ListWrapper;
