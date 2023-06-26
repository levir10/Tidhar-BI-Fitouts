

//Buttons
function switchButton(buttonName){

  //update canvases
  if(buttonName=="button01"){//מיזוג אוויר
    removeParentContent(["row01","col01","col02","col03","col04","row004"]);
    updateCanvas(["position01","position02","position03","position04"],["col01","col02","col03","col04"]);
    updateDataTable(["dataTable","dataTable2","dataTable3","dataTable4"],["row01","row01","row004","row004"]);
    document.getElementById("id-select-prop").style.visibility= "visible";
    document.getElementById("id-select-flow").style.visibility = "visible";
    document.getElementById("id-select-area").style.visibility= "visible";
  }
  else if(buttonName=="button11"){//  קירות זכוכית ומחיצות גבס 
    removeParentContent(["row01","col01","col02","col03","col04","row004"]);//removes all the children of the inserted parent array
    updateCanvas(["position02","position01","position03","position04"],["row01","col01","col02","col03"]);
    createUniversalBarChart('position02',"[m²] סה''כ שטח מחיצות לפי סוג במודל",modData.walls[0]);
    createUniversalBarChart('position01',"סה''כ אורכי קירות לפי סוג במודל [m]",modData.walls[1]);
    createUniversalBarChart('position03',"[m²] FTC",modData.walls[2]);
    createUniversalBarChart('position04',"  מחיצות בחלוקה לפי גבהים - כמות במ''ר [m²]",modData.walls[3]);
    document.getElementById("id-select-prop").style.visibility= "visible";

  }else if(buttonName=="button02"){//חשמל
    var _this = this;
    removeParentContent(["row01","col01","col02","col03","col04","row004"]);//removes all the children of the inserted parent array
    updateCanvas(["position03","position01","position02","position04"],["row01","col03","col02","col04"]);//position03->circuits; position02->fixtures;position01->fixtures;position04->cabletrays
    updateDataTable(["dataTable"],["row004"]);
    createUniversalBarChart('position02',"Electrical Fixtures[-]",modData.elec[0]);//electrical fixtures
    createUniversalBarChart('position03',"Electrical Circuits[-]",modData.elec[3]);//electrical fixtures circuits
    createLineChart('position01',"Lighting Fixtures[-]",modData.elec[1]);// lighting
    createUniversalBarChart('position04',"Cable Trays Length[m]",modData.elec[2]);
    createDataChart('#dataTable',modData.elec[4],_this);
    document.getElementById("id-select-prop").style.visibility= "visible";

  }
  else if(buttonName=="button03"){//אינסטלציה
    var _this = this;
    removeParentContent(["row01","col01","col02","col03","col04","row004"]);//removes all the children of the inserted parent array
    // updateCanvas(["position03","position01","position02","position04"],["col02","col04","col01"]);//position03->circuits; position02->fixtures;position01->fixtures;position04->cabletrays
    updateDataTable(["dataTable"],["row01"]);
    // createUniversalBarChart('position02',"Electrical Fixtures[-]",modData.elec[0]);//electrical fixtures
    // createUniversalBarChart('position03',"Electrical Circuits[-]",modData.elec[3]);//electrical fixtures circuits
    // createLineChart('position01',"Lighting Fixtures[-]",modData.elec[1]);// lighting
    // createUniversalBarChart('position04',"Cable Trays Length[m]",modData.elec[2]);
    createDataChart('#dataTable',modData.plumbing[0],_this);
    document.getElementById("id-select-prop").style.visibility= "visible";

  }
  else if(buttonName=="button05"){//חדרים
    var _this = this;
    removeParentContent(["row01","col01","col02","col03","col04","row004"]);//removes all the children of the inserted parent array
    updateCanvas(["position03","position02","position01"],["col02","col04","col01"]);//position03->circuits; position02->fixtures;position01->fixtures;position04->cabletrays
    createUniversalBarChart('position03',"Rooms Area By Name[m²]",modData.rooms[0]);
    if(modData.Elements.areas.length!=1){
      createUniversalBarChart('position02',"Areas By Name[m²]",modData.Elements.areas);
      createDataChart('#dataTable2',modData.Elements.areas,_this);
    }
    createPolarChart('position01',"Rooms count by name",modData.rooms[2]);
    createDataChart('#dataTable',modData.rooms[1],_this);
    // createDataChart('#dataTable3',modData.marks[0],_this);//טבלה של המארקים
    // updateDataTable(["dataTable","dataTable2","dataTable3"],["row01","row004","row01"]);..טבלה של המארקים
    updateDataTable(["dataTable","dataTable2"],["row01","row004"]);
    document.getElementById("id-select-prop").style.visibility= "visible";
    document.getElementById("id-select-area").style.visibility= "visible";

  }
  else if(buttonName=="button06"){//דלתות
    var _this = this;
    removeParentContent(["row01","col01","col02","col03","col04","row004"]);//removes all the children of the inserted parent array
    updateCanvas(["position03"],["col01"]);//position03->circuits; position02->fixtures;position01->fixtures;position04->cabletrays
    createUniversalBarChart('position03',"Doors Count By Type[-]"+modData.doors[0][modData.doors[0].length-1][0],modData.doors[0]);
    createDoorListDataChart('#dataTable',modData.doors[1],_this);
    updateDataTable(["dataTable"],["row01"]);
    // createDataChart('#dataTable',modData.rooms[1],_this);
    // updateDataTable(["dataTable","dataTable2"],["row01","row004"]);
    document.getElementById("id-select-prop").style.visibility= "visible";
    

  }
  else if(buttonName=="button08"){//ריצופים
    var _this = this;
    removeParentContent(["row01","col01","col02","col03","col04","row004"]);//removes all the children of the inserted parent array
    updateCanvas(["position03","position02"],["col02","col04"]);//position03->circuits; position02->fixtures;position01->fixtures;position04->cabletrays
    createPolarChart('position03',"Floors Areas",modData.floors[1]);
    createDoughnutChart('position02',"יחס שטח ריצוף לשטח קומה",modData.floors[2]);
    // createUniversalBarChart('position03',"Rooms Area By Name[m²]",modData.rooms[0]);
    // createUniversalBarChart('position02',"Areas By Name[m²]",modData.Elements.areas);
    createDataChart('#dataTable',modData.floors[0],_this);
    createDataChart('#dataTable2',modData.Elements.areas,_this);
    // createDataChart('#dataTable3',modData.marks[0],_this);
    // updateDataTable(["dataTable","dataTable2","dataTable3"],["row01","row004","row01"]);
    updateDataTable(["dataTable","dataTable2"],["row01","row004"]);
    document.getElementById("id-select-prop").style.visibility= "visible";
    document.getElementById("id-select-area").style.visibility= "visible";

  }else if(buttonName=="button13"){//תקרות
    var _this = this;
    removeParentContent(["row01","col01","col02","col03","col04","row004"]);//removes all the children of the inserted parent array
    updateCanvas(["position03","position02"],["col02","col04"]);//position03->circuits; position02->fixtures;position01->fixtures;position04->cabletrays
    createPolarChart('position03',"שטח תקרות",modData.ceilings[1]);
    createDoughnutChart('position02',"יחס שטח תקרה לשטח קומה",modData.ceilings[2]);
    // createUniversalBarChart('position03',"Rooms Area By Name[m²]",modData.rooms[0]);
    // createUniversalBarChart('position02',"Areas By Name[m²]",modData.Elements.areas);
    createDataChart('#dataTable',modData.ceilings[0],_this);
    createDataChart('#dataTable2',modData.Elements.areas,_this);
    // createDataChart('#dataTable3',modData.marks[0],_this);
    // updateDataTable(["dataTable","dataTable2","dataTable3"],["row01","row004","row01"]);
    updateDataTable(["dataTable","dataTable2"],["row01","row004"]);
    document.getElementById("id-select-prop").style.visibility= "visible";
    document.getElementById("id-select-area").style.visibility= "visible";

  }

   


  var buttons = document.getElementById("containerButtons").childNodes;
  for (i = 0; i < buttons.length; i++) {
      if(buttons[i].id != buttonName)
      {
          buttons[i].style.background='white';
          buttons[i].style.color='#2d2d2d';
      }
      else
      {
          buttons[i].style.background='#2d2d2d';
          buttons[i].style.color='white'
      }
  } 



}



async function Quantities(input){// i turned Quantities to async at 1/11/22
  var _this = this;
  createBarChart('position02', 'Amounts of ducts by system type[m²]', input.quantities);
  createBarChart('position04', 'Length of pipes by system type[m]', input.Elements);
  createCFM_BarChart('position03', 'CFM By Floor', input.Elements.mechanical);
  createDataChart('#dataTable',input['Elements']['grills'],_this);
  createDataChart('#dataTable2',input['Elements']['mechanical'],_this);
  createDataChart('#dataTable3',input['Elements']['areas'],_this);
  createDataChart('#dataTable4', input['Elements']['cost_factors'],_this);
  createDoughnutChart('position01', 'Costs by system type[₪]', input.Elements.costs);
  
  
  
   var table = document.getElementById("dataTable");
   table.style.width = "50%";
   var table2 = document.getElementById("dataTable2");
   table2.style.width = "50%";
   var table3 = document.getElementById("dataTable3");
   table3.style.width = "50%";


}

function Walls(elements,selectedLevel,property){
const walls_array = Array(1).fill(Array(5).fill(0));
const walls_height_arr = Array(1).fill(Array(5).fill(0));
const ftc_array = Array(1).fill(Array(5).fill(0));
// const property_array = Array(1).fill(Array(5).fill(0));
const length_array = Array(1).fill(Array(5).fill(0));
levelName = selectedLevel;
levelName==undefined? levelName="Select All Levels":0;

for(const element of elements ){
      
      if(element.properties.length>=3){
        // for(var j=0;j<element.properties.length;j++){
          
          if(element.properties.find(p => p.displayValue=="Revit Curtain Panels")!=undefined ){
        

              const wall_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
              const wall_level = levelName;// level
              const wall_id = element.dbId;//ID
              const wall_area =element.properties.find(p => (p.displayName=='Area'))?.displayValue;//Type name 
              // const chosenProperty =element.properties.find(p => (p.displayName==property))?.displayValue;//Type name 
              const wall_length =element.properties.find(p => (p.displayName=='Length'))?.displayValue;//Type name 
              ftc_array.push([wall_type,wall_level,1,wall_id,wall_area]);

            
          }

          if(element.properties[0].displayValue.includes('Curtain')){
            console.log("lalalal");
          }

          if(element.properties.find(p => (p.displayName=="Type Name"))?.displayValue!=undefined && (element.properties[0].displayValue=='Revit Walls' || element.properties[0].displayValue.includes('Curtain'))){
            if(element.properties.find(p=>p.displayName.includes("Base Constraint"))?.displayValue==levelName || levelName=="Select All Levels" ){

                
                const wall_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
                const wall_level = levelName;// level
                const wall_id = element.dbId;//ID
                const wall_area =element.properties.find(p => (p.displayName=='Area'))?.displayValue;//Type name 
                // const chosenProperty =element.properties.find(p => (p.displayName==property))?.displayValue;//Type name  40784
                var wall_length=element.properties.find(p => (p.displayName=='Length'))?.displayValue;//length of walls
                !isNaN(wall_length)?wall_length=parseFloat((wall_length/100).toFixed(1)):0;
                var wall_height =element.properties.find(p => (p.displayName=='Unconnected Height'))?.displayValue;//wall height
                !isNaN(wall_height)?wall_height=wall_height.toFixed(1):0;
                walls_array.push([wall_type,wall_level,1,wall_id,wall_area]);
                walls_height_arr.push([wall_height,wall_level,1,wall_id,wall_area]);
                length_array.push([wall_type,wall_level,1,wall_id,wall_length]);
                // if(!isNaN(chosenProperty)){
                //   property_array.push([wall_type,wall_level,1,wall_id,chosenProperty]);
                // }

            }
          
        //       break;
        // }
      }
    }
  }
  var finel_walls=instanceToSum(walls_array,["Wall Type","Wall Level","Count","Wall Area","Id"],3,4,"area");
  var finel_ftc=instanceToSum(ftc_array,["FTC Type","FTC Level","Count","FTC Area","Id"],3,4,"area");
  // var finel_prop=instanceToSum(property_array,["Wall Type","Wall Level","Count","Soffit Area","Id"],3,4,"area");
  var finel_length=instanceToSum(length_array,["Wall Type","Wall Level","Count","Length Area","Id"],3,4,"area");
  var finel_wall_height=instanceToSum(walls_height_arr,["Wall Type","Wall Level","Count","Walls Height","Id"],3,4,"area");

  return [finel_walls,finel_length,finel_ftc,finel_wall_height];

}


function Electricity(elements,level,property){
          const fixtures_array = Array(1).fill(Array(5).fill(0));
          const ligthtning_fixture_array = Array(1).fill(Array(5).fill(0));
          const electric_circuit_array = Array(1).fill(Array(5).fill(0));
          const  cabletray_array = Array(1).fill(Array(5).fill(0));
          const dataTable = [];
          // var levelName = elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue;// take the level name from the first element
          var levelName = level;// take the level name from the first element
          levelName==undefined? levelName="Select All Levels":0;
              for(const element of elements ){
                    
                    if(element.properties.length>=1){
                      // for(var j=0;j<element.properties.length;j++){
              
                        if(element.properties.find(p => (p.displayName=="Type Name"))?.displayValue!=undefined && element.properties[0].displayValue==('Revit Electrical Fixtures') ){
              
                          if(element.properties.find(p => (p.displayName.includes("Level") && p.displayCategory =='Constraints'))?.displayValue==levelName || levelName=="Select All Levels" ){
              
                              
                              const fixture_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
                              const fixture_level = levelName;// level
                              const fixture_id = element.dbId;//ID
                              const fixture_unit =1;// count
                              const fixture_prop = element.properties.find(p => (p.displayName==property))?.displayValue;//prop
                              fixtures_array.push([fixture_type,fixture_level,fixture_unit,fixture_id]);
                              if(fixture_prop!=undefined && fixture_prop!=''){
                                electric_circuit_array.push([fixture_prop,fixture_level,fixture_type,fixture_unit,fixture_id]);// electrical circuit list
                              }
                          }
                        
                            // break;
                      }else if(element.properties.find(p => (p.displayName=="Type Name"))?.displayValue!=undefined && element.properties[0].displayValue==('Revit Lighting Fixtures') ){
              
                        if(element.properties.find(p => (p.displayName.includes("Level") && p.displayCategory =='Constraints'))?.displayValue==levelName || levelName=="Select All Levels" ){

                            const fixture_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
                            const fixture_level = levelName;// level
                            const fixture_id = element.dbId;//ID
                            const fixture_unit =1;// count
                            const fixture_prop = element.properties.find(p => (p.displayName==property))?.displayValue;//prop
                            ligthtning_fixture_array.push([fixture_type,fixture_level,fixture_unit,fixture_id]);
                            if(fixture_prop!=undefined && fixture_prop!=''){
                              electric_circuit_array.push([fixture_prop,fixture_level,fixture_type,fixture_unit,fixture_id]);// electrical circuit list
                            }

                        }
                      
                          // break;
                    }else if(element.properties.find(p => (p.displayName=="Type Name"))?.displayValue!=undefined && element.properties[0].displayValue==('Revit Cable Trays') ){
              
                          if(element.properties.find(p => (p.displayName.includes("Level") && p.displayCategory =='Constraints'))?.displayValue==levelName || levelName=="Select All Levels" ){

                              
                              const cabletray_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
                              const cabletray_level = levelName;// level
                              const cabletray_id = element.dbId;//ID
                              const cabletray_length =element.properties.find(p => (p.displayName=="Length"))?.displayValue;// count
                              
                              cabletray_array.push([ cabletray_type, cabletray_level, "", cabletray_id,cabletray_length]);

                          }
                    
                        // break;
                  }

                  
                    
                  }
                }
        var finel_fixtures=instanceToSum(fixtures_array,["Fixture's Type","Fixture's Level","Fixture's Count","","Id"],3,5,"units");// [type,level,unit,NAN,id]
        var finel_lightning_fixtures=instanceToSum(ligthtning_fixture_array,["Lightning Fixture's Type","Lightning Fixture's Level","Lightning Fixture's Count","","Id"],3,5,"units");// [type,level,unit,NAN,id]
        var finel_cabletray=instanceToSum( cabletray_array,["Cable Trays Type","Cable Trays Level","Cable Trays Length","","Id"],3,5,"area");// [type,level,unit,NAN,id]
        var finel_circuit=instanceToSum( electric_circuit_array,["Circuit","Level","Fixture Type","Count","Id"],4,5,"units");// [type,level,unit,NAN,id]
        //data table:
      //circuit data
        var totalArea = modData.Elements.areas[modData.Elements.areas['length']-1][3]; // the total area value taken from the former calculation
        var numberOfCircuits=sumOfParameter(finel_circuit,3);
        var circuit_per_m = (!isNaN(numberOfCircuits/totalArea) && numberOfCircuits!=0)?(numberOfCircuits/totalArea).toFixed(2):0;
      //cabletray data
        var cableTrayLen = (sumOfParameter(finel_cabletray,3)/100).toFixed(2)
      
      //lightning data
        var numberOfLighting = sumOfParameter(finel_lightning_fixtures,3);
        var lighting_per_m= (!isNaN(numberOfLighting/totalArea) && numberOfLighting!=0)?(numberOfLighting/totalArea).toFixed(2):0;
    // electrical fixtures data
        var numberOfFixtures = sumOfParameter(finel_fixtures,3);
        var fixtures_per_m= (!isNaN(numberOfFixtures/totalArea) && numberOfFixtures!=0)?(numberOfFixtures/totalArea).toFixed(2):0;
        dataTable.push(["Floor Area","Circuits number","Circuits/[m²]","CableTray Length"]);
        dataTable.push([totalArea,numberOfCircuits,circuit_per_m,cableTrayLen]);
        dataTable.push(["","Lighting Fixture number","Lighting Fixture/[m²]",""]);
        dataTable.push(["",numberOfLighting,lighting_per_m,""]);
        dataTable.push(["","Electrical Fixture number","Electrical Fixture/[m²]",""]);
        dataTable.push(["",numberOfFixtures,fixtures_per_m,""]);
        return [finel_fixtures,finel_lightning_fixtures,finel_cabletray,finel_circuit,dataTable];
      
  }

  function Doors(elements,levelName,property){
    const doors_array = Array(1).fill(Array(5).fill(0));
    const doors_table = Array(1).fill(Array(17).fill(0));
    doors_array.push([0,0,0,0,0]);// added this ti fix the issue of starting from index 1 in the instance to sum function
    for(const element of elements ){
      if(element.properties.find(p => (p.displayName.includes("Name")))?.displayValue=="RH-72"){
        console.log('Urika');
      }
          
          if(element.properties.length>=3){
                var elementsLevel =element.properties.find(p => (p.displayName.includes("Level") && p.displayCategory =='Constraints'))?.displayValue;
    
              if(element.properties.find(p => (p.displayName=="Category"))?.displayValue!=undefined && element.properties[0].displayValue=='Revit Doors' ){
    
                if(elementsLevel==levelName  || levelName=="Select All Levels" ){

                    const door_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
                    const door_level = elementsLevel;// level
                    const door_id = element.dbId;//ID
                    const chosenProperty =element.properties.find(p => (p.displayName==property))?.displayValue;//property
                    doors_array.push([door_type,door_level,1,door_id,chosenProperty]);
                    //רשימת דלתות
                    const gmarCanaf=element.properties.find(p => (p.displayName=="גמר כנף"))?.displayValue || "";//גמר כנף 
                    const gmarMashkof=element.properties.find(p => (p.displayName=="גמר משקוף"))?.displayValue|| "";//גמר משקוף
                    const yaditHutz=element.properties.find(p => (p.displayName=="ידית חוץ"))?.displayValue|| "";//ידית חוץ
                    const yaditPnim=element.properties.find(p => (p.displayName=="ידית פנים"))?.displayValue || "";//ידית חוץ
                    
                    const bakara=element.properties.find(p => (p.displayName=="בקרה"))?.displayValue || "";//בקרה
                    
                    const doorNum=element.properties.find(p => (p.displayName=="מספר דלת"))?.displayValue || "";//מספר דלת
                    const fireDoor=element.properties.find(p => (p.displayName=="דלת אש"))?.displayValue || "";//דלת אש
                    const milut=element.properties.find(p => (p.displayName=="מילוט"))?.displayValue || "";//מילוט
                    const smoke=element.properties.find(p => (p.displayName=="דלת עשן"))?.displayValue || "";//דלת עשן
                    const behala=element.properties.find(p => (p.displayName=="ידית בהלה"))?.displayValue || "";//דרישה אקוסטית
                    const width=element.properties.find(p => (p.displayName=="Width"))?.displayValue || "";//width
                    const height=element.properties.find(p => (p.displayName=="Height"))?.displayValue || "";//'HEIGHT'
                    //variables with 2 options
                    var lock=element.properties.find(p => (p.displayName=="נעילה"))?.displayValue || "";//נעילה
                    lock == ""?lock=element.properties.find(p => (p.displayName=="סוג מנעול"))?.displayValue || "":0;//נעילה
                    var yazran=element.properties.find(p => (p.displayName=="יצרן"))?.displayValue || "";//יצרן
                    yazran==""?element.properties.find(p => (p.displayName=="Manufacturer"))?.displayValue || "":0;

                   doors_table.push([door_type,door_level,doorNum,gmarCanaf,gmarMashkof,yaditHutz,yaditPnim,yazran,bakara,lock,fireDoor,smoke,milut,behala,width,height,door_id])

                }
              
                  // break;
            }
          // }
        }
      }
      
      var finel_doors=instanceToSum(doors_array,["Door Type","Door Level","Count","Door Prop","Id"],3,5,"units");
      var sumOfDoors = 0;
      finel_doors.map(p=>isNaN(p[3])?0:sumOfDoors+=p[3]);
      finel_doors.push(["(Sum of Doors: "+sumOfDoors+")","","","",""]);
      finel_doors.shift();
      // var finel_prop=instanceToSum(property_array,["Wall Type","Wall Level","Count","Soffit Area","Id"],3,4,"area");
      return [finel_doors,doors_table];
    
    }

    // function instelation

    function Rooms(elements,property){
      const rooms_array = Array(1).fill(Array(5).fill(0));
      const property_array = Array(1).fill(Array(5).fill(0));
      var levelName = elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue;// take the level name from the first element
      levelName==undefined? levelName="Select All Levels":0;
      property_array.push(["Room Name & Level","Count","Area","Room Property","Id"]);
      for(const element of elements ){
            
          if(element.properties.length>=3){
            // for(var j=0;j<element.properties.length;j++){
    
              if(element.properties.find(p => (p.displayName=="Category"))?.displayValue!=undefined && element.properties[0].displayValue=='Revit Rooms' ){
    
                if(elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue==levelName || levelName=="Select All Levels" ){
    
                    
                    const rooms_type = element.properties.find(p => (p.displayName=="Name"))?.displayValue;//Type name 
                    const rooms_level = levelName;// level
                    const rooms_id = element.dbId;//ID
                    const rooms_area =element.properties.find(p => (p.displayName=='Area'))?.displayValue;//Type name 
                    var chosenProperty =element.properties.find(p => (p.displayName==property))?.displayValue;//Type name
                    chosenProperty==undefined?chosenProperty=0:0;
                    rooms_array.push([rooms_type,rooms_level,1,rooms_id,rooms_area]);
                    property_array.push([rooms_type +"; "+rooms_level,1,rooms_area,chosenProperty,rooms_id]);
                    
    
                }
              
                  // break;
            // }
          }
        }
      }

        var finel_room_names=instanceToSum(rooms_array,["Room Name","Room Level","Count","Room Area","Id"],3,4,"area");
        var finel_room_num=instanceToSum(rooms_array,["Room Name","Room Level","Count","Rooms Count","Id"],3,4,"units");
        var finel_room_types=[],rooms_count_by_type=[],rooms_id=[];
        finel_room_num.map(p=> p[0]!="Room Name"? finel_room_types.push(p[0]):0);
        finel_room_num.map(p=> p[3]!="Rooms Count"? rooms_count_by_type.push(p[3]):0);
        finel_room_num.map(p=> p[4]!="Id"? rooms_id.push(p[4]):0);
        var finel_histogram=[finel_room_types,rooms_count_by_type,rooms_id];



        // var finel_room_names=null;
        var sumOfRooms = 0, sumOfRoomsArea = 0;
        property_array.map(p=>isNaN(p[1])?0:sumOfRooms+=p[1]);
        property_array.map(p=>isNaN(p[2])?0:sumOfRoomsArea+=p[2]);
        property_array.push(["Rooms count:",sumOfRooms,"Rooms area:"+sumOfRoomsArea.toFixed(2),"",""]);
        property_array.shift();
        // finel_prop.map(p=>p.splice(2,1));
        // var finel_prop=null;
        return [finel_room_names,property_array,finel_histogram];
      
      }
//--------------------------------------------------------------------------
//=========FLOORS=============================

function Floors(elements,property){
  const floor_array = Array(1).fill(Array(5).fill(0));
  const property_array = Array(1).fill(Array(5).fill(0));
  var levelName = elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue;// take the level name from the first element
  levelName==undefined? levelName="Select All Levels":0;
  for(const element of elements ){
        
      if(element.properties.length>=3){
        // for(var j=0;j<element.properties.length;j++){

          if(element.properties.find(p => (p.displayName=="Category"))?.displayValue!=undefined && element.properties[0].displayValue=='Revit Floors' ){

            if(elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue==levelName || levelName=="Select All Levels" ){

                
                const floor_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
                const floor_level = levelName;// level
                const floor_id = element.dbId;//ID
                var floor_area =element.properties.find(p => (p.displayName=='Area'))?.displayValue;//Type name 
                !isNaN(floor_area)? floor_area=Number(floor_area.toFixed(2)):0;
                var chosenProperty =element.properties.find(p => (p.displayName==property))?.displayValue;//Type name
                chosenProperty==undefined?chosenProperty=0:0;
                floor_array.push([floor_type,floor_level,1,floor_id,floor_area]);
                

            }
          
              // break;
        // }
      }
    }
  }
  // const intersections = getIntersectingFloors(floor_array);
    var finel_floor=instanceToSum(floor_array,["Floor Name","Floor Level","Count","Floor Area","Id"],3,4,"area");
    const floorNames=[];
    const floorAreas=[];
    const floorIds=[];
    finel_floor.map(p=>p[0]=="Floor Name"?0:floorNames.push(p[0]));
    finel_floor.map(p=>p[3]=="Floor Area"?0:floorAreas.push(p[3]));
    finel_floor.map(p=>p[4]=="Id"?0:floorIds.push(p[4]));
    const floor_histogram=[floorNames,floorAreas,floorIds];
    var  totalFloorArea = 0;
    finel_floor.map(p=>!isNaN(p[3])?totalFloorArea=totalFloorArea+(p[3]):0);
    var totalRentableArea = modData.Elements.areas[modData.Elements.areas.length-1][3];
    isNaN(totalRentableArea)?totalRentableArea=0:0;
    var rentableFloorNames=["סה''כ שטח רצפה","שטח נטו קומה"];
    var floorToRentable_ratio=[rentableFloorNames,[totalFloorArea,totalRentableArea]]
    // finel_prop.map(p=>p.splice(2,1));
    // var finel_prop=null;
    return [finel_floor,floor_histogram,floorToRentable_ratio];
  
  }


//=========Ceilings=============================

function Ceilings(elements,property){
  const ceiling_array = Array(1).fill(Array(5).fill(0));
  const property_array = Array(1).fill(Array(5).fill(0));
  var levelName = elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue;// take the level name from the first element
  levelName==undefined? levelName="Select All Levels":0;
  for(const element of elements ){
        
      if(element.properties.length>=3){
        // for(var j=0;j<element.properties.length;j++){

          if(element.properties.find(p => (p.displayName=="Category"))?.displayValue!=undefined && element.properties[0].displayValue=='Revit Ceilings' ){

            if(elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue==levelName || levelName=="Select All Levels" ){

                
                const ceiling_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
                const ceiling_level = levelName;// level
                const ceiling_id = element.dbId;//ID
                var ceiling_area =element.properties.find(p => (p.displayName=='Area'))?.displayValue;//Type name 
                !isNaN(ceiling_area)? ceiling_area=Number(ceiling_area.toFixed(2)):0;
                var chosenProperty =element.properties.find(p => (p.displayName==property))?.displayValue;//Type name
                chosenProperty==undefined?chosenProperty=0:0;
                ceiling_array.push([ceiling_type,ceiling_level,1,ceiling_id,ceiling_area]);
                

            }
          
              // break;
        // }
      }
    }
  }

    var finel_ceiling=instanceToSum(ceiling_array,["Ceiling Name","Ceiling Level","Count","Ceiling Area","Id"],3,4,"area");
    const ceilingNames=[];
    const ceilingAreas=[];
    const ceilingIds=[];
    finel_ceiling.map(p=>p[0]=="Floor Name"?0:ceilingNames.push(p[0]));
    finel_ceiling.map(p=>p[3]=="Floor Area"?0:ceilingAreas.push(p[3]));
    finel_ceiling.map(p=>p[4]=="Id"?0:ceilingIds.push(p[4]));
    const ceiling_histogram=[ceilingNames,ceilingAreas,ceilingIds];
    var  totalCeilingArea = 0;
    finel_ceiling.map(p=>!isNaN(p[3])?totalCeilingArea=totalCeilingArea+(p[3]):0);
    var totalRentableArea = modData.Elements.areas[modData.Elements.areas.length-1][3];
    isNaN(totalRentableArea)?totalRentableArea=0:0;
    var rentableCeilingNames=["סה''כ שטח רצפה","שטח נטו קומה"];
    var ceilingToRentable_ratio=[rentableCeilingNames,[totalCeilingArea,totalRentableArea]]
    // finel_prop.map(p=>p.splice(2,1));
    // var finel_prop=null;
    return [finel_ceiling,ceiling_histogram,ceilingToRentable_ratio];
  
  }

//--------------------------------------------------------------------------
//=================>Plumbing START==========================================

function Plumbing(elements,property){
  const fixture_array = Array(1).fill(Array(5).fill(0));
  const property_array = Array(1).fill(Array(5).fill(0));
  var levelName = elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue;// take the level name from the first element
  levelName==undefined? levelName="Select All Levels":0;
  property_array.push(["Fixture Name","Level","Count","Property","Id"]);
  for(const element of elements ){
        
      if(element.properties.length>=3){
        // for(var j=0;j<element.properties.length;j++){

          if(element.properties.find(p => (p.displayName=="Category"))?.displayValue!=undefined && element.properties[0].displayValue=='Revit Plumbing Fixtures' ){

            if(elements[0].properties.find(p => (p.displayName.includes("Level") && p.displayCategory ==='Constraints'))?.displayValue==levelName || levelName=="Select All Levels" ){

                
                const fixture_type = element.properties.find(p => (p.displayName=="Type Name"))?.displayValue;//Type name 
                const fixture_level = levelName;// level
                const fixture_id = element.dbId;//ID
                const fixture_description = element.properties.find(p => (p.displayName=="Description"))?.displayValue;//Description
                var chosenProperty =element.properties.find(p => (p.displayName==property))?.displayValue;//Type name
                chosenProperty==undefined?chosenProperty=0:0;
                fixture_array.push([fixture_type,chosenProperty,fixture_description,fixture_id,1]);
                

            }
          
              // break;
        // }
      }
    }
  }

    var finel_fixture_num=instanceToSum(fixture_array,["Fixture Name","Fixture Property","Description","Count","Id"],3,4,"units");
    var finel_fixture_types=[],fixture_count_by_type=[],fixture_id=[];
    finel_fixture_num.map(p=> p[0]!="Fixture Name"? finel_fixture_types.push(p[0]):0);
    finel_fixture_num.map(p=> p[3]!="Fixture Count"? fixture_count_by_type.push(p[3]):0);
    finel_fixture_num.map(p=> p[4]!="Id"? fixture_id.push(p[4]):0);
    var finel_histogram=[finel_fixture_types,fixture_count_by_type,fixture_id];



    // var finel_room_names=null;
    var sumOfFixtures = 0, sumOfRoomsArea = 0;
    // property_array.map(p=>isNaN(p[1])?0:sumOfRooms+=p[1]);
    // property_array.map(p=>isNaN(p[2])?0:sumOfRoomsArea+=p[2]);
    // property_array.push(["Rooms count:",sumOfRooms,"Rooms area:"+sumOfRoomsArea.toFixed(2),"",""]);
    // property_array.shift();
    // finel_prop.map(p=>p.splice(2,1));
    // var finel_prop=null;
    return [finel_fixture_num];
  
  }
//=================>Plumbing END==========================================


//update tables by deleting the old table content, and inserting new content       
function updateDataTable(table_id,parentElement_id,table_width){//table_id -->string name. parentElement_id-->string name of row, table_width--> string of number in precentage like "50%"

  for(var i=0;i<table_id.length;i++){

    var dataTableDOM = document.getElementById(table_id[i]);
    //first table
      if(dataTableDOM!=undefined){
          if(dataTableDOM.parentElement.id != parentElement_id[i])
          {
              var firstRowChild = document.getElementById(parentElement_id[i]).firstChild;
              firstRowChild.remove();
          }
          else{
              dataTableDOM.remove();
          }
      }
 
      var row = document.getElementById(parentElement_id[i]);
      //Add data table
      const table = document.createElement("table");
      table.setAttribute("id", table_id[i]);
      table.classList.add("display");
      table.style.width = "50%";
      row.appendChild(table);

  }
         
}
// update chart canvases by deleting the old canvas, and updating the new one
function updateCanvas(canvas_id,parentElement_id){// canvas_id-->string of canvas id like "position04" . parentElement_id--> the id string of the parent element "col01"
  
  for(var i=0;i<canvas_id.length;i++){
    if(document.getElementById(canvas_id[i])!=undefined){
      document.getElementById(canvas_id[i]).remove();//make sure the canvas is removed
    }
     //update canvas
     var col = document.getElementById(parentElement_id[i]);
  
     const canvas = document.createElement("canvas");
     canvas.setAttribute("id", canvas_id[i]);
     canvas.classList.add("canvasfill");
     col.appendChild(canvas);

  }
 
}



function removeParentContent(listOfParents){// removes the children of all the parent element list 

  for(const parentId of listOfParents){
    if(document.getElementById(parentId)!=undefined){
      document.getElementById(parentId).replaceChildren();
      
    }
  }
  document.getElementById("id-select-prop").style.visibility= "hidden";// hide the property selection from HVAC dashboard
  document.getElementById("id-select-flow").style.visibility = "hidden";// hide the flow selection from HVAC dashboard
  document.getElementById("id-select-area").style.visibility = "hidden";// hide the flow selection from HVAC dashboard
}