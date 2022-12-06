let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

let body = document.querySelector('body');
body.style.textAlign = "center";
body.style.fontSize = "20px";

let nom = document.createElement('p');
nom.innerHTML = "Son nom est " + voiture.Nom;
body.append(nom);

let image = document.createElement('img');
image.src = voiture.imgUrl;
image.alt = "Eggo, la voiture du future";
body.append(image);

let nombre = document.createElement('p');
nombre.innerHTML = "Elle dispose de " + voiture.nombresRoues + " roues";
body.append(nombre);

let couleur = document.createElement('p');
couleur.innerHTML = "Elle est de couleur " + voiture.Couleur;
body.append(couleur);

let contructeur = document.createElement('p');
contructeur.innerHTML = "Le constructeur est " + voiture.Contructeur;
body.append(contructeur);

let carburant = document.createElement('p');
carburant.innerHTML = "Cette voiture fonctionne aux énergies renouvelables de type " + voiture.Carburant;
body.append(carburant);

let porte = document.createElement('p');
porte.innerHTML = "Elle contient " + voiture.nombrePortes + " portes";
body.append(porte);

let autonomie = document.createElement('p');
autonomie.innerHTML = "Elle a une autonomie de " + voiture.Autonomie;
body.append(autonomie);

let vitesse = document.createElement('p');
vitesse.innerHTML = "Elle peut aller à une vitesse maximale de " + voiture.vitesseMaxi;
body.append(vitesse);