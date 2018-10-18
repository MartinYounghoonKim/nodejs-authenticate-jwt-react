import React from 'react';

const ButtonComponent = (props) => {
  return (
      <button type="button" onClick={props.clickEvent}>{props.text}</button>
  )
};
ButtonComponent.defaultProps = {
  text: 'If any text, rendering this text.'
};

export default ButtonComponent;