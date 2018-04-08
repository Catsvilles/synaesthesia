import * as utils from "../../../utils";

export default p => {
  const size = 100;

  let kickPos;
  let bassPos;
  let kickEnv = 0;
  let bassEnv = 0;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.fill(255);
    kickPos = {
      x: utils.randomIntBetween(0, p.windowWidth),
      y: utils.randomIntBetween(0, p.windowHeight)
    };
    bassPos = {
      x: utils.randomIntBetween(0, p.windowWidth),
      y: utils.randomIntBetween(0, p.windowHeight)
    };
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.envelopeValues) {
      kickEnv = props.envelopeValues.KickDrum;
      //bassEnv = props.envelopeValues.bass;
    }
  };

  p.draw = function() {
    p.background("rgba(0,0,0, 0)");
    // p.noStroke();
    //p.push();
    //p.rotateY(size * env);
    // p.rect(0, 0, size * env, size * env);

    p.stroke("#fff");
    p.fill("#fff");
    p.ellipse(kickPos.x, kickPos.y, size * kickEnv, size * kickEnv);

    // p.stroke("#fff");
    // p.fill("#fff");
    p.ellipse(bassPos.x, bassPos.y, size * bassEnv, size * bassEnv);

    //p.pop();
  };
};
