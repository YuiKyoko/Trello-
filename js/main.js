window.addEventListener("load",function(){
    var spanLista = document.getElementById("span");
    var boton = document.getElementById("boton");
    var texto = document.getElementById("texto");
    var formulario= document.getElementById("formulario");
    var form = document.getElementById("form");
    var contenedor = document.getElementById("contenedor");
    var box=document.getElementById("box")
    var contador= 1;
    
    spanLista.addEventListener("click",function(e){
        e.preventDefault();
        mostrarFormulario();
        texto.focus();
    });

    boton.addEventListener("click",function(e){
        e.preventDefault();
        mostrarLista();
        texto.value = "";

    });

    function validarLisTarget(formulario){
      var input = this.value;
      if( input == null || input.length == 0 || input == ""){
        alert("Escribe un nombre.");
      }else if ( /[0-9]/.test(input)){
          alert("nN ingrese números.")
      }else if ( /^[a-z]/.test(input.charAt(0)) ){
          alert ("escriba el primer caracter en mayuscula")
      }
    }

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
    lista.setAttribute("draggable","true");
    lista.appendChild(nodo);
    lista.classList.add("lista");
    box.insertBefore(lista,spanLista.previousSibling);
    lista.style.display = "inline-block";
    lista.style.cssFloat = "left";
    formulario.value="";
    
    var nuevaTarjeta = document.createElement("a");
    nuevaTarjeta.href= "#";
    var nodoTarjeta =document.createTextNode("Añadir una tarjeta ...")      
    
    nuevaTarjeta.appendChild(nodoTarjeta);
    lista.appendChild(nuevaTarjeta);
    nuevaTarjeta.classList.add("tarjeta");

    lista.addEventListener("dragover",pasarDrag);

    function pasarDrag(e) {
      e.preventDefault();
    }

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
        listaTarjeta.setAttribute("draggable","true");
        listaTarjeta.appendChild(nodoListTarjeta);
        lista.appendChild(listaTarjeta);
        lista.insertBefore(listaTarjeta,nodo.nextSibling);
        listaTarjeta.setAttribute("id",contador++);

        listaTarjeta.addEventListener("dragstart",iniciandoDrag);
        function iniciandoDrag(e) {
          e.dataTransfer.setData("text",e.target.id);
        }

        listaTarjeta.addEventListener("drop",manejandoDrop);
        function manejandoDrop(e) {
          var data = e.dataTransfer.getData("text");
          e.target.parentElement.insertBefore(document.getElementById(data),e.target);
        }

      }); 
    });
  }
});