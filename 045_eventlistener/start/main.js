const h1Element = document.querySelector('h1');
console.log(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

const btnEl = document.querySelector('button');
const helloFn = (e) => {
    console.log(e.target.textContent);
    console.log('Hello');
};
btnEl.addEventListener('click', helloFn)