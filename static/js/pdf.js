function compilePDF(){

const pdf = new jsPDF('portrait', 'px', 'letter');

const note = document.querySelector('#paper');

const title = note.querySelector('h2');
const paragraphs = note.querySelectorAll('#note-text > p');
const date = note.querySelector('#note-date');

const margin = 30;
const docHeight = pdf.internal.pageSize.getHeight();
const docWidth = pdf.internal.pageSize.getWidth();

function getNumberFromAttr(style, attribute) {
    return parseFloat(
        style[attribute].match(/\d+(\.\d+)?/)[0]
    );
};

var splitOpts = {
    lineBreak: '\n',
    direction: 'ltr'
};

function getColorValues(colorString) {
    const color = /rgb\((\d+),\s(\d+),\s(\d+)/.exec(colorString);

    if (color) {
    const r = parseInt(color[1], 10);
    const g = parseInt(color[2], 10);
    const b = parseInt(color[3], 10);

    return { r, g, b };
    } else {
    return undefined;
    }
}

const inlineFactor = 0.25;
var prevBot = 0;
function printLine(lineElement) {
    var style = getComputedStyle(lineElement);
    var marginTop = getNumberFromAttr(style, 'margin-top');
    var padTop = getNumberFromAttr(style, 'padding-top');
    var marginBot = getNumberFromAttr(style, 'margin-bottom');
    var padBot = getNumberFromAttr(style, 'padding-bottom');

    var fontSize = getNumberFromAttr(style, 'font-size')*0.8;
    var lineHeight = getNumberFromAttr(style, 'line-height');
    var fontFamily = style['font-family'];
    var fontWeight = style['font-weight'];
    var color = getColorValues(style['color']);

    var textAlign = style['text-align'];

    pdf.setFont(fontFamily, fontWeight);
    pdf.setFontSize(fontSize);
    pdf.setTextColor(color.r,color.g,color.b);

    var parsedText = pdf
        .splitTextToSize(lineElement.textContent, docWidth-margin*2, splitOpts);
    
    y += Math.max(marginTop-prevBot, 0)*inlineFactor;
    prevBot = marginBot*inlineFactor;

    parsedText.forEach(line => {
        line = line.trim();
        if (line == ''){return;};

        if (y >= (docHeight-margin)){
            pdf.addPage();
            y = margin+pdf.getTextDimensions('A')['h'];
        };

        var tempX = x;
        if (textAlign != 'start'){
            textWidth = pdf.getStringUnitWidth(line) * fontSize / pdf.internal.scaleFactor;
            if (textAlign == 'center'){
                x = (docWidth-textWidth) / 2;
            } else if (textAlign == 'end') {
                x = docWidth-textWidth-margin;
            }
        }
        
        pdf.text(line, x, y);
        x = tempX;

        y += fontSize;
    });
    // pdf.text('[y='+Math.round(y)+', m='+marginBot+', fz='+fontSize+'] ', x, y); y += fontSize; // Debugging
    y += marginBot*inlineFactor;
};

var x = margin;
var y = margin+pdf.getTextDimensions('A')['h'];

printLine(title);
paragraphs.forEach(function(e){
    printLine(e);
});
printLine(date);

const download_btn = document.querySelector('#download-btn');
download_btn.addEventListener('click', function(){
    pdf.save('Note.pdf');
}); 

};