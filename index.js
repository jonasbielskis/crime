window.addEventListener("DOMContentLoaded", getData);


function getData(){
    console.log("getData")
    fetch("http://popispop.net/wordpress/wp-json/wp/v2/crime?_embed")
		.then(res => res.json())
		.then(handleData)
}
function handleData(showData){
    showData.forEach(showPost)
}
function showPost(post){
    console.log(post)

    const template = document.querySelector(".postTemplate").content;
    const postCopy = template.cloneNode(true);

    const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

    //const h1 = postCopy.querySelector("h1");
    //h1.texContent=post.price;
    postCopy.querySelector("article h1").textContent=post.title.rendered;

    postCopy.querySelector("#description").innerHTML=post.content.rendered;

    postCopy.querySelector("#price").innerHTML=post.price;

    const img = postCopy.querySelector(".img");
    img.setAttribute("src", imgPath)



    document.querySelector("#posts").appendChild(postCopy)
}

