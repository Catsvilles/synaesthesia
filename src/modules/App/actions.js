import * as actions from "./actionTypes";
import * as synth from "../../synth/synth";

export const Play = () => {
  return (dispatch, getState) => {
    const generatedSettings = synth.play(getState().seed, null, kv => {
      dispatch(UpdateEnvelopeValue(kv));
    });
    dispatch({
      type: actions.SYNTH_PLAY,
      payload: generatedSettings
    });
  };
};

export const UpdateEnvelopeValue = value => {
  return dispatch => {
    dispatch({
      type: actions.ENVELOPE_VALUE,
      payload: value
    });
  };
};

export const Stop = () => {
  return dispatch => {
    dispatch({
      type: actions.SYNTH_STOP
    });
  };
};

export const PlayButtonClick = () => {
  return (dispatch, getState) => {
    getState().app.isPlaying ? dispatch({ type: actions.SYNTH_STOP }) : dispatch(Play());
  };
};

export const SetInitialSeed = newSeed => {
  return dispatch => {
    dispatch({ type: actions.UPDATE_SEED, payload: newSeed });
    dispatch(Play());
  };
};

export const SetSeed = newSeed => {
  return dispatch => {
    dispatch({ type: actions.UPDATE_SEED, payload: newSeed });
    synth.playDebounced(newSeed, generatedSettings => {
      dispatch({ type: actions.UPDATE_GENERATED_SETTINGS, payload: generatedSettings });
    });
  };
};

export const RandomiseSeed = () => {
  const randomSeed = new Date().getTime().toString();
  return SetSeed(randomSeed);
};
