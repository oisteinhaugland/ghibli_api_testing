const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
},{
    title: 'Habbits to work on',
    body: 'Meditate'
},{
    title: 'Office modification',
    body: 'Testing 123'
}]

const filters = {
    searchText:''
}

function renderNotes(notes,filters){
    const filteredNotes = notes.filter(function(item){
            return item.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.getElementById('notes').innerHTML = '';
    
    filteredNotes.forEach(function(item){
        const noteElement = document.createElement('p');
        noteElement.textContent = item.title;
        document.getElementById('notes').appendChild(noteElement); 
    })
}

renderNotes(notes,filters);

const createNoteBtn = document.querySelector('#createNote');
    
    createNoteBtn.addEventListener('click', function(event){
    event.target.textContent = "FUCK YOU"
    console.log(event);
})

const searchField = document.querySelector('#search');
searchField.addEventListener('input',function(e){
    filters.searchText = e.target.value;
    renderNotes(notes,filters)    
});

document.querySelector('#filteredBy').addEventListener('change',function(e){
    console.log(e.target.value)
})


//crud, create,read,update,delete
//localStorage global variable like document

//localStorage.setItem('location','Trondheim');
console.log(localStorage.getItem('location'));

console.log('uuuufsdoifuosidfu')

