import { connect } from "react-redux";
import EpisodeDescription from "../../components/EpisodeDescription";

const mapStateToProps = ({ tvShowEpisodeDetail }) => {

  const { name, image: { original }, summary } = tvShowEpisodeDetail;

  return {
      title: name,
      coverImageSrc: original,
      summary,
  }
}

export default connect(mapStateToProps)(EpisodeDescription);
