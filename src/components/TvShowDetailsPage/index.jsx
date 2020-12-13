import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {connect} from 'react-redux';

import TvShowDescriptionSection from './TvShowDescriptionSection';
import { fetchTvShowDetails, fetchTvShowEpisodes } from './tvShowDetailsActions';
import TvShowEpisodesSection from './TvShowEpisodeListSection';

const tvShowId = 6771;

const TvShowDetailsPage = ({ onComponentDidMount }) => {

    useEffect(() => {
        onComponentDidMount && onComponentDidMount(tvShowId);
    }, []);

    return (
        <main>
            <TvShowDescriptionSection />
            <TvShowEpisodesSection />
        </main>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentDidMount: (tvShowId) => {
                dispatch(fetchTvShowDetails(tvShowId));
                dispatch(fetchTvShowEpisodes(tvShowId));
            }
    }
};

TvShowDetailsPage.propTypes = {
    onComponentDidMount: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TvShowDetailsPage);