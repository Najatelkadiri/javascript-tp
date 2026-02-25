//Partie 1
//1. Créer 5 objets produit avec des valeurs réalistes (prix et stock différents).
//2. Regrouper ces produits dans un tableau produits.
const produit=[
    {id:1,nom:"telephone",categorie:"informatique",prix:2000,stock:10},
    {id:2,nom:"pc",categorie:"informatique",prix:5400,stock:17},
    {id:3,nom:"souris",categorie:"informatique",prix:100,stock:100},
    {id:4,nom:"server",categorie:"informatique",prix:5000,stock:0},
    {id:5,nom:"RAM 16G",categorie:"informatique",prix:400,stock:100},
]
//3. Afficher dans la console la liste des produits sous la forme :o Nom - Catégorie - Prix DH - Stock
produit.forEach((e)=>console.log(e.nom+' -- '+e.categorie+" -- "+e.prix+" DH"+" -- "+e.stock))
//Partie B
//4. Afficher uniquement les produits dont le stock est égal à 0 (produits en rupture).
console.log("Produits en rupture de stock :")
produit.filter((e)=>{
    if(e.stock===0){
        console.log(e.nom+' '+'stock est : '+e.stock)
    }
})
// 5. Afficher uniquement les produits dont le prix est supérieur à 500 DH.
console.log("les produits dont le prix est supérieur à 500 DH.")
produit.filter((e)=>{
    if(e.prix>=500){
        console.log(e.nom+' '+'stock est : '+e.stock+" "+ "Le prix est : "+e.prix)
    }
})
/// solution au niveau de fichier index.html
let categorie_name=prompt('Entre la categoire pour filtre les produit');
console.log('les produits de votre categorie ',categorie_name)
produit.forEach((e)=>{
    if(e.categorie===categorie_name){
        console.log(e.nom)
    }
})
///Partie C — Calculs
/// 7. Calculer et afficher :
//le nombre total de produits
console.log("le nombre de produits c'est :")
console.log(produit.length)
//la valeur totale du stock de la boutique (somme de prix * stock pour chaque produit)
console.log("la valeur totale du stock de la boutique")
const valeurTotaleStock=produit.reduce((total,e)=>total+(e.prix*e.stock),0)
console.log('Valeur total du stock :',valeurTotaleStock,"DH")
// le produit le moins cher
console.log('le produit le mois cher cest :')
let produitmois=produit[0]
let produitplus=produit[0]
produit.forEach((e)=>{
    if(e.prix < produitmois.prix){
        produitmois=e
    }
    if(e.prix > produitplus.prix){
        produitplus=e
    }
    
});
console.log('le produit mois cher :' ,produitmois.nom,' et le prix cest :',produitmois.prix);
console.log('le produit plus cher :' ,produitplus.nom,' et le prix cest :',produitplus.prix);
// Partie D — Mise à jour des données
//si le produit existe, demander une quantité à ajouter au stock
let idproduit=prompt('donner id de produit ')
produit.find((e)=>{
    if(e.id==idproduit){
        let stockplus=parseInt(prompt('entre le quantite'))
        /// mettre à jour le stock et afficher le produit modifié
        e.stock+=stockplus
        console.log('le produit de ce id est :'+' '+e.nom+' le stock actuaile est :'+e.stock)
    }else{
        console.log("le produit introuvable")
    } 
})
// 10. Demander à l’utilisateur un id, puis supprimer le produit correspondant du tableau.
let idSupprimer = parseInt(prompt("Donner l'id du produit à supprimer :"));

let index = produit.findIndex(e => e.id === idSupprimer);

if (index !== -1) {
  let deletedProduit = produit.splice(index, 1);
  console.log("Produit supprimé :", deletedProduit[0]);
} else {
  console.log("Produit introuvable");
}

console.log("Nouvelle liste des produits :", produit);
/// Partie E — Tri et statistiques
//11. Trier les produits par prix croissant, puis afficher le tableau trié.
const triPrixCroissant = [...produit].sort((a, b) => a.prix - b.prix);
console.log("Tri par prix croissant :", triPrixCroissant);

// 12) Trier par stock décroissant
const triStockDecroissant = [...produit].sort((a, b) => b.stock - a.stock);
console.log("Tri par stock décroissant :", triStockDecroissant);

// 13) Afficher la catégorie la plus représentée
const compteurCategorie = {};

produit.forEach(e => {
  const cat = e.categorie.toLowerCase();
  compteurCategorie[cat] = (compteurCategorie[cat] || 0) + 1;
});

let categorieMax = null;
let maxCount = 0;

for (const cat in compteurCategorie) {
  if (compteurCategorie[cat] > maxCount) {
    maxCount = compteurCategorie[cat];
    categorieMax = cat;
  }
}

console.log("Catégorie la plus représentée :", categorieMax, "(", maxCount, "produits )");