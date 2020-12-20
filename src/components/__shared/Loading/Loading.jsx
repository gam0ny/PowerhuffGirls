import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Loading = ({ inProgress }) => {
    if(inProgress){
        return <div className={'loading'}></div>
    }
    return null;
}

Loading.propTypes = {
    inProgress: PropTypes.bool,
};

const mapStateToProps = ({loading: { count }}) => {
    return {
        inProgress: count > 0,
    }
}

export default connect(mapStateToProps)(Loading);