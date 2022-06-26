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

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong !!");
      }
    }, 2000);
  });
}

/*
async function init() {
  await createPost({
    title: "New-Post",
    body: "This is the new post",
  });

  getPosts();
}

init();
*/

// using Fetch-API
const api = `https://jsonplaceholder.typicode.com/posts`;
const fetchData = async () => {
  const response = await fetch(api);
  const data = await response.json();

  data.forEach((res) => {
    console.log(res);
  });
};

fetchData();
