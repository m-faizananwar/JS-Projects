document.addEventListener('DOMContentLoaded', (event) => {
    const addBtn = document.querySelector('.addBtn');
    const main = document.getElementsByClassName('main')[0];

    addBtn.addEventListener('click', () => {
        addNote();
    });

    const saveNotes = () => {
        const notesText = document.querySelectorAll('textarea');
        const notes = [];
        notesText.forEach(note => {
            notes.push(note.value);
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    const addNote = (localStoragenote = '') => {
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerHTML = `
            <div class="tool">
                <i class="trash fas fa-trash"></i>
                <i class="save fas fa-save"></i>
            </div>
            <textarea>${localStoragenote}</textarea>
        `;
        
        note.querySelector('.trash').addEventListener('click', () => {
            note.remove();
            saveNotes();
        });

        note.querySelector('.save').addEventListener('click', () => {
            saveNotes();
        });

        main.appendChild(note);
        saveNotes();
    }

    (function () {
        const localStorageNotes = localStorage.getItem('notes');
        if (localStorageNotes) {
            JSON.parse(localStorageNotes).forEach(note => {
                addNote(note);
            });
        }
    })();
});
