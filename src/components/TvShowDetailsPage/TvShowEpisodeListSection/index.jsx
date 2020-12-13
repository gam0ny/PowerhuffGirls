import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import EpisodeListItem from './EpisodeListItem';

const TvShowEpisodesSection = ({episodes}) => {
    if(episodes.length === 0) return null;

    return (<article className={'tv-show-episode-list'}>
        <h2>Episodes</h2>
        <ul>
            {episodes.map((episode, index) => {
                return <li key={index}>
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
        episodes: episodes.map(({name, image, airdate, season, number}) => {
            return {
                title: name,
                coverImageUrl: !!image ? image.medium : '#',
                airDate: airdate,
                seasonNumber: season,
                episodeNumber: number,
            }
        }),
    }
}

export default connect(mapStateToProps)(TvShowEpisodesSection);