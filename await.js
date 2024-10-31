function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

async function loadUserAsync(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

const loadUserArrow = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

const loadUserCatch = async() =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    }
    catch(error){

    }
}


// --------


fetch('')
.then (res => res.json())
.then (data => console.log(data))
.catch (err => console.error(err))



async function loadData(){
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

loadData(); // async er karoone call kora lagse



const taskLoader = async () =>{
    const res = await fetch('');
    
    // ...
}