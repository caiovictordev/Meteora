const emailInput = document.querySelector("emailInput")
const resultMessage = document.querySelector("resultMessage")
const emailForm = document.querySelector("emailForm") 

// Um evento que controla/ativa após a submissão do form
emailForm.addEventListener("submit", function (event){
  event.preventDefault()

  const email = emailInput.value

  // Validar email
  const isValid = validateEmail(email)

  if(isValid){
        resultMessage.textContent = "E-mail válido!"
        resultMessage.style.color = "green"
  }else{
        resultMessage.textContent = "E-mail inválido!"
        resultMessage.style.color = "red"
  }
})

// Função de validar e-mail
const validareEmail = (email) => {
    // Padrão: TEXTO@TEXTO.TEXTO
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return regex.test(email)
    
} 