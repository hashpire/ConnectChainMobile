import { connect } from 'react-redux'
import { addText, addTextAsync } from '../Redux/HelloRedux'
import HelloComponent from '../Components/HelloComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    textArray: state.hello
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: (text) => dispatch(addText(text)),
    addAsync: (text) => dispatch(addTextAsync(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloComponent);