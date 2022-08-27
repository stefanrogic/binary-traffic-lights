import { TIMEOUT_SEC } from './config';

interface timeoutInterface {
  (s: number);
}

interface getJSONInterface {
  (url: string);
}

const timeout: timeoutInterface = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
