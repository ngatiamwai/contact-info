const name = document.getElementById('name');
const yourcontacts = document.getElementById('your-contacts');
const all = document.getElementById('all');
const delete_contact = document.getElementById('delete_contact').value;

let con = JSON.parse(localStorage.getItem('user')) || [];

class Users{

    static setContact(){
        const name = document.getElementById('name').value;
        console.log('Value of name:', name);
        
        const user = {
                name: name,  
        }
        console.log('User object:', user);
        
        localStorage.setItem('user', JSON.stringify(user));
    }
    
    
    static retrieveRecords(){ 
        const yourcontacts = document.getElementById('your-contacts').value;
        var contacts = window.localStorage.getItem(yourcontacts);
        var your_contacts = document.createTextNode(contacts);
        paragraph.appendChild(your_contacts);
    }
    
    static renderUsers(users) {
        const usersElement = document.createElement('div');
        usersElement.classList.add('user');
        if (users.completed) {
            usersElement.classList.add('completed');
        }
        usersElement.dataset.id = users.id;
        usersElement.innerHTML = `
            <div>
                <span>${users.text}</span>
            </div>
            `;
        todoList.appendChild(usersElement);
    }
    
    static viewContact(){ 
        const all = document.getElementById('all').value;
            localStorage.viewContact(all)
    }
    
    static removeItem(){ 
    const delete_contact = document.getElementById('delete_contact').value;
        localStorage.removeItem(delete_contact)
        console.log("remove conatacts");
    }
    
    static clearStorage(){
        localStorage.clear()
        console.log("clear records");
    }

}




