<?php

$Nom= $_POST['Nom'] ;
$Prenom= $_POST['Prenom'] ;
$Mail= $_POST['Mail'] ;

  include_once "private.php";
  $request = $connec->prepare("INSERT INTO users (Nom,Prenom,Mail) VALUES ('$Nom','$Prenom','$Mail');");
  $request->execute();
 ?>
