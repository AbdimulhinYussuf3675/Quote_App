const quoteLink = document.getElementById('library');
const quoteStore = document.getElementById('quoteStore');
const addQuote = document.getElementById('addQuote');
const addLink = document.getElementById('addLink');
const contactLink = document.getElementById('contactLink');
const contact = document.getElementById('contact');
const addbtn1 = document.getElementById('addbtn1');

addbtn1.addEventListener('click', () => {
  addQuote.style.display = 'block';
  contact.style.display = 'none';
  quoteStore.style.display = 'none';
});
quoteLink.addEventListener('click', () => {
  quoteStore.style.display = 'block';
  addQuote.style.display = 'none';
  contact.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  contact.style.display = 'block';
  quoteStore.style.display = 'none';
  addQuote.style.display = 'none';
});

addLink.addEventListener('click', () => {
  addQuote.style.display = 'block';
  contact.style.display = 'none';
  quoteStore.style.display = 'none';
});

export default quoteLink;