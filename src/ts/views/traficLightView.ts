import { COLORS } from '../config';

class TraficLight {
  private elements: any = document.querySelectorAll('.tlight');
  private errorMessage: string = "We can't get a number at the momment.";

  public yellow() {
    this.elements.forEach(el => el.classList.add('yellow'));
  }

  private clear() {
    this.elements.forEach(el => {
      el.classList.remove('yellow', 'red', 'green');
    });
  }

  public renderColors(binary: string) {
    this.clear();
    const numArr: string[] = binary.split('');
    this.elements.forEach((el: any, elIndex: number) =>
      // numArr[elIndex].includes('0')
      //   ? el.classList.add(COLORS.zero)
      //   : el.classList.add(COLORS.one)

      numArr.find((_, numIndex: number) => numIndex === elIndex)?.includes('0')
        ? el.classList.add(COLORS.zero)
        : el.classList.add(COLORS.one)
    );
  }
}

export default new TraficLight();
