document.addEventListener('DOMContentLoaded', function () {
    const chatWidget = document.getElementById('whatsapp-chat');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const messageTime = document.getElementById('message-time');
    const whatsappIcon = document.getElementById('whatsapp-icon');

    // Function to play a message sound when the chat opens
    function playOpenSound() {
      const audio = new Audio('Sounds/incoming-message-online-whatsapp.mp3'); // Change the sound file if needed
      audio.play();
    }

    // Show chat widget with smooth transition after 1 second
    setTimeout(() => {
      chatWidget.classList.add('show');
      playOpenSound(); // Play sound when chat opens
    }, 5000);

    // Toggle chat visibility
    whatsappIcon.addEventListener('click', () => {
      if (chatWidget.style.display === 'none' || !chatWidget.classList.contains('show')) {
        chatWidget.classList.add('show');
        playOpenSound(); // Play sound when chat opens
      } else {
        chatWidget.classList.remove('show');
      }
    });

    // Close chat widget
    closeChat.addEventListener('click', () => {
      chatWidget.classList.remove('show');
    });

    // Function to update time every minute
    function updateTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${(hours % 12 || 12)}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
      messageTime.textContent = formattedTime;
    }

    // Update time initially
    updateTime();

    // Update time every minute
    setInterval(updateTime, 60000); // 60000 ms = 1 minute

    // Send message to WhatsApp
    sendButton.addEventListener('click', function() {
      const message = chatInput.value.trim();
      if (message) {
        const whatsappUrl = `https://wa.me/+8801726033078?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        chatInput.value = ''; // Clear input field
        chatInput.classList.remove('error'); // Remove red border when message is sent
      } else {
        chatInput.classList.add('error'); // Add red border when input is empty
      }
    });

    // Send message on pressing Enter key
    chatInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        sendButton.click();
      }
    });
  });