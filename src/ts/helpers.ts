// IMPORTS
import { TIMEOUT_SEC } from './config';

// INTERFACES
interface timeoutInterface {
  (s: number);
}

interface getJSONInterface {
  (url: string);
}

// TIMES OUT JSON REQUEST AFTER TIMEOUT_SEC (config.ts)
const timeout: timeoutInterface = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// SENDS JSON REQUEST
// RACES WITH TIMEOUT FUNCTION
// RETURNS DATA (model.ts)
export const getJSON: getJSONInterface = async function (url) {
  try {
    const res: any = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data: number = await res.json();
    if (!res.ok) throw new Error(`${res.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
