// IMPORT
import { getJSON } from './helpers';
import { API_URL, BINARY_LENGTH } from './config';

// INTERFACE
interface StateInterface {
  decimalNum: number;
  binaryNum: string;
}

// OBJECT
export const State: StateInterface = {
  decimalNum: 0,
  binaryNum: '00000000',
};

// GENERATES RANDOM NUMBER WITH JSON REQUEST
// STORES IT IN STATE OBJECT
export const generateNumber = async function () {
  try {
    const data: number = await getJSON(API_URL);
    State.decimalNum = data;
  } catch (err) {
    throw err;
  }
};

// CONVERTS GENERATED DECIMAL NUMBER INTO BINARY
// STORES IT IN STATE OBJECT
// CHANGES HASH TO THAT BINARY NUMBER
export const convertNumber = function () {
  const binaryShort: string = Number(State.decimalNum).toString(2);
  const length: number = BINARY_LENGTH - binaryShort.length;
  State.binaryNum = `${'0'.repeat(length)}${binaryShort}`;
  window.location.hash = `${State.binaryNum}=${State.decimalNum}`;
};
