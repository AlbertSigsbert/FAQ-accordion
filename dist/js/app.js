//Select DOM items
const faq = document.querySelector('.faq');

//Set initial state of the content
let showContent = false;

//Add Event Listener
faq.addEventListener('click' , toggleContent);

function toggleContent(e)
 {
     if(e.target.parentElement.classList.contains('arrow'))
      {
        if(!showContent)
        {
            e.target.classList.add('invert');
            e.target.parentElement.parentElement.nextElementSibling.classList.add('show');

            //Set State
            showContent =true
        }

        else
        {
            e.target.classList.remove('invert');
            e.target.parentElement.parentElement.nextElementSibling.classList.remove('show');

            //Set State
            showContent =false
        }
      }
 
 }