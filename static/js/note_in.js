var note_btn = document.querySelector('#close-btn');
var note_wrapper = document.querySelector('.note-wrapper');

note_btn.addEventListener('click', function(e) {
    note_wrapper.classList.remove('nw-active');
});

var font_btn = document.querySelector('#font-btn');
var note_txt = document.querySelector('#note-text');
var note_hdr = document.querySelector('.note-header > h2');
var switchMap = {
    'f-caveat-b': 'f-toggled-b',
    'f-toggled-b': 'f-caveat-b',
    'f-caveat': 'f-toggled',
    'f-toggled': 'f-caveat',
};

font_btn.addEventListener('click', function(e){
    [font_btn, note_txt, note_hdr].forEach(element => {
        element.classList.forEach(cls => {
            if (switchMap.hasOwnProperty(cls)){
                element.classList.remove(cls)
                element.classList.add(switchMap[cls]);
            }
        });
    });
});