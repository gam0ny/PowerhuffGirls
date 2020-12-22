import PropTypes from 'prop-types';

import EpisodeShortDescription from '../EpisodeShortDescription';

export const Episodes = ({episodes, onItemClick}) => {
    if (episodes.length === 0) return null;

    return (<article className={'tv-show-episode-list'}>
        <h2>Episodes</h2>
        <ul>
            {episodes.map((episode, index) => {
                return <li key={index} onClick={() => onItemClick && onItemClick(episode)}>
                    <EpisodeShortDescription id={episode.id}
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

Episodes.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.shape({
        ...EpisodeShortDescription.propTypes,
    })),
}

export default Episodes;
