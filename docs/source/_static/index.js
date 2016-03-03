window.onload = function() {
  Array.prototype.forEach.call(document.querySelectorAll('a'), function (a) {
    a.href = a.href.replace(/\.md$/, '.html');
  });
  
  document.querySelector('form input[type=text]').className = 'form-control input-lg';
  
  // TODO: Put this in the template
  document.querySelector('#pageheader a').innerText = 'ipywidgets and jupyter-js-widgets ';
};
