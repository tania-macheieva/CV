document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-cv-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() { 
            const pdfUrl = './files/Tania_Macheieva_CV.pdf';
            
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Tania_Macheieva_CV.pdf';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});