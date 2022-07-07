import React from 'react';

const Container = (props) => {

  return (
    <div className="px-32">{props.children}</div>
  );
}

export default Container;