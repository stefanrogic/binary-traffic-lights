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
    const numArr = binary.split('');
    console.log(numArr);
    this.elements.forEach((el, i) => {
      if (numArr[i] === '0') el.classList.add(COLORS.zero);
      if (numArr[i] === '1') el.classList.add(COLORS.one);
    });
  }
}

export default new TraficLight();
