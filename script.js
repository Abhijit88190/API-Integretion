// Select the container where the fetched data will be displayed
const postsContainer = document.getElementById('posts-container');

// Fetch data from the JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Loop through the fetched data and dynamically create HTML elements
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            // Add the content to the div
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            // Append the post element to the container
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        postsContainer.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
    });
