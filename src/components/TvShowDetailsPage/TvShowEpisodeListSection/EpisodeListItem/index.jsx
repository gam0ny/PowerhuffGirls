import PropTypes from 'prop-types';

import Image from '../../../__shared/Image';

const EpisodeListItem = ({ title, coverImageUrl, airDate, seasonNumber, episodeNumber}) => (
    <section className={'tv-show-episode-list__item'}>
        <Image width={120} height={70} src={coverImageUrl} className={'tv-show-episode-list__image'}/>
        <div className={'tv-show-episode-list__description'}>
            <div>{`${seasonNumber}x${episodeNumber}`}</div>
            <div>{title}</div>
            <div>{airDate}</div>
        </div>
    </section>
)

EpisodeListItem.propType = {
    title: PropTypes.string,
    coverImageUrl: PropTypes.string,
    airDate: PropTypes.string,
    seasonNumber: PropTypes.number,
    episodeNumber: PropTypes.number,
}

export default EpisodeListItem;
