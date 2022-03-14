function loadpoast() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadpoast();
function displayPost(posts) {
    const postConstainer = document.getElementById('post');
    for (const post of posts) {
        const div = document.createElement('div');//creating a div
        div.classList.add('post')//creating a class for style.
        div.classList.add('b-rounded')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <hr>
        <p>${post.body}</p>
        `;
        postConstainer.appendChild(div);
    }
}