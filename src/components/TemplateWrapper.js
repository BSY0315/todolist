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
`;

const ListTitle = styled.div`
  background: #1628cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: red;
`;

const Content = styled.div`
  background: white;
`;

const TemplateItem = ({ title, onRemove, id, children }) => {
  return (
    <Wrapper>
      <ListTitle>{title}</ListTitle>
      <Button onClick={() => onRemove(id)}>remvoe</Button>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const TemplateWrapper = ({ templates, onInsert, onRemove }) => {
  return (
    <div>
      <button onClick={() => onInsert('asdf')}>add</button>
      {/* <button onClick={() => onRemove()}>remvoe</button> */}
      {templates.map((template) => (
        <TemplateItem
          title={template.title}
          onRemove={onRemove}
          id={template.id}
          key={template.id}
        >
          {'test'}
        </TemplateItem>
      ))}
    </div>
  );
};

export default TemplateWrapper;
