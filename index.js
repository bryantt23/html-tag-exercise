class Tag {
  constructor(name) {
    this.name = name;
    this.classNames = [];
    this.children = [];
  }
  print = (cur = this, prefix = '') => {
    let childrenPrinted = '';
    for (const child of cur.children) {
      childrenPrinted += this.print(child, '   ' + prefix);
    }

    const classTemp =
      cur.classNames.length === 0 ? '' : ` class="${cur.classNames.join(' ')}"`;
    return `
    ${prefix}<${cur.name}${classTemp}>${childrenPrinted}
    ${prefix}</${cur.name}>`;
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
const imgTag = new Tag('img');
const pTag = new Tag('p');
const pTag2 = new Tag('p');
divTag.appendChild(pTag2);
tag.appendChild(bodyTag);
tag.appendChild(pTag);
bodyTag.appendChild(divTag);
bodyTag.appendChild(imgTag);
tag.addClass('third-class');
bodyTag.addClass('body-class');
console.log(tag.print()); //<html class="blue-theme"><body></body></html>'
//'<html class="blue-theme"><body><div></div></body></html>';
