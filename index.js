alert('hii');

class Tag {
  constructor(name) {
    this.name = `<${name}></${name}/>`;
  }
  print = () => {
    return this.name;
  };
}

const tag = new Tag('html');
console.log(tag.print()); //<html></html>
