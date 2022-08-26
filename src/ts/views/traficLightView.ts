class TraficLight {
  private elements = document.querySelectorAll('.tlight');
  private errorMessage = "We can't get a number at the momment.";

  public red(element) {
    element.classList.remove('yellow', 'green');
    element.classList.add('red');
  }

  public yellow() {
    this.elements.forEach(el => el.classList.add('yellow'));
  }

  public green(element) {
    element.classList.remove('yellow', 'red');
    element.classList.add('green');
  }

  public changeLights(number) {
    const numArr = number.split('');
    this.elements.forEach((el, i) =>
      numArr[i] === '0' ? this.red(el) : this.green(el)
    );
  }
}

export default new TraficLight();
