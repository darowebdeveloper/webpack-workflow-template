console.log('dome.js file');

const body = document.querySelector('body');

export const styleBody = () => {
  body.style.background = 'teal';
};

export const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

export const contact = "Phan daro at Nz."
// Or using this syntax export {styleBody, addTitle, contact};