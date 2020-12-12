import { connect } from 'react-redux';
import Image from '../../../__shared/Image';

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
                     dangerouslySetInnerHTML={{ __html: description }}>
            </section>
        </section>
    </article>
);

const mapStateToProps = (state) => {
    return {
        title: 'The Powerpuff Girls',
        coverImageSrc: 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
        description: '<p>The city of Townsville may be a beautiful, bustling metropolis, but don\'t be fooled! There\'s evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who\'s who of evil, they show what it really means to \"fight like a girl.\"</p>',
    }
}

export default connect(mapStateToProps)(TvShowDescriptionSection);