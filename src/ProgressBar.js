class ProgressBar {
  constructor(element, initialValue = 0) {
    this.valueElemem = element.querySelector(".progress-bar-value");
    this.fillElemem = element.querySelector(".progress-bar-fill");
    this.setValue(initialValue);
  }

  setValue(initialValue) {
    if (initialValue < 0) {
      this.initialValue = 0;
    }

    if (initialValue > 100) {
      this.initialValue = 100;
    }

    this.value = initialValue;
    this.update();
  }

  update() {
    const percentage = this.value + "%";
    this.valueElemem.textContent = percentage;
    this.fillElemem.style.width = percentage;
  }
}
