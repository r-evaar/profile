fetch('static/assets/note/config.json')
  .then(response => response.json())
  .then(data => {

    const btnContainer = document.querySelector('.note-btn');
    const btn = document.createElement('a');
    btn.classList.add('animated-button');
    btnContainer.appendChild(btn);

    const anchor = document.querySelector('.animated-button');
    anchor.textContent = data['btn_name'];
    for (var i = 0; i < 4; i++) {
      var animation = document.createElement('span');
      anchor.appendChild(animation);
    }

    var note_wrapper = document.querySelector('.note-wrapper');

    btn.addEventListener('click', function(e) {
        note_wrapper.classList.add('nw-active');
        $(function() {$.get('static/html/note.html', function(data) {$('.note-paper').html(data);});});
    });

  })
  .catch(error => {
    // throw error;
    console.log('Note unavailable');
});

