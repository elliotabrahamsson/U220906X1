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
    const target = document.getElementById('app');
    const newElement1 = document.createElement('h1');
    newElement1.innerHTML = 'Settings';
    newElement1.setAttribute("id", "setting");
    target.appendChild(newElement1);
    

    const box = document.getElementById('app');
    const newInput = document.createElement('input');
    newInput.setAttribute("type", "text");
    box.appendChild(newInput);

    const targCalc = document.getElementById('app')
    const newTitle = document.createElement('h1');
    newTitle.innerHTML = 'Calculator';
    targCalc.appendChild(newTitle);

}