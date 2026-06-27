function getValue() {
  let inputField = document.getElementById("inputbar");
  let value = inputField.value;

  if (value.trim() !== "") {
    // Create new <li>
    let newlist = document.createElement("li");

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //  Adding line
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        newlist.style.textDecoration = "line-through";
      } else {
        newlist.style.textDecoration = "none";
      }
    });

    // making delete button for list
    let delbtn=document.createElement("button");
    delbtn.textContent="delete";
    delbtn.style.marginLeft="10px";
    delbtn.onclick= () => newlist.remove();

    newlist.appendChild(delbtn)

    // Add checkbox + text to <li>
    newlist.appendChild(checkbox);
    newlist.appendChild(document.createTextNode(value + " "));

    // Append <li> to <ul>
    document.getElementById("my_ul").appendChild(newlist);

    // Clear input box
    inputField.value = "";
  }
}

function clearTask() {
  let tasklist = document.getElementById("my_ul");
  tasklist.innerHTML = "";
  document.getElementById("inputbar").value = "";
}
