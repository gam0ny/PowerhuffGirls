import { useEffect } from 'react';
import { useParams } from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTvShowEpisodeDetails } from './tvShowEpisodeDetailActions';
import TvShowEpisodeDescriptionSection from './TvShowEpisodeDescriptionSection';

const TvShowEpisodeDetailPage = ({id, onComponentDidUpdate}) => {
    const { id: episodeIdFromParams } = useParams();
    const episodeIdFromParamsInt = parseInt(episodeIdFromParams);

    useEffect(() => {
        if(id !== episodeIdFromParamsInt) {
            onComponentDidUpdate && onComponentDidUpdate(episodeIdFromParams);
        }
    }, [id])

    if(!!episodeIdFromParams){
        return (
            <article>
                <TvShowEpisodeDescriptionSection />
            </article>
        );
    }
    return null;
};
const mapStateToProps = ({ tvShowEpisodeDetail: { id }}) => {
    return {
        id,
    }
};

const mapDispatchToProps = (dispatch) => {
      return {
          onComponentDidUpdate: (episodeId) => {
              dispatch(fetchTvShowEpisodeDetails(episodeId));
          }
      }
};

TvShowEpisodeDetailPage.propTypes = {
    id: PropTypes.number,
    onComponentDidUpdate: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(TvShowEpisodeDetailPage);
