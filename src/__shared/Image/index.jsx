import { useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'class-names';
import noImageUrl from '../../styles/images/default-image.jpg';

const Image = ({className, src, width, height}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadFailed, setLoadFailed] = useState(false);

    const figureClassNames = classNames(
        'image-wrapper',
        { 'image-wrapper--loading': !isLoaded && !loadFailed},
        className);

    const imageClassNames = classNames(
        'image-wrapper__image',
        { 'image-wrapper__image--hidden': !isLoaded }
    );

    return (
        <figure className={figureClassNames}
                style={{minWidth: width, minHeight: height}}>
            {loadFailed && <img className='image-wrapper__default-image' src={ noImageUrl } alt={'default image'}/>}
            <img className={imageClassNames}
                 src={src}
                 alt={'target image'}
                 onLoad={ () => setIsLoaded(true) }
                 onError={ () => { setIsLoaded(false); setLoadFailed(true)} }
            />
        </figure>)
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Image;