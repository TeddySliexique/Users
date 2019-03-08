<?php

$id=$_POST['id'];

include_once "private.php";
$request = $connec->prepare("DELETE FROM users WHERE id='$id';");
$request->execute();

 ?>
