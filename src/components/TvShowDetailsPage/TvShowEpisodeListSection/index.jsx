import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import EpisodeListItem from './EpisodeListItem';
import {TV_SHOW__EPISODE__UPDATE} from '../../TvShowEpisodeDetailPage/tvShowEpisodeDetailActionTypes';

const TvShowEpisodesSection = ({episodes, onItemClick}) => {
    if (episodes.length === 0) return null;

    return (<article className={'tv-show-episode-list'}>
        <h2>Episodes</h2>
        <ul>
            {episodes.map((episode, index) => {
                return <li key={index} onClick={() => onItemClick && onItemClick(episode)}>
                    <EpisodeListItem id={episode.id}
                                     title={episode.name}
                                     coverImageUrl={`${!!episode.image ? episode.image.medium : '#'}`}
                                     airDate={episode.airdate}
                                     seasonNumber={episode.season}
                                     episodeNumber={episode.number}
                    />
                </li>
            })}
        </ul>
    </article>)
};

EpisodeListItem.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.shape({
        ...EpisodeListItem.propTypes,
    })),
}

const mapStateToProps = ({tvShowDetails: {episodes}}) => {
    return {
        episodes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (episode) => {
            dispatch({type: TV_SHOW__EPISODE__UPDATE, payload: episode})
            dispatch(push(`/episode/${episode.id}`));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvShowEpisodesSection);