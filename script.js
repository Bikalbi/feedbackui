const feedbackElements = document.querySelectorAll('.feedback');
const submitBtn = document.getElementById('btn');
const thankYouMessage = document.getElementById('thankyou');
const feedbackOptions = document.querySelector('.feedbackbox');
const feedbackTitle = document.getElementById('feedbackTitle');
const selectedFeedbackMessage = document.getElementById('selectedmessg');

let selectedFeedback = ''; 

feedbackElements.forEach(function (feedback) {
    feedback.onclick = function () {
      
      feedbackElements.forEach(function (el) {
        el.classList.remove('active');
      });
  
    
      feedback.classList.add('active');
  
   
      selectedFeedback = feedback.dataset.feedback;
    };
  });



  submitBtn.onclick = function () {
    if (selectedFeedback) {
      
      thankYouMessage.style.display = 'block';
      selectedFeedbackMessage.textContent = `You selected: ${selectedFeedback}`;
  
      
      feedbackOptions.style.display = 'none';
      feedbackTitle.style.display = 'none';
    } else {
      alert('Please select a feedback option before submitting!');
    }
  };