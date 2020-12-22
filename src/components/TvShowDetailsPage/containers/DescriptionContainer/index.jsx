import { connect } from "react-redux";

import Description from "../../components/Description";

const mapStateToProps = ({ tvShowDetails: { details } }) => {

  const { name, image: { medium }, summary } = details;

  return {
    title: name,
    coverImageSrc: medium,
    description: summary,
  }
};

export default connect(mapStateToProps)(Description);

