

function updateTextContentOnDOMContentLoaded() {
   
    document.addEventListener('DOMContentLoaded', function () {
   
      let paragraphElement = document.querySelector('p');
  
      
      if (paragraphElement) {
       
        paragraphElement.textContent = "This is really cool!";
      }
    });
  }
  
 
  updateTextContentOnDOMContentLoaded();
  