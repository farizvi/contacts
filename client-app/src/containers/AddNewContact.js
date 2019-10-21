import { connect } from 'react-redux';
import { createPost } from '../actions';
import AddContact from '../components/AddContact';

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: contact => {
      dispatch(createPost(contact));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddContact);