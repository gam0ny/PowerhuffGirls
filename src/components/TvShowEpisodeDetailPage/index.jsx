import { useEffect } from 'react';
import { useParams } from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTvShowEpisodeDetails } from './tvShowEpisodeDetailActions';
import { usePrevious } from '../../hooks/usePrevious';
import TvShowEpisodeDescriptionSection from './TvShowEpisodeDescriptionSection';

const TvShowEpisodeDetailPage = ({id, onComponentDidUpdate}) => {
    const { id: episodeIdFromParams } = useParams();

    const prevId = usePrevious({ id });

    useEffect(() => {
        if(prevId !== episodeIdFromParams) {
            onComponentDidUpdate && onComponentDidUpdate(episodeIdFromParams);
        }
    }, [id, episodeIdFromParams])

    if(!!episodeIdFromParams){
        return (
            <article>
                <TvShowEpisodeDescriptionSection />
            </article>
        );
    }
    return null;
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

export default connect(null, mapDispatchToProps)(TvShowEpisodeDetailPage);
