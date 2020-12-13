import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';

import EpisodeListItem from './EpisodeListItem';

const TvShowEpisodesSection = ({episodes, onItemClick}) => {
    if(episodes.length === 0) return null;

    return (<article className={'tv-show-episode-list'}>
        <h2>Episodes</h2>
        <ul>
            {episodes.map((episode, index) => {
                return <li key={index} onClick={onItemClick}>
                        <EpisodeListItem {...episode} />
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
        episodes: episodes.map(({id, name, image, airdate, season, number}) => {
            return {
                id,
                title: name,
                coverImageUrl: !!image ? image.medium : '#',
                airDate: airdate,
                seasonNumber: season,
                episodeNumber: number,
            }
        }),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onItemClick: (episodeId) => {
            dispatch(push('/episode/1'));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvShowEpisodesSection);