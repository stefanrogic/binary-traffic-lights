'using strict';

const semafori = document.querySelectorAll(`.semafor`);
let bnr = ``;

// Objekat semafor
const semafor = {
  start: () => {
    semafori.forEach(semafor => semafor.classList.add(`zuto`));
  },

  nasumicanBroj: () => {
    const NBroj = new XMLHttpRequest();

    NBroj.open(
      `GET`,
      `https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new`,
      true
    );

    NBroj.onload = function () {
      if (NBroj.status === 200) {
        const dek = JSON.parse(this.response);
        pretvaranjeDekBin(dek);
      }
    };
    NBroj.send();
  },

  promena: () => {
    semafori.forEach((semafor, i) => {
      if (bnr[i] === `0`) {
        semafor.classList.remove(`zuto`, `zeleno`);
        semafor.classList.add(`crveno`);
      } else {
        semafor.classList.remove(`crveno`, `zuto`);
        semafor.classList.add(`zeleno`);
      }
    });
  },

  zuto: () => {
    semafori.forEach(semafor => {
      semafor.classList.remove(`crveno`, `zeleno`);
      semafor.classList.add(`zuto`);
    });
  },
};

const pretvaranjeDekBin = broj => {
  // Pretvara dekadni broj u binarni
  bnr = Number(broj).toString(2);

  // Pretvara u osam bita
  while (bnr.length < 8) {
    bnr = `0` + bnr;
  }
  console.log({ status: `Uspesno pretvaranje.`, dekadni: broj, binarni: bnr });
};
semafor.start();

const pokretanje = () => {
  semafor.zuto();
  semafor.nasumicanBroj();

  return Promise.resolve(
    setTimeout(() => {
      semafor.promena();
    }, 200)
  );
};

setInterval(() => {
  pokretanje().then();
}, 1000);
