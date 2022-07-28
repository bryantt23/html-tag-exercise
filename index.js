class Tag {
  constructor(name) {
    this.name = name;
    this.classNames = [];
  }
  print = () => {
    const classTemp =
      this.classNames.length === 0
        ? ''
        : ` class="${this.classNames.join(' ')}"`;
    return `<${this.name}${classTemp}></${this.name}>`;
  };
  addClass = className => {
    this.classNames.push(className);
  };
}

const tag = new Tag('html');
console.log(tag.print()); //<html></html>

tag.addClass('blue-theme');
console.log(tag.print()); //<html class="blue-theme main-content"></html>
