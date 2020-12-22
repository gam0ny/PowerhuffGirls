import { push } from "connected-react-router";
import { connect } from "react-redux";
import { TV_SHOW__EPISODE__UPDATE } from "../../../TvShowEpisodeDetailPage/reducers/actionTypes";
import Episodes from "../../components/Episodes";

const mapStateToProps = ({tvShowDetails: {episodes}}) => {
  return {
    episodes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (episode) => {
      dispatch({type: TV_SHOW__EPISODE__UPDATE, payload: episode})
      dispatch(push(`/episode/${episode.id}`));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
