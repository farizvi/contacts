import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ contact: { name, email, message, id }, onDelete }) => {
  return (
    <div style={ styles }>
      <p>{ name }</p>
      <p>{ email }</p>
      <p>{ message }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Remove
      </button>
    </div>
  );
};