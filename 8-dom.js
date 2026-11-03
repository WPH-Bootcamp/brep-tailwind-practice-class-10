// 1. DOM SELECTION
/**
 * -. document.getElementById()
 * -. document.getElementsByClassName()
 * -. document.getElementsByTagName()
 * -. document.querySelector()
 * -. document.querySelectorAll()
 */

// 1. document.getElementById()
const container = document.getElementById('container');
console.log(container);

// 2. document.getElementsByClassName()
const text = document.getElementsByClassName('text');
console.log(text);

// 3. document.getElementsByTagName()
const h1 = document.getElementsByTagName('h1');
console.log(h1);

// 4. document.querySelector()
const judul = document.querySelector('h1');
console.log(judul);

// 5. document.querySelectorAll()
const judulSemua = document.querySelectorAll('h1');
console.log(judulSemua);

// 2. DOM MANIPULATION
// -. Mengubah Konten
container.textContent = 'Hello duniahh';

// -. Mengubah Attribute
container.setAttribute('class', 'dark');
console.log(container);

container.removeAttribute('class');
console.log(container);

console.log(container.getAttribute('id'));

// -. Mengubah Style
container.style.fontSize = '20px';
container.style.backgroundColor = 'red';
container.style.color = 'white';
container.style.padding = '20px';
container.style.fontFamily = 'arial';

// 3. MEMBUAT DAN MENGHAPUS ELEMENT
// -. Membuat element
const div = document.createElement('div');
div.textContent = 'INI BARU LOHHH';

const body = document.getElementById('body');
body.append(div);

div.remove();

// 4. Event Handling
const button = document.getElementById('btn');
button.addEventListener('click', function (event) {
  alert('saya di klikk');
  console.log(event.target);
});
