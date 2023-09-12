let inp = document.querySelector("input"); //access the input feild
let list = document.querySelector("ul"); // access the list
let addbtn = document.getElementById("add"); // access the add button

//add tasks when btn gets clicked
addbtn.addEventListener("click", ()=>{
    let newtask=document.createElement("li"); //create a list item 
    newtask.innerText=inp.value;               // add text to the list item which is given as input

    let delbtn = document.createElement("button");  //create a delete button with task 
    delbtn.innerText="Delete";                       
    delbtn.classList.add("delete");             
    newtask.appendChild(delbtn);    //add that button as a child in list item

    list.appendChild(newtask);      //append the list item in the ul 
    inp.value="";                     // after click make input feild empty
})

//add click event on list bcz old event won't work for new elements(event delegation)
list.addEventListener("click",(event)=>{
       if(event.target.nodeName=="BUTTON"){        //access delete button
      let parent=event.target.parentElement;        
      parent.remove();
    }

})

