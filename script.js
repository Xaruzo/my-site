// JavaScript for Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', function(e) {
        // Remove preventDefault() for real downloads
        // e.preventDefault(); // Comment this out for production
        
        // Optional: Confirm and track
        if (confirm('Download Smart Health Record Management System v2.1.0? (File size: 150MB)')) {
            // Track download (e.g., via Google Analytics or server log)
            console.log('Download initiated');
            gtag?.('event', 'download', { 'event_category': 'engagement', 'event_label': 'SHRMS Download' }); // If using GA
            
            // For third-party: You could open in new tab if needed
            // window.open(this.href, '_blank');
        } else {
            e.preventDefault();
        }
    });

    // Smooth scroll for other anchors (unchanged)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.id !== 'downloadBtn') { // Skip download btn
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
