document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
    
    // Validate form fields
    if (name === '' || rating === '' || comments === '') {
        alert('Please fill out all fields.');
        return;
    }
    
    // Create feedback elements
    const feedbackDisplay = document.getElementById('feedback-display');
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');
    
    const feedbackName = document.createElement('h3');
    feedbackName.textContent = `Name: ${name}`;
    
    const feedbackRating = document.createElement('p');
    feedbackRating.textContent = `Rating: ${rating}`;
    
    const feedbackComments = document.createElement('p');
    feedbackComments.textContent = `Comments: ${comments}`;
    
    feedbackItem.appendChild(feedbackName);
    feedbackItem.appendChild(feedbackRating);
    feedbackItem.appendChild(feedbackComments);
    
    feedbackDisplay.appendChild(feedbackItem);
    
    // Clear form fields
    document.getElementById('feedback-form').reset();
});
