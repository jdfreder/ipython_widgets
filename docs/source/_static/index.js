window.onload = function() {
  // TODO: See if md parsing conf can do this, or extension (compile time)
  Array.prototype.forEach.call(document.querySelectorAll('a'), function (a) {
    a.href = a.href
      .replace(/\.md$/, '.html')
      .replace(/\.ipynb$/, '.html');
  });

  document.querySelector('form input[type=text]').className = 'form-control input-lg';
  
  // TODO: Put this in the template
  document.querySelector('#pageheader a').innerText = 'ipywidgets and jupyter-js-widgets ';
};
