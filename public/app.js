console.log('I am alive!');

//function SayHello() {
    //console.log('SayHello called ...');
    //Läs av inmat av värde i textboxen
   
    //Skriv ut en hälsning med namnet från textboxen
    //console.log(ContactPersonName);
    //Hur kan jag skriva ut namnet till P elementets Content?
    //Hmm, hur kan jag få tag på P elementet?
    //document.getElementById('app').innerHTML = "Hejsan!";
    //const newP = document.createElement("P");
    //const newContent = document.createTextNode("Hi there!");
    //newP.appendChild(newContent);
    //const currentDIV = document.getElementById("app");
    //Alternativ
    //Hitta app elementet (DIV)
    //Lägg till P elementer till DIV elementet
    //const target = document.getElementById('app');
    //const newElement = document.createElement('p');
    //newElement.innerHTML = 'TESTING';
    //newElement.className = 'red';
    //target.appendChild(newElement);
//}

build();


function build() {
    const settingsDiv = document.createElement('div');
    settingsDiv.setAttribute('id', 'Settings');
    settingsDiv.id = 'kugg';
    app.appendChild(settingsDiv);

    const newSetting = document.createElement('h2'); 
    newSetting.innerHTML = 'Settings';
    newSetting.setAttribute("id", "setting");
    settingsDiv.appendChild(newSetting);
    setting(newSetting);
    

    const newInput = document.createElement('input');
    newInput.setAttribute("type", "text");
    newSetting.appendChild(newInput);

    const newTitle = document.createElement('h2');
    newTitle.innerHTML = 'Calculator';
    newTitle.setAttribute("id", "Title");
    app.appendChild(newTitle);

}

function setting(newSetting) {
    const newBackground = document.createElement('h1');
    newBackground.innerHTML = 'Background';
    newBackground.setAttribute("id", "Background");
    newSetting.appendChild(newBackground);    

    const newFont =document.createElement('h1');
    newFont.innerHTML='Fontsize';
    newFont.setAttribute("id", "Font");
    newSetting.appendChild(newFont);

    const newDropbtn = document.createElement('div');
    newDropbtn.id='dropbtn';
    newSetting.appendChild(newDropbtn);
    
    const newDroplist = document.createElement('button');
    newDroplist.setAttribute("id", "droplist");
    newDroplist.innerHTML = 'bakgrund';
    newDropbtn.appendChild(newDroplist);

    const divlist = document.createElement('div');
    divlist.id='listdiv';
    newDroplist.appendChild(divlist);

    const Backgroundlist = document.createElement('ul');
    Backgroundlist.innerHtml = 'Grey', 'Blue', 'Yellow';
    Backgroundlist.id='Backgroundlist';
    divlist.appendChild(Backgroundlist);
}