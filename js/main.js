window.addEventListener("load",function(){
    var spanLista = document.getElementById("span");
    var boton = document.getElementById("boton");
    var texto = document.getElementById("texto");
    var formulario= document.getElementById("formulario");
    var form = document.getElementById("form");
    var contenedor = document.getElementById("contenedor");
    
    spanLista.addEventListener("click",function(e){
        e.preventDefault();
        mostrarFormulario();
        texto.focus();
    });

    boton.addEventListener("click",function(e){
        e.preventDefault();
        mostrarLista();
        mostrarTarjeta();
        texto.value = "";
    });

    function mostrarFormulario(){
        formulario.style.display = "inline-block";
        spanLista.style.display = "none";
        form.style.display = "inline-block";
    }
  function mostrarLista(){
    formulario.style.display = "none";
    spanLista.style.display = "inline-block";

    var lista = document.createElement("div");
    var nodo = document.createTextNode(texto.value);
    lista.classList.add("text");
    lista.appendChild(nodo);
    lista.classList.add("lista");
    contenedor.insertBefore(lista,spanLista.previousSibling);
    lista.style.display = "inline-block";
    lista.style.cssFloat = "left";
    formulario.value="";

    var nuevaTarjeta = document.createElement("a");
    nuevaTarjeta.href= "#";
    var nodoTarjeta =document.createTextNode("Añadir una tarjeta ...")
    nuevaTarjeta.appendChild(nodoTarjeta);
    lista.appendChild(nuevaTarjeta);
    nuevaTarjeta.classList.add("tarjeta");

    nuevaTarjeta.addEventListener("click", function(){
      nuevaTarjeta.style.display = "none";
      var area = document.createElement("textarea");
      area.classList.add("textS");
      lista.appendChild(area);
      lista.insertBefore(area,nodo.nextSibling);
      var btn = document.createElement("button");
      var newBtn = document.createTextNode("Añadir");
      btn.classList.add("btn");
      btn.appendChild(newBtn);
      lista.appendChild(btn);
      lista.insertBefore(btn,area.nextSibling);

    btn.addEventListener("click",function(){
      area.style.display= "none";
      btn.style.display="none";
      nuevaTarjeta.style.display="block"
      var listaTarjeta = document.createElement("div");
      var nodoListTarjeta = document.createTextNode(area.value);
      listaTarjeta.classList.add("inputS");
      listaTarjeta.appendChild(nodoListTarjeta);
      lista.appendChild(listaTarjeta);
      lista.insertBefore(listaTarjeta,nodo.nextSibling);
    }); 
    });
  }
});
