// Sample notes data
let notes = [];

// Function to add a new note
function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        // Add the note to the array
        notes.push(noteText);

        // Clear the input field
        noteInput.value = '';

        // Update the notes display
        displayNotes();
    }
}

// Function to display notes
function displayNotes() {
    const notesContainer = document.getElementById('notes-container');

    // Clear previous notes
    notesContainer.innerHTML = '';

    // Display each note
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(noteElement);
    });
}

// Function to delete a note
function deleteNote(index) {
    // Remove the note from the array
    notes.splice(index, 1);

    // Update the notes display
    displayNotes();
}

// Initial display
displayNotes();

