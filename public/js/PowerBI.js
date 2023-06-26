async function showPowerBIReport(levelNames,leafNodes,elements){//-->dash(2) 
    var propNames = await findPropertyNames(viewer.model,leafNodes,elements);//calls function inside forgeViewer file that gets the array of properties 
    //for most models to run smoothly , run it like this (passing leaf nodes):
    if(modData["Load"] == "Done"){
        if(document.getElementById("maindashcontainer") != null){
            var myobj = document.getElementById("maindashcontainer");
            myobj.remove();
            viewer.resize();
        }
        else{
            addElement();
            setDropDown(levelNames,"id-select-level");
            setDropDown(propNames,"id-select-prop");
            setDropDown(['CFM','BTU/h','m³/h'],"id-select-flow");
            setDropDown(['----Select Area ----','Gross','Building Common Area','Office Area','Floor Area',
        'Store Area',"Rentable"],"id-select-area");
            viewer.resize();
            switchButton("button01");
            Quantities(modData); //modData is an object containing the  category names, ocurances etc..
            modData.walls = Walls(modData.elem,"soffit Area");
            modData.elec = Electricity(modData.elem,levelNames[0],"Comments");
            modData.rooms = Rooms(modData.elem,"Number");
            modData.doors = Doors(modData.elem,levelNames[0],"Head Height");
            // modData.marks = Marks(modData.elem,"Mark");
            modData.floors = Floors(modData.elem,"Area");
            modData.ceilings = Ceilings(modData.elem,"Area");
            modData.plumbing = Plumbing(modData.elem,"Type Mark");// NEW

            
        }
    }
    else{
        alert("Data not loaded yet");
    } 
}

//set the dropdown list that we have given 
function setDropDown(list,dropdownId) {// list==> list you want to be in the dropdown, dropdownId==> what html element you want to show the list
    var flowCoefficient=1;
    var selectList = document.getElementById(dropdownId);//"id-select-level"
    list.sort();
    for (var i = 0; i < list.length; i++) {
        var option = document.createElement("option");
        option.value = list[i];
        option.text = list[i];
        selectList.appendChild(option);
        }
        
  
    $('#'+dropdownId).on('change', async function() {// activates when user changes choice in one of the dropdowns
        var selectedValue = this.value;// get value from CURRENT selection change
        var selectedLevel = document.getElementById("id-select-level").value ;
        var selectedProperty = document.getElementById("id-select-prop").value;
        var selectedFlowMethod = document.getElementById("id-select-flow").value;
        var currentButton = findCurrentButton();
        var selectedArea=document.getElementById("id-select-area").value 
        if(dropdownId=="id-select-area"){
            var areaArray=await areaCalculator(selectedLevel,selectedArea);// 05.01.23 passes area array from here
            document.getElementById("id-select-area").value='----Select Area ----';//04.04.23

        }else if (dropdownId=="id-select-level"){
            var areaArray= Array(1).fill(Array(5).fill("Not Defined"));
        }else{
            var areaArray= modData.Elements.areas;

        } 

        selectedFlowMethod=='CFM'? flowCoefficient=1:selectedFlowMethod=='m³/h'? flowCoefficient=1.69901082:flowCoefficient=0.00612857;
       
        const modDataUpdate = await Promise.resolve(
            onChangeLevel(selectedLevel, selectedProperty, flowCoefficient,areaArray,currentButton)
        ); // go to this function (should finish running before rest of code)
        modData.walls = Walls(modDataUpdate.elem,selectedLevel, selectedProperty);
        modData.elec = Electricity(modDataUpdate.elem, selectedLevel, selectedProperty);
        modData.rooms = Rooms(modDataUpdate.elem, selectedProperty);
        modData.doors = Doors(modDataUpdate.elem,selectedLevel,selectedProperty);
        modData.floors = Floors(modDataUpdate.elem,selectedProperty);// NEW
        modData.ceilings = Ceilings(modDataUpdate.elem,selectedProperty);// NEW
        modData.plumbing = Plumbing(modDataUpdate.elem,selectedProperty);// NEW

        switchButton(currentButton);
        if (currentButton == "button01") {
            Quantities(modDataUpdate);
        }
        
        });     
        
}

function Async(waitTime){
    return new Promise((res)=>{
    setTimeout(()=>{
    res();} , waitTime);});
    }

    function findCurrentButton(){
        var currentButtonName =""
        var buttons = document.getElementById("containerButtons").childNodes;
        for (i = 0; i < buttons.length; i++) {
            if(buttons[i].style.color=='white') // it means that the button is currently chosen
            {
                currentButtonName  = buttons[i].id;
                break;
            }
         
        } 
        currentButtonName==''?currentButtonName="button01":0; // if no button was chosen - it means we choose first button
        return currentButtonName;

    }

