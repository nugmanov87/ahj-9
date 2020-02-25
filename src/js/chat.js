/* eslint-disable class-methods-use-this */
export default class Chat {
  init() {
    const chatForm = document.querySelector('.chat-form');
    const chatClose = document.querySelector('.chat-close');
    const callChat = document.querySelector('.call-chat');

    callChat.addEventListener('click', () => {
      chatForm.classList.remove('hidden');
      callChat.classList.add('hidden');
    });

    chatClose.addEventListener('click', () => {
      callChat.classList.remove('hidden');
      chatForm.classList.add('hidden');
    });
  }
}
