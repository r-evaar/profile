var note_wrapper = document.querySelector('.note-wrapper');
var note_btn = document.querySelector('#cover-main > div > div.note-btn > a');

note_btn.addEventListener('click', function(e) {
    note_wrapper.classList.add('nw-active');
    $(function() {$.get('static/html/note.html', function(data) {$('.note-paper').html(data);});});
});
