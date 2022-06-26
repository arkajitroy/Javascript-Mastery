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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong !!");
      }
    }, 2000);
  });
}

createPost({
  title: "New-Post",
  body: "This is the new post :-D",
})
  .then(getPosts)
  .catch((err) => console.log(err));

// Promises.all

const promise1 = Promise.resolve("Hello-Javascript");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Good Bye");
});

Promise.all([promise1, promise2, promise3]).then((val) => {
  console.log(val);
});
