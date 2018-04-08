import * as actions from "./actionTypes";
import * as synth from "../../synth/synth";

const initialState = { seed: "yeah", playButtonText: "Play", generatedSettings: null, isPlaying: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SYNTH_PLAY: {
      state = { ...state, generatedSettings: action.payload, playButtonText: "Stop", isPlaying: true };
      break;
    }

    case actions.SYNTH_STOP: {
      synth.stop();
      state = { ...state, playButtonText: "Play", isPlaying: false };
      break;
    }

    case actions.UPDATE_SEED: {
      const newSeed = action.payload;
      state = { ...state, seed: newSeed };
      break;
    }

    case actions.UPDATE_GENERATED_SETTINGS: {
      const generatedSettings = action.payload;
      state = { ...state, generatedSettings: generatedSettings };
      break;
    }

    case actions.ENVELOPE_VALUE: {
      state = { ...state, envelopeValues: { ...state.envelopeValues, [action.payload.key]: action.payload.value } };
      break;
    }
    default:
      break;
  }

  return state;
};
