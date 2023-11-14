var btnde = document.querySelectorAll("tbody button");
var modal = document.querySelector(".modal");
var x;
btnde.forEach(item => {
    item.addEventListener("click", function () {
        modal.style.display = "block";
        x = item;

    })
});
var exit = document.querySelector(".modal span");
exit.addEventListener("click", function () {
    modal.style.display = "none";
})

var modalBtn = document.querySelectorAll(".modal button");
modalBtn.forEach(element => {

    element.addEventListener("click", function () {
        x.innerText = element.innerHTML;
        modal.style.display = "none";
        x.style.backgroundColor = element.style.backgroundColor;
        x.disabled = "true";
    })
});
var tr = document.querySelectorAll("tbody tr")
var btnie = document.querySelectorAll("thead .ie button");
btnie.forEach((element, index) => {
    element.addEventListener("click", function () {
        tr.forEach(item => {
            if (item.children[index + 2].children[0].innerHTML == "d/e") {
                item.children[index + 2].children[0].innerHTML = element.innerHTML;
                item.children[index + 2].children[0].style.backgroundColor = element.style.backgroundColor;
                item.children[index + 2].children[0].disabled = "true";
            }

        });

    })
});
var btnqb = document.querySelectorAll("thead .qb button ");
btnqb.forEach((element, index) => {
    element.addEventListener("click", function () {
        tr.forEach(item => {
            if (item.children[index + 2].children[0].innerHTML == "d/e") {
                item.children[index + 2].children[0].innerHTML = element.innerHTML;
                item.children[index + 2].children[0].style.backgroundColor = element.style.backgroundColor;
                item.children[index + 2].children[0].disabled = "true";
            }

        });

    })
});

var dateth = document.querySelectorAll(".date ");
// console.log(new Date().getDate());
// console.log(new Date().getMonth() + 1);
// console.log(new Date().getFullYear());
// var day = new Date().getDate();
// var month = new Date().getMonth() + 1;
// var year = new Date().getFullYear();
for (let i = 0; i < dateth.length; i++) {
    var date  = new Date();
    date.setDate(date.getDate() + i)
    dateth[i].innerHTML = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`

}



