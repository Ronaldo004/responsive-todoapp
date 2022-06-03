var list=document.getElementById("list");
function addtodo(){
    var todo_items=document.getElementById("todo");
    var li=document.createElement("li");
    
    var litext=document.createTextNode(todo_items.value);
    li.appendChild(litext)
  
    
//del
    var delbtn=document.createElement("button");
    var deltext=document.createTextNode("DELETE");
    delbtn.setAttribute("class","btn")
  delbtn.setAttribute("onclick","del(this)")
    delbtn.appendChild(deltext);
    li.appendChild(delbtn);
   //edit
    var editbtn=document.createElement("button")
    var edittext=document.createTextNode("EDIT")
    editbtn.setAttribute("class","editbtn");
    editbtn.setAttribute("onclick","edit(this)");
    editbtn.appendChild(edittext);
    li.appendChild(editbtn);
    list.appendChild(li);

}

function del(e){
    e.parentNode.remove();
}
function edit(e){
    var val=e.parentNode.firstChild.nodeValue;
    console.log(val);
    var editvalue=prompt("Enter your value");
    e.parentNode.firstChild.nodeValue=editvalue;
    
}
function dellall(){
    list.innerHTML="";
}