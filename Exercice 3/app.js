let elements = [];
let idCounter = 1;

const tbody = document.getElementById("tbody_table");

function addpersonne() {
    const nomPersonneInput = document.getElementById("nom_personne");
    const ageInput = document.getElementById("age_personne");
    const emailInput = document.getElementById("email_personne");
    const nomProduitInput = document.getElementById("nom_produit");
    const prixInput = document.getElementById("prix");
    const quantiteInput = document.getElementById("quantite");

    const nomPersonne = nomPersonneInput.value.trim();
    const age = Number(ageInput.value);
    const email = emailInput.value.trim();
    const nomProduit = nomProduitInput.value.trim();
    const prix = Number(prixInput.value);
    const quantite = Number(quantiteInput.value);

    if (
        nomPersonne === "" ||
        email === "" ||
        nomProduit === "" ||
        Number.isNaN(age) ||
        Number.isNaN(prix) ||
        Number.isNaN(quantite) ||
        age <= 0 ||
        prix <= 0 ||
        quantite <= 0
    ) {
        alert("Veuillez remplir correctement tous les champs (age, prix et quantite > 0).");
        return;
    }

    const objet = {
        id: idCounter,
        nomPersonne,
        age,
        email,
        nomProduit,
        prix,
        quantite,
    };

    elements.push(objet);
    idCounter++;

    nomPersonneInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
    nomProduitInput.value = "";
    prixInput.value = "";
    quantiteInput.value = "";

    afficherElements();
    calculerTotal();
}

function ajouterElement() {
    addpersonne();
}

function afficherElements() {
    if (!tbody) {
        return;
    }

    tbody.innerHTML = "";

    elements.forEach((el) => {
        const tr = document.createElement("tr");

        const tdNom = document.createElement("td");
        tdNom.textContent = el.nomPersonne;

        const tdAge = document.createElement("td");
        tdAge.textContent = String(el.age);

        const tdEmail = document.createElement("td");
        tdEmail.textContent = el.email;

        const tdProduit = document.createElement("td");
        tdProduit.textContent = el.nomProduit;

        const tdPrix = document.createElement("td");
        tdPrix.textContent = el.prix.toFixed(2);

        const tdQte = document.createElement("td");
        tdQte.textContent = String(el.quantite);

        const tdAction = document.createElement("td");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-danger btn-sm";
        btn.textContent = "Supprimer";
        btn.onclick = function () {
            supprimerElement(el.id);
        };

        tdAction.appendChild(btn);

        tr.appendChild(tdNom);
        tr.appendChild(tdAge);
        tr.appendChild(tdEmail);
        tr.appendChild(tdProduit);
        tr.appendChild(tdPrix);
        tr.appendChild(tdQte);
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
    });
}

function supprimerElement(id) {
    elements = elements.filter((el) => el.id !== id);
    afficherElements();
    calculerTotal();
}

function getOrCreateTotalElement() {
    let totalElement = document.getElementById("total");

    if (!totalElement) {
        totalElement = document.createElement("p");
        totalElement.id = "total";
        totalElement.className = "m-3 fw-bold text-end";

        const tableWrap = document.querySelector(".table-wrap") || document.querySelector(".table-responsive");

        if (tableWrap && tableWrap.parentElement) {
            tableWrap.parentElement.appendChild(totalElement);
        } else if (tbody && tbody.parentElement && tbody.parentElement.parentElement) {
            tbody.parentElement.parentElement.appendChild(totalElement);
        } else {
            document.body.appendChild(totalElement);
        }
    }

    return totalElement;
}

function calculerTotal() {
    let totalGeneral = 0;

    elements.forEach((el) => {
        totalGeneral += el.prix * el.quantite;
    });

    const totalElement = getOrCreateTotalElement();
    totalElement.textContent = "Total general : " + totalGeneral.toFixed(2);
}

calculerTotal();
