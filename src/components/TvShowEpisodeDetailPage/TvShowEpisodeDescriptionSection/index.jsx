import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Image from '../../../__shared/Image';


const TvShowEpisodeDescriptionSection = ({title, summary, coverImageSrc}) => {
    return (
        <section className={'tv-show-episode-detail'}>
            <h1>{title}</h1>
            <div className={'tv-show-episode-detail__container'}>
                <Image width={400} height={224}
                       className={'tv-show-episode-detail__image-cover'}
                       src={coverImageSrc}/>
                <section className="tv-show-episode-detail__summary"
                         dangerouslySetInnerHTML={{__html: summary}}>
                </section>
            </div>
        </section>
    )
};

TvShowEpisodeDescriptionSection.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string,
    coverImageSrc: PropTypes.string,
};

const mapStateToProps = ({tvShowEpisodeDetail: {name, image: {original}, summary}}) => {
    return {
        title: name,
        coverImageSrc: original,
        summary: summary,
    }
}

export default connect(mapStateToProps)(TvShowEpisodeDescriptionSection);