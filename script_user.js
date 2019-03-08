
function saveUser(){

var xhr= new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){

    var parent=document.getElementById("ajout");
    var enfant1=document.createElement("td");
    var enfant2=document.createElement("td");
    var enfant3=document.createElement("td");
    var enfant4=document.createElement("td");
    var enfant5=document.createElement("td");

    var petit_enfant1=document.createElement("input");
    petit_enfant1.type= "submit";
    petit_enfant1.value="Voir";
    petit_enfant1.onclick=function(){
      Voir();
    }
    var petit_enfant2=document.createElement("input");
    petit_enfant2.type= "submit";
    petit_enfant2.value="M";
    petit_enfant2.onclick=function(){
      Update();
    }
    var petit_enfant3=document.createElement("input");
    petit_enfant3.type= "submit";
    petit_enfant3.value="X";
    petit_enfant3.onclick=function(){
      Delete();
    }

    enfant1.innerHTML=document.getElementById("Nom").value;
    enfant2.innerHTML=document.getElementById("Prenom").value;

    parent.appendChild(enfant1);
    parent.appendChild(enfant2);
    parent.appendChild(enfant3);
    parent.appendChild(enfant4);
    parent.appendChild(enfant5);
    enfant3.appendChild(petit_enfant1);
    enfant4.appendChild(petit_enfant2);
    enfant5.appendChild(petit_enfant3);

    document.getElementById("Nom").value="";
    document.getElementById("Prenom").value="";
    document.getElementById("Mail").value="";

  }
};
xhr.open('POST','add_users.php');

var data = new FormData();

data.append('Nom',document.getElementById('Nom').value);
data.append('Prenom',document.getElementById('Prenom').value);
data.append('Mail',document.getElementById('Mail').value);

xhr.send(data);

}

function Voir(param1, param2, param3){
  document.getElementById('Nom').value= param1;
  document.getElementById('Prenom').value= param2;
  document.getElementById('Mail').value= param3;
}

function Update(param1,param2){

  var parent=document.getElementById("Change"+param2);

  var enfant1= document.createElement("td");
  var enfant2= document.createElement("td");
  var enfant3= document.createElement("td");
  var enfant4= document.createElement("td");

  var petit_enfant1=document.createElement("input");
  petit_enfant1.id="NomU";
  petit_enfant1.type="text";
  petit_enfant1.placeholder="Nom";

  var petit_enfant2=document.createElement("input");
  petit_enfant2.id="PrenomU";
  petit_enfant2.type="text";
  petit_enfant2.placeholder="Prenom";

  var petit_enfant3=document.createElement("input");
  petit_enfant3.id="MailU";
  petit_enfant3.type="text";
  petit_enfant3.placeholder="Mail";

  var petit_enfant4=document.createElement("input");
  petit_enfant4.id="idU";
  petit_enfant4.type="hidden";
  petit_enfant4.value=param1;

  var petit_enfant5=document.createElement("input");
  petit_enfant5.type="submit";
  petit_enfant5.value="Valider";
  petit_enfant5.onclick= function(){
    updateUser(param2);
  }
  parent.appendChild(enfant1);
  parent.appendChild(enfant2);
  parent.appendChild(enfant3);
  parent.appendChild(enfant4);
  enfant1.appendChild(petit_enfant1);
  enfant2.appendChild(petit_enfant2);
  enfant3.appendChild(petit_enfant3);
  enfant4.appendChild(petit_enfant4);
  enfant4.appendChild(petit_enfant5);
}

function updateUser(param){

  var xhr= new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){

    var user=document.getElementById('Change'+param);
    var enfant=document.createElement("td");
    enfant.innerHTML=document.getElementById("NomU").value;
    var enfant2=document.createElement("td");
    enfant2.innerHTML=document.getElementById("PrenomU").value;
    user.removeChild(user.childNodes[0]);
    user.replaceChild(enfant,user.childNodes[0]);
    user.replaceChild(enfant2,user.childNodes[1]);
    user.removeChild(user.childNodes[2]);
    user.removeChild(user.childNodes[11]);
    user.removeChild(user.childNodes[11]);
    user.removeChild(user.childNodes[10]);
    user.removeChild(user.childNodes[9]);
    }
  };
  xhr.open('POST','update_users.php');

  var data = new FormData();

  data.append('Nom',document.getElementById('NomU').value);
  data.append('Prenom',document.getElementById('PrenomU').value);
  data.append('Mail',document.getElementById('MailU').value);
  data.append('id',document.getElementById('idU').value)

  xhr.send(data);

}

function Delete(param,param2){
  var xhr= new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var user=document.getElementById('Change'+param2);
      while(user.firstChild){
          user.removeChild(user.firstChild);
      }
    }
  };
  xhr.open('POST','delete_users.php');

  var data = new FormData();

  data.append('id',param);
  xhr.send(data);
}
