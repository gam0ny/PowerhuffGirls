import PropTypes from 'prop-types';
import FormattedText, { TAGS } from "../../../__shared/FormattedText";

import Image from '../../../__shared/Image';

const Description = ({title, coverImageSrc, description}) => (
    <article className="tv-show-description">
        <h1>{title}</h1>
        <section className="tv-show-description__container">
            <Image className="tv-show-description__image-cover"
                   src={coverImageSrc}
                   width={210}
                   height={295}
            />
            <FormattedText text={description}
                           tag={TAGS.SECTION}
                           className={"tv-show-description__description"}/>
        </section>
    </article>
);

Description.propTypes = {
    title: PropTypes.string,
    coverImageSrc: PropTypes.string,
    description: PropTypes.string,
};

export default Description;

