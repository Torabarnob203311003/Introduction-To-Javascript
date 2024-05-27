function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res=>res.json())
    .then (data=> displayPost(data))

}
    function displayPost(posts){

        const postContainer = document.getElementById('post-container')
        for(const post of posts){

            console.log(post)
            const div= document.createElement('div')
            div.innerHTML= `
                        <h5>user -  ${post.userId}</h5>
                        <h5>post: ${post.title}</h5>
                        <h5>post Description - ${post.body}</h5>
            
            `
            postContainer.appendChild(div)

        }
    }



loadPost()