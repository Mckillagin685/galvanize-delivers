

// $('input[type="submit"]').on('click', function(event){
//
// })

// $('input[type="submit"]').on('click', function(event){
//
//   const name = $('input[name="name"]').val();
//   const phone = $('input[name="phone_number"]').val();
//   const addr = $('input[name="address"]').val();
//
// console.log(name);
// console.log(phone);
// console.log(addr);
//
//   $('input[name="name"]').val('');
//   $('input[name="phone_number"]').val();
//   $('input[name="address"]').val('');
// })

// using iife to protect scope
(() => {
  'use strict';

  const fields = [];

  fields.push($('input[name="firstName"]'));
  fields.push($('input[name="lastName"]'));
  fields.push($('input[name="phone_number"]'));
  fields.push($('input[name="address"]'));

  // adding an event listener
  $('.food').on('click', (event) => {
    event.preventDefault();

    if(fields.length) {
      // remove tbody and thead if any
      const itemTable = $('#items');

      // creating thead and tbody elements
      const $tbody = $('<tbody>');

      // creating th, adding text, and appending it to the tr element
      const $col1 = $('<th>');
      $col1.text();
      $tr.append($col1);

      // creating th, adding text, and appending it to the tr element
      const $col2 = $('<th>');
      col2.textContent = "value";
      tr.appendChild(col2);

      // for each element in the array fields
      for(const field of fields) {
        // create tr element
        const tr = document.createElement('tr');

        // create td, adding text, ajd appending to tr
        const tag = document.createElement('td');
        tag.textContent = field.tagName;
        tr.appendChild(tag);

        // create td, adding text, ajd appending to tr
        const tagType = document.createElement('td');
        tagType.textContent = field.type;
        tr.appendChild(tagType);

        // create td, adding text, ajd appending to tr
        const tagName = document.createElement('td');
        tagName.textContent = field.name;
        tr.appendChild(tagName);

        // create td, adding text, ajd appending to tr
        const tagValue = document.createElement('td');
        tagValue.textContent = field.value;
        tr.appendChild(tagValue);

        // appending tr to tbody
        tbody.appendChild(tr);
      };

      //appending thead to table
      table.appendChild(thead);

      // appending tbody to table
      table.appendChild(tbody);
    }
  })
})();
