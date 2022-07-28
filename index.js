class Tag {
  constructor(name) {
    this.name = name;
    this.classNames = [];
    this.children = [];
  }
  querySelector = (targetClassName, cur = this) => {
    for (const child of cur.children) {
      const childTemp = this.querySelector(targetClassName, child);
      if (childTemp !== null) {
        return childTemp;
      }
    }

    const hasTarget = cur.classNames.includes(targetClassName);
    if (hasTarget) {
      return cur;
    }
    return null;
  };

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
imgTag.addClass('image-here');
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

console.log('querySelector ');
const targetNode = tag.querySelector('main-content');
console.log(targetNode.print());

console.log('querySelector 2');
const targetNode2 = tag.querySelector('image-here');
console.log(targetNode2.print());
//  <div class="main-content">
// #        <span class="some-other-content"></span>
// #        <p class="some-other-content">
// #      </div>
