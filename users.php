<?php
//============================================================================//
function allUsers(){
  include_once "private.php";
  $request = $connec->prepare("SELECT * FROM users;");
  $request->setFetchMode(PDO::FETCH_CLASS, 'Users');
  $request->execute();
  return $request->fetchAll();
}
$Alls = allUsers();
//============================================================================//
class Users{
  public function getId(){
    return $this->id;
  }
  public function getNom(){
    return $this->Nom;
  }
  public function getPrenom(){
    return $this->Prenom;
  }
  public function getMail(){
    return $this->Mail;
  }
  public function getAll(){
    return $this->id." ".$this->Nom." ".$this->Prenom." ".$this->Mail;
  }
}
//============================================================================//
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
    <script src="script_user.js"></script>
    <title>Utilisateurs</title>
  </head>
  <body>
      <h2>Formulaire</h2>
      <input id="Nom" type="text" placeholder="Nom">
      <br><br>
      <input id="Prenom" type="text" placeholder="Prenom">
      <br><br>
      <input id="Mail" type="text" placeholder="Mail">
      <br><br>
      <input onclick="saveUser();" type="submit" name="" value="Ajouter">
    <br><br>
    <table id="table" border="2">
      <?php $nbre=0; ?>
      <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Voir</th>
        <th>Modifier</th>
        <th>Supprimer</th>
      </tr>
        <?php foreach($Alls as $All) :?>
      <tr id="Change<?php echo $nbre=$nbre+1 ; ?>">
        <td id="pNom"><?php echo $All->getNom(); ?></td>
        <td id="pPrenom"><?php echo $All->getPrenom(); ?></td>
        <td><input type="submit" onclick="Voir('<?php echo $All->getNom()."','".$All->getPrenom()."','".$All->getMail();?>')" value="Voir"></td>
        <td><input type="submit" onclick="Update(<?php echo $All->getId().",".$nbre;?>);" value="M"></td>
        <td><input type="submit" onclick="Delete(<?php echo $All->getId().",".$nbre; ?>);" value="X"></td>
      </tr>
    <?php endforeach ?>
    <tr id="ajout"></tr>
    </table>
  </body>
</html>
