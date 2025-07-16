const scriptURL = 'https://script.google.com/macros/s/AKfycbweaBg7uO0UWKuxkFIkdCp4VM8mdswaidXwBBI_iKWoJxPknKK0UrRS2qTO_R8mQ4GZAQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const message=document.querySelector("#msg")
  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML='Message has been sent successfully'
        setTimeout(function (){
            message.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
