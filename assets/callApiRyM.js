function CallServiceRickYMortyAjax(tipo) {
    let uriServer = "https://restcountries.com/v3.1/all?fields=name";

    if (uriServer != "") {
        $.ajax({
            url: uriServer,
            type: "get",
            dataType: "json",
            success: function (data) {
                OnSuccess(data, tipo);
            },
            error: OnError
        });
    }
    return false;
}
function OnSuccess(data, tipo) {
    datos = data;
    //cargarMenuString();

}

function CallServiceMenuFetch(tipo) {

    let uriServer = "";

    fetch(uriServer)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            OnSuccess(data, tipo);
        })
        .catch(error => {
            alert("Mensaje de Error: " + error);
        });
    return false;
}

async function CallServiceMenu() {

    let uriServer = "https://restcountries.com/v3.1/all?fields=name";

    try {
        const response = await fetch(uriServer);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        OnSuccess(data, tipo);

    } catch (error) {
        alert("Mensaje de Error: " + error);
    }
    return false;
}







function cargarArtistas() {

    try {
        var menucontainer = document.getElementById("OptionesSelect");
        menucontainer.innerHTML = "";
        var menuitem;
        menuitem = "";

        if (typeof window.sessionStorage !== 'undefined') {


            datos.artists.forEach(artists => {
                menuitem = "";
                if (artists.name.toUpperCase() === "Dillom") {
                    menuitem += `<li id="${artists.id}">${artists.name}</li>`;
                }


                menucontainer.innerHTML += menuitem;

            });
        }

    } catch (error) {
        alert("Error al Procesar " + error);
    }
}