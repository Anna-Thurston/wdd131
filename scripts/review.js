window.onload = function() {
    // Get the current review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    
    // Increment the count
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display the updated count
    document.getElementById('reviewCount').textContent = `Total Reviews Submitted: ${reviewCount}`;
};