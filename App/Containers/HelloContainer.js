import { connect } from 'react-redux'
import { addText } from '../Redux/HelloRedux'
import HelloComponent from '../Components/HelloComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    textArray: state.hello
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (text) => dispatch(addText(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloComponent);