let inp = document.querySelector("input");
let list = document.querySelector("ul");
let addbtn = document.getElementById("add");

addbtn.addEventListener("click", ()=>{
    let newtask=document.createElement("li");
    newtask.innerText=inp.value;

    let checkbx = document.createElement("input");
    checkbx.type="checkbox";
    checkbx.classList.add("chkbx");
    newtask.prepend(checkbx);

    let delbtn = document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    newtask.appendChild(delbtn);

    list.appendChild(newtask);
    inp.value="";
})

list.addEventListener("click",(event)=>{
       if(event.target.nodeName=="BUTTON"){
      let parent=event.target.parentElement;
      parent.remove();
    }

})

