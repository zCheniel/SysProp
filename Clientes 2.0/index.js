let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });

  //CRUD

  function eliminarCliente(id) {
    // Buscar el elemento de la tabla por ID
    var elemento = document.getElementById("cliente-" + id);
    
    // Eliminar el elemento de la tabla
    elemento.parentNode.removeChild(elemento);
  }
  
  function editarCliente(id) {
    // Buscar el elemento de la tabla por ID
    var elemento = document.getElementById("cliente-" + id);
    
    // Obtener los datos del cliente de la fila de la tabla
    var nombre = elemento.children[1].innerText;
    var apellido = elemento.children[2].innerText;
    var cedula = elemento.children[3].innerText;
    var telefono = elemento.children[4].innerText;
    var direccion = elemento.children[5].innerText;
    
    // Llenar los campos del formulario de edición
    document.getElementById("editar-nombre").value = nombre;
    document.getElementById("editar-apellido").value = apellido;
    document.getElementById("editar-cedula").value = cedula;
    document.getElementById("editar-telefono").value = telefono;
    document.getElementById("editar-direccion").value = direccion;
    
    // Mostrar la ventana modal de edición
    var modal = new bootstrap.Modal(document.getElementById("editar-modal"));
    modal.show();
  }
  