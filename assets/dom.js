window.onload = loadPagina;

function loadPagina(){


  CallServiceMenu();


  agregarEventListener();

  agregarEventListenerMenu();



}

  function agregarEventListener()
{
  let listItems = document.getElementsByClassName("specialsPer-listItem");
  for (const item in listItems) {
    if (listItems[item].nodeName  === 'A')
      listItems[item].addEventListener("click", specialsDom);
  }
}
function agregarEventListenerMenu()
{
  let listItems = document.getElementsByClassName("filmenu");

  for (const item in listItems) {
    if (listItems[item].nodeName  === 'LI')
      listItems[item].addEventListener("click", menuDom);
  }

  if (typeof window.sessionStorage !== 'undefined') {
    sessionStorage.setItem("tipoCambio", 1);
  } else {
    console.error("El navegador no admite sessionStorage. Considera usar una estrategia alternativa.");
  } 
  
}