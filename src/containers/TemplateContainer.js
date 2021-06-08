import React from 'react';
import { connect } from 'react-redux';
import TemplateWrapper from '../components/TemplateWrapper';
import { insert, remove } from '../modules/TodoTemplate';

const TemplateContainer = ({ templates, insert, remove }) => {
  return (
    <TemplateWrapper
      templates={templates}
      onInsert={insert}
      onRemove={remove}
    />
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    templates: state.todoTemplate
  };
};

const mapDispatchToProps = (dispatch) => ({
  insert: (title) => {
    dispatch(insert(title));
  },
  remove: (id) => {
    console.log('asdf');
    dispatch(remove(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);
