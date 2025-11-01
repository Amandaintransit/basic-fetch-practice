fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json")

.then(response => response.json()) 
.then(data => console.log(data))

.catch(error => console.error('Error:', error));
/*
.then(data => console.log(data.firstName))
.catch(error => console.error(error));

}
*/