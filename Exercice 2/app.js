const tbody = document.getElementById('tbody_table');
function addpersonne() {
    const nom = document.getElementById('nom_personne').value;
    const age = document.getElementById('age_personne').value;
    const email = document.getElementById('email_personne').value;
    const tr = document.createElement('tr');
    let check = true;
    if (nom === "") {
        document.getElementById('nom_personne_span').style.display = 'inline';
        check = false;

    }else {
        document.getElementById('nom_personne_span').style.display = 'none';
    } 
     if (age === "") {
        document.getElementById('age_personne_span').style.display = 'inline';
        check = false;


    }else{
        document.getElementById('age_personne_span').style.display = 'none';
    } 
     if (email === "") {
        document.getElementById('email_personne_span').style.display = 'inline';
        check = false;

    }else{
        document.getElementById('email_personne_span').style.display = 'none';
    }
    if (check) {
        tr.innerHTML = `
    <td>${nom}</td>    <td>${age}</td>    <td>${email}</td>         <td><button type="button" class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button></td>
    `

        tbody.appendChild(tr)


        document.getElementById('nom_personne').value = "";
        document.getElementById('age_personne').value = "";
        document.getElementById('email_personne').value = "";
    }
}
function deleteRow(btn) {
    btn.parentElement.parentElement.remove();

}
