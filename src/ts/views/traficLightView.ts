import { COLORS } from '../config';

class TraficLight {
  private elements: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.tlight');

  // REPEATS A FUNCTION(F) EVERY SECOND/S(S)
  public repeat(f: any, s: number) {
    return setInterval(f, s * 1000);
  }

  // TURNS ALL TRAFIC LIGHTS YELOW
  public yellow() {
    this.clear();
    this.elements.forEach(
      (el: HTMLDivElement) => el.classList.add(COLORS[2]) // 2 IS AN INDEX OF YELLOW IN COLORS ARRAY (config.ts)
    );
  }

  // CLEARS ALL CLASSES AND NUMBERS FROM TRAFIC LIGHTS
  private clear() {
    this.elements.forEach((el: HTMLDivElement) => {
      COLORS.map((color: string) => {
        el.classList.remove(color);
        el.innerHTML = '';
      });
    });
  }

  // RENDERS NUMBER INSIDE A TRAFIC LIGHT
  private renderNumber(el, num) {
    return (el.innerHTML = `<p class="num">${num}</p>`);
  }

  // RENDERS COLOR DEPENDING TO A NUMBER
  public renderColor(binary: string) {
    const numArr: number[] = binary.split('').map((num: string) => Number(num));
    this.elements.forEach((el: HTMLDivElement, elIndex: number) =>
      numArr.find(
        (num: number, numIndex: number) =>
          numIndex === elIndex &&
          this.renderNumber(el, num) &&
          el.classList.add(COLORS[num]) // 0 FOR RED AND 1 FOR GREEN - INDEXES IN COLORS ARRAY (config.ts)
      )
    );
  }
}

export default new TraficLight();
