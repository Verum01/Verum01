"use strict";

let listePersonnages = [{prenom : "Jannet", nom : "Anderson", age : "32", desc : "Enquêteur" , capcmbt : "60", captir : "35", force : "40", agilite : "40", social : "45", int : "70", perception : "80", stress : "70", spec1 : "+5RC en PER", spec2 : "+20 TIR avec un glock", spec3 : "-30 partout si jet stress raté", item1 : "glock avec 2*13 balles", item2 : "chargeur de 6balles", item3 : "lampe de poche 11h"},
{prenom : "Deni", nom : "Verou", age : "19", desc : "Livreur", capcmbt : "30", captir : "20", force : "45", agilite : "40", social : "55", int : "40", perception : "30", stress : "30", spec1 : "Peut assainir la nourriture", spec2 : "+30 pour conduire des véhicules terrestres", spec3 : "A un bonus de 10 en rapidité", item1 : "Pied de biche", item2 : "petit couteau", item3 : "gamelle + réchaud"},
{age: "46", agilite: "20", capcmbt: "20", captir: "30", desc: "Geek", force: "20", int: "65", item1: "Six coups 6 balles chargées", item2: "1 balle", item3: "mallette remplie de divers outils utiles pour l'électronique", nom: "Blacket", perception: "55", prenom: "William", social: "40", spec1: "+20 INT", spec2: "Peut créer des plans aussi stupides qu'efficaces... parfois", spec3: "est capable d'interagir avec certains appareils électroniques", stress: "55"},
{age: "44", agilite: "40", capcmbt: "40", captir: "20", desc: "Fermier", force: "70", int: "30", item1: "Fourche", item2: "30m de corder", item3: "/", nom: "Douglas", perception: "45", prenom: "Benjamin", social: "25", spec1: "+60 social avec des animaux", spec2: "Rien ne le dégoute, il peut se salir les mains sans soucis", spec3: "+5RC en FO", stress: "60"},
{age: "37" ,agilite: "70", capcmbt: "65" ,captir: "80", desc: "Fou", force: "60", int: "60", item1: "Fusil mitrailleur (2chargeurs de 30 balles)", item2: "Fusil à pompe (6 cartouches)", item3: "Masse d'arme médiévale", nom: "Ekkelman", perception: "70", prenom: "Samantha", social: "15", spec1: "un peu tarée : EC+5 RC+5", spec2: "Surdouée : +5RC en Cmbt et Tir", spec3: "Tire toujours trop vite et trop longtemps", stress: "80"},
{age: "16", agilite: "50", capcmbt: "55", captir: "55", desc: "Dépressif changé", force: "40", int: "80", item1: "Glock avec 1 chargeur 13 balles", item2: "chargeur de 4 balles", item3: "40m de corde", nom: "Heiner", perception: "60", prenom: "Sarah", social: "45", spec1: "+10 aux jets de survie", spec2: "Peut relancer un jet de stress raté", spec3: "+10 pour aider les autres", stress: "80"},
{age: "45", agilite: "65", capcmbt: "75", captir: "80", desc: "Militaire", force: "75", int: "40", item1: "Fusil Mitrailleur 2 chargeurs pleins (30 balles)", item2: "Glock 2 chargeur 13 balles", item3: "Un chargeur de pistolet", nom: "Mocktwon", perception: "65", prenom: "John", social: "35", spec1: "Tue les zombies en un coup", spec2: "+5RC en Cmbt et Tir", spec3: "+10 pour les actions solo", stress: "75"},
{age: "63", agilite: "25", capcmbt: "25", captir: "35", desc: "Scientifique", force: "20", int: "80", item1: "Glock avec chargeur 11 balles", item2: "6 doses d'acide chloridrique", item3: "Une trousse de secours", nom: "Nori", perception: "60", prenom: "Camille", social: "35", spec1: "Premier soins : +10", spec2: "connaissance des zombies : +20 INT", spec3: "connaissance des produits : +20INT", stress: "35"},
{age: "22", agilite: "30", capcmbt: "25", captir: "30", desc: "Je sais tout chanceuse", force: "20", int: "50", item1: "Barre à mine", item2: "dictionnaire", item3: "/", nom: "Dupuit", perception: "45", prenom: "Harmonie", social: "80", spec1: "Je sais tout : Pense tout savoir", spec2: "Chance incroyable : Peut atomiquement réussir son jet une fois par session", spec3: "Insupportable : Perd 5 de social par heure passé avec toute personne", stress: "40"},
{age: "87", agilite: "20", capcmbt: "35", captir: "65", desc: "Papi gateux", force: "35", int: "65", item1: "Fusil de chasse (2 coups) 13 cartouches", item2: "Uzi 1 chargeur 32 balles", item3: "1 chargeur d'uzi (13 balles)", nom: "Butterfly", perception: "60", prenom: "George", social: "55", spec1: "EC+10 RC+5", spec2: "Dans les moments d'inactivité, s'endort sur un jet de force raté", spec3: "A 50% de chance d'éviter les jets de stress, il ne comprend alors rien à la situation", stress: "25"},
{age: "89", agilite: "20", capcmbt: "30", captir: "70", desc: "Mamie badasse", force: "30", int: "70", item1: "Fusil de chasse (2 coups) 16 cartouches", item2: "Fusil à pompe (8 cartouches)", item3: "Long poignard", nom: "Dumbfire", perception: "70", prenom: "Olive", social: "60", spec1: "Tue les zombies en un coup", spec2: "+5RC, peut une fois par session relancer un EC", spec3: "Raciste : +15 Cmbt et Tir contre les adversaires qui ne sont pas européens", stress: "50"},
{age: "29", agilite: "25", capcmbt: "25", captir: "20", desc: "Téléréalité", force: "20", int: "15", item1: "Grand couteau de cuisine", item2: "/", item3: "/", nom: "Benattia", perception: "20", prenom: "Nabilla", social: "35", spec1: "Non mais alo quoi !", spec2: "Se considère comme importante", pec3: "Les jets sociaux sur des humains de 40INT ou moins sont automatiquement réussis", stress: "50"},
{age: "13", agilite: "65", capcmbt: "55", captir: "30", desc: "Gamin", force: "20", int: "30", item1: "Nerf avec 19 balles", item2: "/", item3: "/", nom: "Longchamp", perception: "35", prenom: "Lara", social: "65", spec1: "Ne peut pas être laissée seule", spec2: "Sur un jet de stress raté, reste immobile et pleure", spec3: "+5EC pour tout le monde jusqu'à la fin si elle meurt", stress: "80"},
{age: "06", agilite: "70", capcmbt: "65", captir: "0", desc: "Chien", force: "55", int: "15", item1: "/", item2: "/", item3: "/", nom: "/", perception: "80", prenom: "Goupil", social: "30", spec1: "+5RC", spec2: "+5RC pour les autres alliés", spec3: "Aux dernières nouvelles, ne peut pas se faire infecter", stress: "40"},
{age: "54", agilite: "30", capcmbt: "30", captir: "35", desc: "Médecin", force: "35", int: "80", item1: "Une grande machette", item2: "3 trousses de secours", item3: "/", nom: "Emrena", perception: "65", prenom: "Edward", social: "55", spec1: "Premiers soins : +20", spec2: "Analyse des blessures : +20", spec3: "+5RC pour soigner", stress: "30"},
{age: "25", agilite: "30", capcmbt: "25", captir: "20", desc: "Youtuber", force: "30", int: "60", item1: "Batte cloutée", item2: "Machette", item3: "Glock avec 2 chargeurs pleins (13 balles) + chargeur 1 balle", nom: "Hauchard", perception: "50", prenom: "Lucas", social: "70", spec1: "+5RC", spec2: "Donne +20 Stress aux autres membres du groupe", spec3: "Les jets sociaux sont automatiquement réussis sur les personnes entre 12 et 30 ans", stress: "30"},
{age: "32", agilite: "50", capcmbt: "60", captir: "25", desc: "Pompier", force: "65", int: "40", item1: "Hache d'incendie", item2: "2 trousses de secours", item3: "Fusil mitrailleur chargeur (10 balles)", nom: "Sanchez", perception: "75", prenom: "Polo", social: "45", spec1: "Premiers soins : +15", spec2: "Peut, une fois pas session, relancer un jet raté", spec3: "+10 pour aider les autres", stress: "80"}]

let nouveauPersonnage = {};
let nom;
let prenom;
let desc;
let age;
let capcmbt;
let captir;
let force;
let agilite;
let social;
let int;
let perception;
let stress;
let spec1;
let spec2;
let spec3;
let item1;
let item2;
let item3;
let stringPersonnage;
let dernier = listePersonnages.length - 1;

function afficherReponses(resultat){
    document.getElementById("reponsesAffichage").innerHTML = resultat;
}

function chercherElementById(valeur){
    let dom;
    dom = document.getElementById(valeur).value;
    return dom;
}

function ajoutTableauPersonnages(){
    let phraseDom = "<div class=\"tableauTrier\"><h1 class=\"titre\">Tous les personnages</h1><input type=\"button\" value=\"Trier par nom de famille\" onclick=\"return trierNomDeFamille(listePersonnages)\" class=\"bouttonTrier\"><input type=\"button\" value=\"Trier par Age\" onclick=\"return trierAge(listePersonnages)\" class=\"bouttonTrierAge\"><br><br><select class=\"croissantDecroissant\" id=\"croissance\"><option>Croissant</option><option>Décroissant</option></select><br><br><table><thead><tr><th>Nom</th><th>Prénom</th><th>Age</th><th>Description</th><th>Cap cmbt</th><th>Cap Tir</th><th>Force</th><th>Agi</th><th>Social</th><th>Int</th><th>Per</th><th>Stress</th><th>Fiches</th></tr></thead>";
    for(let i in listePersonnages){
        phraseDom += "<tr><td>" + listePersonnages[i]["nom"] + "</td><td>" + listePersonnages[i]["prenom"] + "</td><td>" + listePersonnages[i]["age"] + "</td><td>" + listePersonnages[i]["desc"] + "</td><td>" + listePersonnages[i]["capcmbt"] + "</td><td>" + listePersonnages[i]["captir"] + "</td><td>" + listePersonnages[i]["force"] + "</td><td>" + listePersonnages[i]["agilite"] + "</td><td>" + listePersonnages[i]["social"] + "</td><td>" + listePersonnages[i]["int"] + "</td><td>" + listePersonnages[i]["perception"] + "</td><td>" + listePersonnages[i]["stress"] + "</td><td><input type=\"button\" value=\"Fiche\" class=\"fiches\" onclick=\"afficherFiches(" + i + ")\"></td></tr>";
    }
    phraseDom += "</table></div><br><footer class=\"piedPage\"><span class=\"attention\">ATTENTION !</span> Si vous actualisez la page / cliquez sur \"Fiche\", vous perdrez les nouveaux personnages</footer>";
    document.getElementsByClassName('tableauPersos')[0].innerHTML = phraseDom;
}

function ajouterPersonnageTableau(objet){
    stringPersonnage = "<tr><td>" + objet["nom"] + "</td><td>" + objet["prenom"] + "</td><td>" + objet["age"] + "</td><td>" + objet["desc"] + "</td><td>" + objet["capcmbt"] + "</td><td>" + objet["captir"] + "</td><td>" + objet["force"] + "</td><td>" + objet["agilite"] + "</td><td>" + objet["social"] + "</td><td>" + objet["int"] + "</td><td>" + objet["perception"] + "</td><td>" + objet["stress"] + "</td></tr>";
    document.querySelector('table').innerHTML += stringPersonnage;
}

function ajouterPersonnage(){
    nom = chercherElementById("nomPersonnage");
    prenom = chercherElementById("prenomPersonnage");
    desc = chercherElementById("descPersonnage");
    age = chercherElementById("agePersonnage");
    capcmbt = chercherElementById("capcmbtPersonnage");
    captir = chercherElementById("capTirPersonnage");
    force = chercherElementById("forcePersonnage");
    agilite = chercherElementById("agilitePersonnage");
    social = chercherElementById("socialPersonnage");
    int = chercherElementById("intPersonnage");
    perception = chercherElementById("perPersonnage");
    stress = chercherElementById("stressPersonnage");
    spec1 = chercherElementById("spec1");
    spec2 = chercherElementById("spec2");
    spec3 = chercherElementById("spec3");
    item1 = chercherElementById("item1");
    item2 = chercherElementById("item2");
    item3 = chercherElementById("item3");

    for (let i in listePersonnages){
        if((nom == "") || (prenom == "") || (desc == "") || (age == "") || (capcmbt == "") || (captir == "") || (force == "") || (agilite == "") || (social == "") || (int == "") || (perception == "") || (stress == "") || (spec1 =="") || (spec2 == "") || (spec3 == "") || (item1 == "") || (item2 == "") || (item3 == "")){
            afficherReponses('<span style="color : darkred">[ERREUR] : Veuillez remplir tous les champs !</span>');
            break;
        } else if ((nom == listePersonnages[i]["nom"]) && (prenom == listePersonnages[i]["prenom"])){
            afficherReponses('<span style="color : darkred"> [ERREUR] : Le couple nom/prénom du personnage introduit existe déjà</span>');
            break;
        } else {
            nouveauPersonnage.item3 = item3;
            nouveauPersonnage.item2 = item2;
            nouveauPersonnage.item1 = item1;
            nouveauPersonnage.spec3 = spec3;
            nouveauPersonnage.spec2 = spec2;
            nouveauPersonnage.spec1 = spec1;
            nouveauPersonnage.stress = stress;
            nouveauPersonnage.perception = perception;
            nouveauPersonnage.int = int;
            nouveauPersonnage.social = social;
            nouveauPersonnage.agilite = agilite;
            nouveauPersonnage.force = force;
            nouveauPersonnage.captir = captir;
            nouveauPersonnage.capcmbt = capcmbt;
            nouveauPersonnage.age = age;
            nouveauPersonnage.prenom = prenom;
            nouveauPersonnage.nom = nom;
            nouveauPersonnage.desc = desc;
            ajouterPersonnageTableau(nouveauPersonnage);
            listePersonnages.push(nouveauPersonnage);
            afficherReponses("<b>" + nom + " " + prenom + " ayant comme description " + desc + " a bien été ajouté ! </b>");
            ajoutTableauPersonnages();
            nouveauPersonnage = {};
            break;
        }
    }
}

function lancerDe(){
    let nombreDe = Math.round(Math.random()*(+document.getElementById("nombreFace").value));
    nombreDe += +document.getElementById("nombrePlus").value;
    document.getElementById("affichageResultatDe").innerHTML = nombreDe;
}

function trierNomDeFamille(listePersonnages){
    let croissance = document.getElementById("croissance").value;
    if (croissance == "Décroissant"){
        let tableauFinal = "<div class=\"tableauTrier\"><h1 class=\"titre\">Tous les personnages</h1><input type=\"button\" value=\"Trier par nom de famille\" onclick=\"return trierNomDeFamille(listePersonnages)\" class=\"bouttonTrier\"><input type=\"button\" value=\"Trier par Age\" onclick=\"return trierAge(listePersonnages)\" class=\"bouttonTrierAge\"><br><br><select class=\"croissantDecroissant\" id=\"croissance\"><option>Croissant</option><option>Décroissant</option></select><br><br><table><thead><tr><th>Nom</th><th>Prénom</th><th>Age</th><th>Description</th><th>Cap cmbt</th><th>Cap Tir</th><th>Force</th><th>Agi</th><th>Social</th><th>Int</th><th>Per</th><th>Stress</th><th>Fiches</th></tr></thead>";
        listePersonnages.sort((a,b) => (b.nom > a.nom) ? 1 : ((a.nom > b.nom) ? -1 : 0));
        for (let i in listePersonnages) {
            tableauFinal += "<tr><td>" + listePersonnages[i]["nom"] + "</td><td>" + listePersonnages[i]["prenom"] + "</td><td>" + listePersonnages[i]["age"] + "</td><td>" + listePersonnages[i]["desc"] + "</td><td>" + listePersonnages[i]["capcmbt"] + "</td><td>" + listePersonnages[i]["captir"] + "</td><td>" + listePersonnages[i]["force"] + "</td><td>" + listePersonnages[i]["agilite"] + "</td><td>" + listePersonnages[i]["social"] + "</td><td>" + listePersonnages[i]["int"] + "</td><td>" + listePersonnages[i]["perception"] + "</td><td>" + listePersonnages[i]["stress"] + "</td><td><input type=\"button\" value=\"Fiche\" class=\"fiches\" onclick=\"afficherFiches(" + i + ")\"></td></tr>";
        }

        tableauFinal += "</table></div>";
        document.getElementsByClassName("tableauTrier")[0].innerHTML = tableauFinal;
    } else {
        let tableauFinal = "<div class=\"tableauTrier\"><h1 class=\"titre\">Tous les personnages</h1><input type=\"button\" value=\"Trier par nom de famille\" onclick=\"return trierNomDeFamille(listePersonnages)\" class=\"bouttonTrier\"><input type=\"button\" value=\"Trier par Age\" onclick=\"return trierAge(listePersonnages)\" class=\"bouttonTrierAge\"><br><br><select class=\"croissantDecroissant\" id=\"croissance\"><option>Croissant</option><option>Décroissant</option></select><br><br><table><thead><tr><th>Nom</th><th>Prénom</th><th>Age</th><th>Description</th><th>Cap cmbt</th><th>Cap Tir</th><th>Force</th><th>Agi</th><th>Social</th><th>Int</th><th>Per</th><th>Stress</th><th>Fiches</th></tr></thead>";
        listePersonnages.sort((a,b) => (a.nom > b.nom) ? 1 : ((b.nom > a.nom) ? -1 : 0));
        for (let i in listePersonnages) {
            tableauFinal += "<tr><td>" + listePersonnages[i]["nom"] + "</td><td>" + listePersonnages[i]["prenom"] + "</td><td>" + listePersonnages[i]["age"] + "</td><td>" + listePersonnages[i]["desc"] + "</td><td>" + listePersonnages[i]["capcmbt"] + "</td><td>" + listePersonnages[i]["captir"] + "</td><td>" + listePersonnages[i]["force"] + "</td><td>" + listePersonnages[i]["agilite"] + "</td><td>" + listePersonnages[i]["social"] + "</td><td>" + listePersonnages[i]["int"] + "</td><td>" + listePersonnages[i]["perception"] + "</td><td>" + listePersonnages[i]["stress"] + "</td><td><input type=\"button\" value=\"Fiche\" class=\"fiches\" onclick=\"afficherFiches(" + i + ")\"></td></tr>";
        }

        tableauFinal += "</table></div>";
        document.getElementsByClassName("tableauTrier")[0].innerHTML = tableauFinal;
    }
}

function trierAge(listePersonnages){
    let croissance = document.getElementById("croissance").value;
    if (croissance == "Décroissant"){
        let tableauAge = "<div class=\"tableauTrier\"><h1 class=\"titre\">Tous les personnages</h1><input type=\"button\" value=\"Trier par nom de famille\" onclick=\"return trierNomDeFamille(listePersonnages)\" class=\"bouttonTrierFamille\"><input type=\"button\" value=\"Trier par Age\" onclick=\"return trierAge(listePersonnages)\" class=\"bouttonTrierAge\"><br><br><select class=\"croissantDecroissant\" id=\"croissance\"><option>Croissant</option><option>Décroissant</option></select><br><br><table><thead><tr><th>Nom</th><th>Prénom</th><th>Age</th><th>Description</th><th>Cap cmbt</th><th>Cap Tir</th><th>Force</th><th>Agi</th><th>Social</th><th>Int</th><th>Per</th><th>Stress</th><th>Fiches</th></tr></thead>";
        listePersonnages.sort((a,b) => (b.age > a.age) ? 1 : ((a.age > b.age) ? -1 : 0));
        for (let i in listePersonnages) {
            tableauAge += "<tr><td>" + listePersonnages[i]["nom"] + "</td><td>" + listePersonnages[i]["prenom"] + "</td><td>" + listePersonnages[i]["age"] + "</td><td>" + listePersonnages[i]["desc"] + "</td><td>" + listePersonnages[i]["capcmbt"] + "</td><td>" + listePersonnages[i]["captir"] + "</td><td>" + listePersonnages[i]["force"] + "</td><td>" + listePersonnages[i]["agilite"] + "</td><td>" + listePersonnages[i]["social"] + "</td><td>" + listePersonnages[i]["int"] + "</td><td>" + listePersonnages[i]["perception"] + "</td><td>" + listePersonnages[i]["stress"] + "</td><td><input type=\"button\" value=\"Fiche\" class=\"fiches\" onclick=\"afficherFiches(" + i + ")\"></td></tr>";
        }

        tableauAge += "</table></div>";
        document.getElementsByClassName("tableauTrier")[0].innerHTML = tableauAge;
    } else {
        let tableauAge = "<div class=\"tableauTrier\"><h1 class=\"titre\">Tous les personnages</h1><input type=\"button\" value=\"Trier par nom de famille\" onclick=\"return trierNomDeFamille(listePersonnages)\" class=\"bouttonTrierFamille\"><input type=\"button\" value=\"Trier par Age\" onclick=\"return trierAge(listePersonnages)\" class=\"bouttonTrierAge\"><br><br><select class=\"croissantDecroissant\" id=\"croissance\"><option>Croissant</option><option>Décroissant</option></select><br><br><table><thead><tr><th>Nom</th><th>Prénom</th><th>Age</th><th>Description</th><th>Cap cmbt</th><th>Cap Tir</th><th>Force</th><th>Agi</th><th>Social</th><th>Int</th><th>Per</th><th>Stress</th><th>Fiches</th></tr></thead>";
        listePersonnages.sort((a,b) => (a.age > b.age) ? 1 : ((b.age > a.age) ? -1 : 0));
        for (let i in listePersonnages) {
            tableauAge += "<tr><td>" + listePersonnages[i]["nom"] + "</td><td>" + listePersonnages[i]["prenom"] + "</td><td>" + listePersonnages[i]["age"] + "</td><td>" + listePersonnages[i]["desc"] + "</td><td>" + listePersonnages[i]["capcmbt"] + "</td><td>" + listePersonnages[i]["captir"] + "</td><td>" + listePersonnages[i]["force"] + "</td><td>" + listePersonnages[i]["agilite"] + "</td><td>" + listePersonnages[i]["social"] + "</td><td>" + listePersonnages[i]["int"] + "</td><td>" + listePersonnages[i]["perception"] + "</td><td>" + listePersonnages[i]["stress"] + "</td><td><input type=\"button\" value=\"Fiche\" class=\"fiches\" onclick=\"afficherFiches(" + i + ")\"></td></tr>";
        }

        tableauAge += "</table></div>";
        document.getElementsByClassName("tableauTrier")[0].innerHTML = tableauAge;
    }
}

function afficherFiches(i){
    document.querySelector('html').innerHTML = '<!DOCTYPE html><html><meta charset="UTF-8"><head><title>Fiche de ' + listePersonnages[i]["nom"] + ' ' + listePersonnages[i]["prenom"] + '</title><script src="js/site.js"></script><link rel="stylesheet" type="text/css" href="CSS/site.css"></head><body><header><div class="menusButton"><a href="index.html" class="button1"><h2>Accueil</h2></a><a href="Personnages.html" class="button2"><h2>Personnages</h2></a><a href="histoire.html" class="button3"><h2>L\'avancée de l\'histoire</h2></a></div></header><section class="fichesPersoSite"><h1 class="titrePerso">Fiche de ' + listePersonnages[i]["nom"] + ' ' + listePersonnages[i]["prenom"] + '</h1><br><div class="cadre"><div class="identite"><h2 class="titreH2">Identité</h2>Nom : <span class="gras">' + listePersonnages[i]["nom"] + '</span><br>Prenom : <span class="gras">' + listePersonnages[i]["prenom"] + '</span><br>Age : <span class="gras">' + listePersonnages[i]["age"] + '</span><br>Description : <span class="gras">' + listePersonnages[i]["desc"] + '</span></div><div class="capacites"><h2 class="titreH2">Capacités</h2>Capacité Combat : <span class="gras">' + listePersonnages[i]["capcmbt"] + '</span><br>Capacité Tir : <span class="gras">' + listePersonnages[i]["captir"] + '</span><br>Force : <span class="gras">' + listePersonnages[i]["force"] + '</span><br>Agilité : <span class="gras">' + listePersonnages[i]["agilite"] + '</span><br>Social : <span class="gras">' + listePersonnages[i]["social"] + '</span><br>Intelligence : <span class="gras">' + listePersonnages[i]["int"] + '</span><br>Perception : <span class="gras">' + listePersonnages[i]["perception"] + '</span><br>Stress : <span class="gras">' + listePersonnages[i]["stress"] + '</span></div><div class="caracteristiques"><h2 class="titreH2">Caractéristiques</h2>Spécial 1 : <span class="gras">' + listePersonnages[i]["spec1"] + '</span><br>Spécial 2 : <span class="gras">' + listePersonnages[i]["spec2"] + '</span><br>Spécial 3 : <span class="gras">' + listePersonnages[i]["spec3"] + '</span><br>Objet 1 : <span class="gras">' + listePersonnages[i]["item1"] + '</span><br>Objet 2 : <span class="gras">' + listePersonnages[i]["item2"] + '</span><br>Objet 3 : <span class="gras">' + listePersonnages[i]["item3"] + '</span></div></div></section><br><footer class="piedPage">Si vous voulez retourner à la page précédente, rafraîchissez !</footer></body></html>';
}

function effacerFormulaire(){
    document.getElementById("nomPersonnage").value = "";
    document.getElementById("prenomPersonnage").value = "";
    document.getElementById("descPersonnage").value = "";
    document.getElementById("agePersonnage").value = "";
    document.getElementById("capcmbtPersonnage").value = "";
    document.getElementById("capTirPersonnage").value = "";
    document.getElementById("forcePersonnage").value = "";
    document.getElementById("agilitePersonnage").value = "";
    document.getElementById("socialPersonnage").value = "";
    document.getElementById("intPersonnage").value = "";
    document.getElementById("perPersonnage").value = "";
    document.getElementById("stressPersonnage").value = "";
    document.getElementById("spec1").value = "";
    document.getElementById("spec2").value = "";
    document.getElementById("spec3").value = "";
    document.getElementById("item1").value = "";
    document.getElementById("item2").value = "";
    document.getElementById("item3").value = "";
} 