import { getJSON } from './helpers';
import { API_URL } from './config';
import { BINARY_LENGTH } from './config';

export const State = {
  decimalNum: 0,
  binaryNum: '00000000',
};

export const generateNumber = async function () {
  try {
    const data = await getJSON(API_URL);
    State.decimalNum = data;
  } catch (err) {
    throw err;
  }
};

export const convertNumber = function () {
  const binaryShort = Number(State.decimalNum).toString(2);
  const length = BINARY_LENGTH - binaryShort.length;
  State.binaryNum = `${'0'.repeat(length)}${binaryShort}`;
};
