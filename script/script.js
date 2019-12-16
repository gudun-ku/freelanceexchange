document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const customer = document.getElementById('customer');
  const freelancer = document.getElementById('freelancer');

  const blockCustomer = document.getElementById('block-customer');
  const blockFreelancer = document.getElementById('block-freelancer');
  const blockChoice = document.getElementById('block-choice');
  const btnExit = document.getElementById('btn-exit');
  const formCustomer = document.getElementById('form-customer');

  const orders = [];

  customer.addEventListener('click', () => {
    //console.dir(blockCustomer);
    blockFreelancer.style.display = 'none';
    blockCustomer.style.display = 'block';
    blockChoice.style.display = 'none';
    btnExit.style.display = 'block';
  });

  freelancer.addEventListener('click', () => {
    blockCustomer.style.display = '';
    blockFreelancer.style.display = 'block';
    blockChoice.style.display = 'none';
    btnExit.style.display = 'block';
  });

  btnExit.addEventListener('click', () => {
    blockFreelancer.style.display = 'none';
    blockCustomer.style.display = 'none';
    blockChoice.style.display = 'block';
    btnExit.style.display = 'none';
  });

  formCustomer.addEventListener('submit', e => {
    e.preventDefault();

    const obj = {};

    for (const elem of formCustomer.elements) {
      if (
        (elem.tagName === 'INPUT' && elem.type !== 'radio') ||
        (elem.type === 'radio' && elem.checked) ||
        elem.tagName === 'TEXTAREA'
      ) {
        obj[elem.name] = elem.value;
      }

      if (elem.type !== 'radio') {
        elem.value = '';
      }
    }

    console.log(obj);
    orders.push(obj);
  });
});
