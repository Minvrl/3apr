let table = document.querySelector(".table")
let form = document.querySelector("form")


fetch("https://gorest.co.in/public/v2/users")
.then(response =>response.json())
.then(data =>{
    data.forEach((user,index) => {
        let r = document.createElement("tr")
        r.innerHTML = `
                <th scope="row">${index+1}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
                <td>${user.status}</td>`
        table.appendChild(r)
    });

})

form.addEventListener("submit",function(e){
    alert(e.target.email)
})


