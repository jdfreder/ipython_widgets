const widgets = require('jupyter-js-widgets');

window.onload = function() {
  // TODO: See if md parsing conf can do this, or extension (compile time)
  Array.prototype.forEach.call(document.querySelectorAll('a'), a => {
    a.href = a.href
      .replace(/\.md$/, '.html')
      .replace(/\.ipynb$/, '.html');
  });

  console.log(widgets);

  // // TODO: Put this in the template
  // document.querySelector('#pageheader a').innerText = 'ipywidgets and jupyter-js-widgets ';

  // $('body').scrollspy({
  //   target: '.bs-docs-sidebar',
  //   offset: 40
  // });
  //
  //
  // var relations = document.querySelector('.nav.navbar-nav');
  // var search = relations.nextElementSibling;
  // search.remove();
  // relations.parentElement.insertBefore(search,relations);
  // relations.classList.add('navbar-right');
};
