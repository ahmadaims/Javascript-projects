const notesBtn = document.querySelector('.notes-btn');
const notesContainer = document.querySelector('.notes-container');

// Load and display saved notes when the page loads
function loadNotes() {
    const savedNotes = localStorage.getItem('notes') || '';
    const notesArray = savedNotes.split('||');

    notesArray.forEach(text => {
        if (text) {
            createNotes(text);
        }
    });
}

// Function to create a new note
function createNotes(text) {
    const notesInput = document.createElement('p');
    const img = document.createElement('img');
    notesInput.className = 'notes-input scroll';
    notesInput.setAttribute('contenteditable', 'true');
    notesInput.innerText = text;
    img.src = 'images/delete-3.png';
    img.setAttribute('contenteditable', 'false');

    // Add a click event listener to delete the note
    img.addEventListener('click', () => {
        notesContainer.removeChild(notesInput);
        updateStorage();
    });

    notesContainer.appendChild(notesInput).appendChild(img);
}

// Function to update and save notes to local storage
function updateStorage() {
    const notesInputs = document.querySelectorAll('.notes-input');
    const notesArray = [];

    notesInputs.forEach(notesInput => {
        notesArray.push(notesInput.innerText);
    });

    const notesText = notesArray.join('||');
    localStorage.setItem('notes', notesText);
}

// Load and display saved notes when the page loads
loadNotes();

// Add a click event listener to the Add Note button
notesBtn.addEventListener('click', () => {
    createNotes('Your Input');
    updateStorage();
});

// Listen for input changes in the notes container and update storage accordingly
notesContainer.addEventListener('input', updateStorage);
// localStorage.clear();