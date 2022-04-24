const socket = io()
const chat = document.querySelector('.chat-form')
const Input = document.querySelector('#message')
const Name = document.querySelector('#name')
const chatWindow = document.querySelector('.chat-window')
const renderMessage = message2 => {
    const div = document.createElement('div')
    div.classList.add('render-message')
    div.innerText = message2
    chatWindow.appendChild(div)
  }


chat.addEventListener('submit', event => {
  event.preventDefault()
  if(Name.value==""){socket.emit('chat', "Unknown : "+ Input.value)}
  else{socket.emit('chat', Name.value+ " : "+ Input.value)}
  
  Input.value = ''
  socket.on('chat', message2 => {
    renderMessage(message2 )

  })
})
