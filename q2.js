//initially hide the table
document.querySelector(".flex-container").style.display = "none";

const usersURL = "https://jsonplaceholder.typicode.com/users/";
const postsURL = "https://jsonplaceholder.typicode.com/posts?userId=";
const todosURL = "https://jsonplaceholder.typicode.com/todos?userId=";

const button = document.getElementById("submitBtn");

//when search button is clicked
button.addEventListener("click", function (e) {
    e.preventDefault();

    //check if id is empty, reload page if true
    const inputID = document.getElementById("inputID").value;
    if (inputID === "") {location.reload();}

    //display table
    document.querySelector(".flex-container").style.display = "inline";


    const userInfo = fetch(`${usersURL}${inputID}`);
    const postsInfo = fetch(`${postsURL}${inputID}`);
    const todosInfo = fetch(`${todosURL}${inputID}`);

    //create promise all
    Promise.all([userInfo, postsInfo, todosInfo])
        .then(response => {

            //reset table data from previous search
            document.getElementById("usersData").innerHTML = "";
            document.getElementById("postsData").innerHTML = "";
            document.getElementById("todosData").innerHTML = "";

            //check if all 3 promises are ok
            if (!response[0].ok || !response[1].ok || !response[2].ok) {
                throw new Error("User was not found. Please try another user ID");
            }
            else {
                return response;
            }
    })

    //for each promise, get json data, add to table
    .then(promise => {

        //get user info
        promise[0].json()
        .then(element => {
            const usersTableData = document.getElementById("usersData");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${JSON.stringify(element.address)}</td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
            <td>${JSON.stringify(element.company)}</td>
            `;

            usersTableData.appendChild(row);
        });

        //get posts info
        promise[1].json()
        .then(data => {
            const postsTableData = document.getElementById("postsData");
            data.forEach(element=> {
                const row = document.createElement("tr");

                row.innerHTML = `
                <td>${element.userId}</td>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.body}</td>
                `;

                postsTableData.appendChild(row);
            });
        })

        //get todos info
        promise[2].json()
        .then(data => {
            const todosTableData = document.getElementById("todosData");
            data.forEach(element=> {
                const row = document.createElement("tr");
                
                row.innerHTML = `
                <td>${element.userId}</td>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.completed}</td>
                `;

                todosTableData.appendChild(row);
            });
        })

    })
    
    //if any promise fails, display error and hide table
    .catch(error => {
        console.log(error);
        document.getElementById("error").innerHTML = error;
        document.querySelector(".flex-container").style.display = "none";
    });

})