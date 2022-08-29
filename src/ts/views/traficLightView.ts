import { COLORS } from '../config';

class TraficLight {
  private elements: any = document.querySelectorAll('.tlight');

  // REPEATS ANY FUNCTION
  public repeat(f: any, s: number) {
    return setInterval(f, s * 1000);
  }

  // TURNS ALL TRAFIC LIGHTS YELOW
  public yellow() {
    this.elements.forEach((el: any) => el.classList.add(COLORS[2]));
  }

  // CLEARS ALL CLASSES FROM TRAFIC LIGHTS
  private clear() {
    this.elements.forEach((el: any) => {
      el.classList.remove(COLORS[0], COLORS[1], COLORS[2]);
    });
  }

  // RENDERS COLOR ACCORDING TO A NUMBER
  public renderColors(binary: string) {
    this.clear();
    const numArr: string[] = binary.split('');
    this.elements.forEach((el: any, elIndex: number) =>
      numArr
        .find((_, numIndex: number) => numIndex === elIndex)
        ?.includes(String(COLORS.indexOf(COLORS[0])))
        ? el.classList.add(COLORS[0])
        : el.classList.add(COLORS[1])
    );
  }
}

export default new TraficLight();
