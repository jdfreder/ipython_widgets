window.onload = function() {
  Array.prototype.forEach.call(document.querySelectorAll('a'), function (a) {
    a.href = a.href.replace(/\.md$/, '.html');
  });
};
