import * as appConstants from "../../constants";
import * as moduleConstants from "./constants";

const prefix = `${appConstants.APP_NAME}/${moduleConstants.MODULE_NAME}/`;

export const PLAY_BUTTON_CLICK = prefix + "PLAY_BUTTON_CLICK";
export const SYNTH_PLAY = prefix + "SYNTH_PLAY";
export const SYNTH_STOP = prefix + "SYNTH_STOP";
export const UPDATE_SEED = prefix + "UPDATE_SEED";
export const UPDATE_GENERATED_SETTINGS = prefix + "UPDATE_GENERATED_SETTINGS";
export const SET_SONG = prefix + "SET_SONG";
export const CHANGE_IMAGE = prefix + "CHANGE_IMAGE";
export const SET_IMAGE_PAGECOUNT = prefix + "SET_IMAGE_PAGECOUNT";
export const IMAGES_FOUND = prefix + "IMAGES_FOUND";
export const SELECT_NEXT_IMAGE = prefix + "SELECT_NEXT_IMAGE";
export const CLEAR_IMAGES = prefix + "CLEAR_IMAGES";