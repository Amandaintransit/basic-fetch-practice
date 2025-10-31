fetch("https://github.com/dan-collins-dev/dummy-data-fetching-repo/blob/main/data/users.json")

.then(response => {
    if(!response.ok){
        throw new Error("could not find");
    }
    return response;
})

.then(data => console.log(data))
.catch(error => console.error(error));
    
let user = {
    id: 0,
    firstName: " ",
    lastName: " ",
    email: " ",
    yearsEmployed: 0
}