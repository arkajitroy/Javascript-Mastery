const posts = [
  { title: "Post-One", body: "body-of-post-one" },
  { title: "Post-Two", body: "body-of-post-two" },
];

// (2) This will load

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// (1) this will load

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2500);
}

createPost(
  {
    title: "New-Post",
    body: "This is the new post",
  },
  getPosts // passing the function into the callback
);
