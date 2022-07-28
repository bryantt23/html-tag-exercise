class Tag {
  constructor(name) {
    this.name = name;
    this.classNames = [];
    this.children = [];
  }
  print = () => {
    let childrenPrinted = '';
    for (const child of this.children) {
      childrenPrinted += this.printHelper(child);
    }

    const classTemp =
      this.classNames.length === 0
        ? ''
        : ` class="${this.classNames.join(' ')}"`;
    return `<${this.name}${classTemp}>${childrenPrinted}</${this.name}>`;
  };
  printHelper = child => {
    const classTemp =
      child.classNames.length === 0
        ? ''
        : ` class="${child.classNames.join(' ')}"`;
    return `<${child.name}${classTemp}></${child.name}>`;
  };

  addClass = className => {
    this.classNames.push(className);
  };
  appendChild = child => {
    this.children.push(child);
  };
}

const tag = new Tag('html');
console.log(tag.print()); //<html></html>

tag.addClass('blue-theme');
console.log(tag.print()); //<html class="blue-theme"></html>

tag.addClass('main-content');
console.log(tag.print()); //<html class="blue-theme main-content"></html>

const bodyTag = new Tag('body');
const divTag = new Tag('div');
tag.appendChild(bodyTag);
// bodyTag.append_child(divTag);
console.log('nested?  ', tag.print()); //<html class="blue-theme"><body></body></html>'

//'<html class="blue-theme"><body><div></div></body></html>';
