import React from 'react';
import { connect } from 'react-redux';
import Contacts from '../components/Contacts';
import { deletePost } from '../actions';

function ContactsList({ contacts, onDelete }) {
  if(!contacts.length) {
    return (
      <div>
        No Contacts
      </div>
    )
  }
  return (
    <div>
      {contacts.map(contact => {
        return (
          <Contacts contact={ contact } onDelete={ onDelete } key={ contact.id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
      window.location.reload();
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsList);