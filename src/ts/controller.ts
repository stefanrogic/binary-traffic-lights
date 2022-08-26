import * as model from './model';
import traficLightView from './views/traficLightView';

const controllTraficLight = async function () {
  try {
    // (0) GENERATE NEW RANDOM DECIMAL NUMBER
    await model.generateNumber();

    // (1) CONVERT DECIMAL NUMBER TO BINARY
    model.convertNumber();
  } catch (err) {
    console.log(err);
  }
};

const init = () => {
  controllTraficLight();
};
init();
