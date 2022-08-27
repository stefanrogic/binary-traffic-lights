import { COLORS } from '../config';

class TraficLight {
  private elements: any = document.querySelectorAll('.tlight');

  public repeat(f: any, s: number) {
    return setInterval(f, s * 1000);
  }

  public yellow() {
    this.elements.forEach((el: any) => el.classList.add('yellow'));
  }

  private clear() {
    this.elements.forEach((el: any) => {
      el.classList.remove('yellow', 'red', 'green');
    });
  }

  public renderColors(binary: string) {
    this.clear();
    const numArr: string[] = binary.split('');
    this.elements.forEach((el: any, elIndex: number) =>
      numArr
        .find((_, numIndex: number) => numIndex === elIndex)
        ?.includes(String(COLORS.indexOf('red')))
        ? el.classList.add(COLORS[0])
        : el.classList.add(COLORS[1])
    );
  }
}

export default new TraficLight();
