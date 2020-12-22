import PropTypes from 'prop-types';
import FormattedText, { TAGS } from "../../../__shared/FormattedText";

import Image from '../../../__shared/Image';

const EpisodeDescription = ({title, summary, coverImageSrc}) => {
    return (
        <section className={'tv-show-episode-detail'}>
            <h1>{title}</h1>
            <div className={'tv-show-episode-detail__container'}>
                <Image width={400} height={224}
                       className={'tv-show-episode-detail__image-cover'}
                       src={coverImageSrc}/>

                       <FormattedText className={'tv-show-episode-detail__summary'}
                                      tag={TAGS.SECTION}
                                      text={summary}/>

            </div>
        </section>
    )
};

EpisodeDescription.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string,
    coverImageSrc: PropTypes.string,
};

export default EpisodeDescription;
