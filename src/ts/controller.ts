// IMPORTS
import * as model from './model';
import traficLightView from './views/traficLightView';

const controllTraficLight = async function () {
  try {
    // (0) GENERATE NEW RANDOM DECIMAL NUMBER
    traficLightView.yellow();
    await model.generateNumber();

    // (1) CONVERT DECIMAL NUMBER TO BINARY
    model.convertNumber();

    // (2) CHANGE LIGHTS ACCORDING TO NUMBER
    traficLightView.renderColor(model.State.binaryNum);
  } catch (err) {
    console.log(err);
  }
};

// ON START
const init = () => {
  traficLightView.repeat(controllTraficLight, 1);
};
init();
