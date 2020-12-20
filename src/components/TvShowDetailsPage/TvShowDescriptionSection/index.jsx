import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Image from '../../__shared/Image';

const TvShowDescriptionSection = ({title, coverImageSrc, description}) => (
    <article className="tv-show-description">
        <h1>{title}</h1>
        <section className="tv-show-description__container">
            <Image className="tv-show-description__image-cover"
                   src={coverImageSrc}
                   width={210}
                   height={295}
            />
            <section className="tv-show-description__description"
                     dangerouslySetInnerHTML={{__html: description}}>
            </section>
        </section>
    </article>
);

TvShowDescriptionSection.propTypes = {
    title: PropTypes.string,
    coverImageSrc: PropTypes.string,
    description: PropTypes.string,
    OnLoaded: PropTypes.func,
};

const mapStateToProps = ({tvShowDetails: { details: { name, image: { medium }, summary } } }) => {
    return {
        title: name,
        coverImageSrc: medium,
        description: summary,
    }
};

export default connect(mapStateToProps)(TvShowDescriptionSection);
