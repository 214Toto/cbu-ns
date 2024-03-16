document.getElementById('one').addEventListener('click', function() {
  var content = document.getElementById('one-content');
  var title = document.getElementById('one-title');
  
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    title.classList.add('underlined');
  } else {
    content.style.display = 'none';
    title.classList.remove('underlined');
  }
});

document.getElementById('two').addEventListener('click', function() {
  var content = document.getElementById('two-content');
  var title = document.getElementById('two-title');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    title.classList.add('underlined');
  } else {
    content.style.display = 'none';
    title.classList.remove('underlined');
  }
});
document.getElementById('three').addEventListener('click', function() {
  var content = document.getElementById('three-content');
  var title = document.getElementById('three-title');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    title.classList.add('underlined');
  } else {
    content.style.display = 'none';
    title.classList.remove('underlined');
  }
});

document.getElementById('four').addEventListener('click', function() {
  var content = document.getElementById('four-content');
  var title = document.getElementById('four-title');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    title.classList.add('underlined');
  } else {
    content.style.display = 'none';
    title.classList.remove('underlined');
  }
});

document.getElementById('five').addEventListener('click', function() {
  var content = document.getElementById('five-content');
  var title = document.getElementById('five-title');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    title.classList.add('underlined');
  } else {
    content.style.display = 'none';
    title.classList.remove('underlined');
  }
});