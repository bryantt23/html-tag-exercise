class Tag {
  constructor(tag) {
    this.tag = tag;
    this.classList = [];
    this.childNodes = [];
  }
  querySelector = (selector, cur = this, pos = 0) => {
    if (cur.classList.indexOf(selector[pos]) > -1) {
      //last element
      if (pos === selector.length - 1) {
        return cur;
      } else {
        for (const child of cur.childNodes) {
          const res = this.querySelector(selector, child, pos + 1);
          if (res) {
            return res;
          }
        }
      }
    }
    for (const child of cur.childNodes) {
      const res = this.querySelector(selector, child, pos);
      if (res) {
        return res;
      }
    }
  };
  print = (cur = this, indentation = '') => {
    if (cur.tag === 'img') {
      const classTemp =
        cur.classList.length === 0 ? '' : ` class="${cur.classList.join(' ')}"`;
      const res = `
      ${indentation}<${cur.tag}${classTemp}>`;
      return res;
    }

    const children =
      cur.childNodes.length === 0
        ? ''
        : `${indentation}${indentation}${cur.childNodes
            .map(child => this.print(child, indentation + '     '))
            .join(``)}`;

    const classTemp =
      cur.classList.length === 0 ? '' : ` class="${cur.classList.join(' ')}"`;
    const res = `
${indentation}<${cur.tag}${classTemp}>${children}
${indentation}</${cur.tag}>`;
    return res;
  };
  addClass = className => {
    this.classList.push(className);
  };
  appendChild = child => {
    this.childNodes.push(child);
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
bodyTag.appendChild(pTag);
bodyTag.appendChild(divTag);
bodyTag.appendChild(imgTag);
tag.addClass('third-class');
bodyTag.addClass('body-class');

console.log(tag.print());
/*
<html class="blue-theme main-content third-class">
  <body class="body-class">
    <p></p>
    <div>
      <p></p>
    </div>
    <img class="image-here">
  </body>
</html>
*/

console.log('querySelector 1');
const targetNode = tag.querySelector(['main-content']);
console.log(targetNode.print());

console.log('querySelector 2');
const targetNode2 = tag.querySelector(['image-here']);
console.log(targetNode2.print());

{
  const htmlTag = new Tag('html');
  const bodyTag = new Tag('body');
  const divTag = new Tag('div');
  const spanTag = new Tag('span');
  const pTag = new Tag('p');

  // Add classes to the tags
  divTag.addClass('main-content');
  spanTag.addClass('some-other-content');
  pTag.addClass('some-other-content');

  // Append child nodes
  htmlTag.appendChild(bodyTag);
  bodyTag.appendChild(divTag);
  divTag.appendChild(spanTag);
  divTag.appendChild(pTag);

  // Print the tag
  console.log(htmlTag.print());
  /*
   <html>
   <body>
      <div class="main-content">
        <span class="some-other-content"></span>
        <p class="some-other-content">
      </div>
   </body>
 </html>
 */

  console.log('querySelector 3');
  const targetNode3 = htmlTag.querySelector([
    'main-content',
    'some-other-content'
  ]);
  console.log(targetNode3.print());
  //  should print '<span class="some-other-content"></span>'
}
