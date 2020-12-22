import {useState} from 'react';
import PropTypes from 'prop-types';

import classNames from 'class-names';
import noImageUrl from '../../../styles/images/default-image.jpg';

const Image = ({className, src, width, height}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadFailed, setLoadFailed] = useState(false);

    const figureClassNames = classNames(
        'image-wrapper',
        {'image-wrapper--loading': !isLoaded && !loadFailed},
        className);

    const imageClassNames = classNames(
        'image-wrapper__image',
        {'image-wrapper__image--hidden': !isLoaded}
    );

    let component = null;

    if(src) {
        component =
          <figure className={figureClassNames}
                    style={{minWidth: width, maxWidth: width, minHeight: height, maxHeight: height}}>
              {loadFailed && <img className='image-wrapper__default-image' src={noImageUrl} alt={'default'}/>}
              <img className={imageClassNames}
                   src={src}
                   alt={'target'}
                   onLoad={() => setIsLoaded(true)}
                   onError={() => {
                     setIsLoaded(false);
                     setLoadFailed(true)
                   }}
              />
          </figure>;
    }

    return component;
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Image;
