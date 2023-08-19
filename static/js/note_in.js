const note_btn = document.querySelector('#close-btn');
const note_wrapper = document.querySelector('.note-wrapper');

note_btn.addEventListener('click', function(e) {
    note_wrapper.classList.remove('nw-active');
});

const font_btn = document.querySelector('#font-btn');
const note_txt = document.querySelector('#note-text');
const note_hdr = document.querySelector('.note-header > h2');
const switchMap = {
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

var noteDate = document.querySelector('#note-date');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'};
var now = new Date();
noteDate.textContent = now.toLocaleDateString('en-AE', options);
// noteDate.textContent = 'Thursday, 17 August 2023 at 09:00 AM GST';
