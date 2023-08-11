function generatePDF() {
    // alert('Sorry, I was too lazy to complete this feature 😛');
    // return;
    
    // Create a new instance of jsPDF
    const doc = new jsPDF();
    const title = document.querySelector('.note-header > h2').textContent;
    
    doc.text(title, 10, 10);

    // Save the PDF
    doc.save('sample.pdf');
}

var download_btn = document.querySelector('#download-btn');
download_btn.addEventListener('click', function(e){
    generatePDF();
}); 