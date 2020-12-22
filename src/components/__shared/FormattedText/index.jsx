import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

export const TAGS = {
    DIV: 'div',
    P: 'p',
    SECTION: 'section',
};

const sanitizeProperties = { ALLOWED_TAGS: ['b', 'p'] };

const FormattedText = ({ text, tag, className }) => {

    const pureText = DOMPurify.sanitize(text, sanitizeProperties);

    const params = {
        dangerouslySetInnerHTML: {__html: pureText},
        className
    }

    let component;

    switch(tag) {
        case TAGS.P: component = <p { ...params }></p>; break;
        case TAGS.SECTION:  component = <section { ...params }></section>; break;
        case TAGS.DIV: component = <div { ...params }></div>
        default: component = null;
    }

    return component;
}

FormattedText.propTypes = {
    text: PropTypes.string,
    tag: PropTypes.oneOf([Object.keys(TAGS)]),
    className: PropTypes.string,
};

export default FormattedText;
