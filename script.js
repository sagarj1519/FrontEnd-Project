let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")          /*show alert msg on empty input*/;
    }else{
        let newEle = document.createElement("ul"); /*create element*/
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;/*add value to inner html using backtick and add icon*/
        text.appendChild(newEle);
        inputs.value="";
        /*it is code use to delete the output*/
        newEle.querySelector("i").addEventListener("click" , remove);/*click event use to delete*/
        function remove(){          /*create function to remove*/
            newEle.remove()
        }
    }
}