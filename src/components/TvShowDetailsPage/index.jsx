import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {connect} from 'react-redux';

import TvShowDescriptionSection from './TvShowDescriptionSection';
import { fetchTvShowDetails, fetchTvShowEpisodes } from './reducers/actions';
import TvShowEpisodesSection from './TvShowEpisodeListSection';

const tvShowId = 6771;

const TvShowDetailsPage = ({ onGetTvShowDetails, onGetTvShowEpisodes }) => {

    useEffect(() => {
        onGetTvShowDetails && onGetTvShowEpisodes(tvShowId);
        onGetTvShowEpisodes && onGetTvShowEpisodes(tvShowId);
    }, [tvShowId]);

    return (
        <main>
            <TvShowDescriptionSection />
            <TvShowEpisodesSection />
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
