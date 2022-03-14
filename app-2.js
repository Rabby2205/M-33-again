//this is load Title button .
const loadTitle = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => displayThings(data))
}
//this is load Useer Button.
const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayThings1(data))
}
//to display from server below is the mechanism of display things. 
const displayThings = (data) => {
    const ul = document.getElementById('title');
    const li = document.createElement('li');
    li.innerText = data.title;
    ul.appendChild(li);
    ul.style.color = 'lime';
    ul.style.backgroundColor = 'black';
    ul.style.width = '200px';
    ul.classList.add('b-rounded');

}
const displayThings1 = (data) => {
    const ul = document.getElementById('user');
    for (const user of data) {//loop for access specific group of data .

        const li = document.createElement('li');
        li.innerText = `name : ${user.username} 
         email : ${user.email}`;
        ul.appendChild(li);
        ul.style.color = 'white';
        ul.style.backgroundColor = 'black';
        ul.style.margin = '10px';
        ul.classList.add('b-rounded');
    }


}