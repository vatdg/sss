// Populate second dropdown by selecting from the first
function populate(character,lesson){
  var character = document.getElementById(character);
  var lesson = document.getElementById(lesson);
  lesson.innerHTML = "";

  if(character.value == "Phoebe"){
    var optionArray = ["|","Phoebe 1|to do things you love even if you're not the best at them","Phoebe 2|that you shouldn’t care what people think about you","Phoebe 3|that home is a state of mind, and you get to choose your family"];
  } else if(character.value == "Chandler"){
    var optionArray = ["|","Chandler 1|that you are not defined by your job","Chandler 2|that you don't have to be good at advice to be a great friend","Chandler 3|that your past is part of who you are"];
  } else if(character.value == "Rachel"){
    var optionArray = ["|","Rachel 1|that it’s okay to be a little ~extra~","Rachel 2|that it’s never too late to grow up","Rachel 3|that if you work hard and believe in yourself, you can do anything"];
  } else if(character.value == "Ross"){
    var optionArray = ["|","Ross 1|your relationships don't define you","Ross 2|that it’s okay to be dorky","Ross 3|that persistence pays off"];
  } else if(character.value == "Monica"){
    var optionArray = ["|","Monica 1|that you should know your strengths, and it's okay to show it","Monica 2|to embrace the unique parts of your personality","Monica 3|that you can always try to become a better version of yourself"];
  } else if(character.value == "Joey"){
    var optionArray = ["|","Joey 1|that traditional career paths aren’t for everyone","Joey 2|to always go for what you want","Joey 3|that you should always love your body"];
  } else if(character.value == "FRIENDS"){
    var optionArray = ["|","FRIENDS 1|that life is not always fair","FRIENDS 2|to never lose the kid inside","FRIENDS 3|that life is better with great friends"];
  }
  for(var option in optionArray){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    lesson.options.add(newOption);
  }
}


// Show episodes when select FIRST lesson from PHOEBE
let source = document.querySelector("#lesson");
let target = document.querySelector("#ph-ep-1");

let displayWhenSelected = (source, value, target) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Phoebe 1", target)
);

// Show episodes when select SECOND lesson from PHOEBE
let source2 = document.querySelector("#lesson");
let target2 = document.querySelector("#ph-ep-2");

let displayWhenSelected2 = (source, value, target2) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target2.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Phoebe 2", target2)
);

// Show episodes when select THIRD lesson from PHOEBE
let source3 = document.querySelector("#lesson");
let target3 = document.querySelector("#ph-ep-3");

let displayWhenSelected3 = (source, value, target3) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target3.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Phoebe 3", target3)
);

// Show episodes when select FIRST lesson from CHANDLER 
let source4 = document.querySelector("#lesson");
let target4 = document.querySelector("#ch-ep-1");

let displayWhenSelected4 = (source, value, target4) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target3.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Chandler 1", target4)
);

// Show episodes when select SECOND lesson from CHANDLER 
let source5 = document.querySelector("#lesson");
let target5 = document.querySelector("#ch-ep-2");

let displayWhenSelected5 = (source, value, target5) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target5.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Chandler 2", target5)
);

// Show episodes when select THIRD lesson from CHANDLER 
let source6 = document.querySelector("#lesson");
let target6 = document.querySelector("#ch-ep-3");

let displayWhenSelected6 = (source, value, target6) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target6.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Chandler 3", target6)
);

// Show episodes when select FIRST lesson from RACHEL
let source7 = document.querySelector("#lesson");
let target7 = document.querySelector("#ra-ep-1");

let displayWhenSelected7 = (source, value, target7) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target7.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Rachel 1", target7)
);

// Show episodes when select SECOND lesson from RACHEL
let source8 = document.querySelector("#lesson");
let target8 = document.querySelector("#ra-ep-2");

let displayWhenSelected8 = (source, value, target8) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target8.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Rachel 2", target8)
);

// Show episodes when select THIRD lesson from RACHEL
let source9 = document.querySelector("#lesson");
let target9 = document.querySelector("#ra-ep-3");

let displayWhenSelected9 = (source, value, target9) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target9.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Rachel 3", target9)
);

// Show episodes when select FIRST lesson from ROSS
let source10 = document.querySelector("#lesson");
let target10 = document.querySelector("#ro-ep-1");

let displayWhenSelected10 = (source, value, target10) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target10.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Ross 1", target10)
);

// Show episodes when select SECOND lesson from ROSS
let source11 = document.querySelector("#lesson");
let target11 = document.querySelector("#ro-ep-2");

let displayWhenSelected11 = (source, value, target11) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target11.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Ross 2", target11)
);

// Show episodes when select THIRD lesson from ROSS
let source12 = document.querySelector("#lesson");
let target12 = document.querySelector("#ro-ep-3");

let displayWhenSelected12 = (source, value, target12) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target12.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Ross 3", target12)
);

// Show episodes when select FIRST lesson from MONICA
let source13 = document.querySelector("#lesson");
let target13 = document.querySelector("#mo-ep-1");

let displayWhenSelected13 = (source, value, target13) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target13.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Monica 1", target13)
);

// Show episodes when select SECOND lesson from MONICA
let source14 = document.querySelector("#lesson");
let target14 = document.querySelector("#mo-ep-2");

let displayWhenSelected14 = (source, value, target14) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target14.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Monica 2", target14)
);

// Show episodes when select THIRD lesson from MONICA
let source15 = document.querySelector("#lesson");
let target15 = document.querySelector("#mo-ep-3");

let displayWhenSelected15 = (source, value, target15) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target15.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Monica 3", target15)
);

// Show episodes when select FIRST lesson from JOEY
let source16 = document.querySelector("#lesson");
let target16 = document.querySelector("#jo-ep-1");

let displayWhenSelected16 = (source, value, target16) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target16.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Joey 1", target16)
);

// Show episodes when select SECOND lesson from JOEY
let source17 = document.querySelector("#lesson");
let target17 = document.querySelector("#jo-ep-2");

let displayWhenSelected17 = (source, value, target17) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target17.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Joey 2", target17)
);

// Show episodes when select THIRD lesson from JOEY
let source18 = document.querySelector("#lesson");
let target18 = document.querySelector("#jo-ep-3");

let displayWhenSelected18 = (source, value, target18) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target18.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "Joey 3", target18)
);

// Show episodes when select FIRST lesson from FRIENDS
let source19 = document.querySelector("#lesson");
let target19 = document.querySelector("#fr-ep-1");

let displayWhenSelected19 = (source, value, target19) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target19.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "FRIENDS 1", target19)
);

// Show episodes when select SECOND lesson from FRIENDS
let source20 = document.querySelector("#lesson");
let target20 = document.querySelector("#fr-ep-2");

let displayWhenSelected20 = (source, value, target20) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target20.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "FRIENDS 2", target20)
);

// Show episodes when select THIRD lesson from FRIENDS
let source21 = document.querySelector("#lesson");
let target21 = document.querySelector("#fr-ep-3");

let displayWhenSelected21 = (source, value, target21) => {
    let selectedIndex = source.selectedIndex;
    let isSelected = source[selectedIndex].value === value;
    target21.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "FRIENDS 3", target21)
);
