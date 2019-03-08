<?php

$Nom= $_POST['Nom'];
$Prenom= $_POST['Prenom'];
$Mail= $_POST['Mail'];
$id=$_POST['id'];

include_once "private.php";
$request = $connec->prepare("UPDATE users SET Nom='$Nom',Prenom='$Prenom',Mail='$Mail' WHERE id='$id';");
$request->execute();

?>
