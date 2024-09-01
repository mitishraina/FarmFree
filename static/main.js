function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.filter-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById('chat-toggle-btn').addEventListener('click', function() {
    document.getElementById('chatbox').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chatbox').style.display = 'none';
    document.getElementById('chat-toggle-btn').style.display = 'block';
});

document.getElementById('send-chat-btn').addEventListener('click', function() {
    const inputField = document.getElementById('chat-input-field');
    const message = inputField.value.trim();
    if (message) {
        const messageContainer = document.createElement('div');
        messageContainer.textContent = message;
        document.querySelector('.chat-messages').appendChild(messageContainer);
        inputField.value = '';
    }
});
