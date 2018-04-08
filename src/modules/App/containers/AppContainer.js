import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import components from "../components";

const mapStateToProps = state => {
  const { seed, playButtonText, generatedSettings, isPlaying, envelopeValues } = state.app;
  return {
    seed: seed,
    playButtonText: playButtonText,
    generatedSettings: generatedSettings,
    isPlaying: isPlaying,
    envelopeValues: envelopeValues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(components.App);

export default AppContainer;
