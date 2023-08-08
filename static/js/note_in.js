var note_btn = document.querySelector('#cls-container > a');
var note_btn_svg = note_btn.querySelector('svg');
var note_wrapper = document.querySelector('.note-wrapper');


note_btn.addEventListener('click', function(e) {
    note_wrapper.classList.remove('nw-active');
});

note_btn.addEventListener('mouseover', function(e){
    note_btn_svg.classList.add('cls-btn-svg-actv');
});

note_btn.addEventListener('mouseout', function(e){
    note_btn_svg.classList.remove('cls-btn-svg-actv');
});