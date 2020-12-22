import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTvShowDetails, fetchTvShowEpisodes } from './reducers/actions';
import DescriptionContainer from './containers/DescriptionContainer';
import EpisodesContainer from './containers/EpisodesContainer';

const tvShowId = 6771;

const TvShowDetailsPage = ({ onGetTvShowDetails, onGetTvShowEpisodes }) => {

    useEffect(() => {
        onGetTvShowDetails && onGetTvShowDetails(tvShowId);
        onGetTvShowEpisodes && onGetTvShowEpisodes(tvShowId);
    });

    return (
        <main>
            <DescriptionContainer />
            <EpisodesContainer />
        </main>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetTvShowDetails: (tvShowId) => {
            dispatch(fetchTvShowDetails(tvShowId));
        },
        onGetTvShowEpisodes: () => {
            dispatch(fetchTvShowEpisodes(tvShowId));
        }
    }
};

TvShowDetailsPage.propTypes = {
    onGetTvShowDetails: PropTypes.func,
    onGetTvShowEpisodes: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TvShowDetailsPage);
