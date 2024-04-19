function enviarPorWhatsApp() {
    // Capturar el valor del input de pedidos
    const pedidosInput = document.getElementById('pedidos');
    const pedidos = pedidosInput.value.trim();
    const numeroProveedor = document.getElementById('numero')
    const numero = numeroProveedor.value.trim();
  
    // Verificar si se han ingresado pedidos
    if (pedidos === "") {
      alert("Por favor ingrese al menos un pedido.");
      return;
    }
  
    // Construir el mensaje con los pedidos
    const mensaje = `¡Hola! Quiero ordenar:\n${pedidos}`;
  
    // Reemplazar 'número-de-tu-número' con tu número de WhatsApp en formato internacional
    const numeroWhatsApp = numero;
  
    // Construir el enlace de WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/+549${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  
    // Abrir el enlace en una nueva pestaña
    window.open(urlWhatsApp);
  
    // Limpiar el campo de pedidos después de enviarlos
    pedidosInput.value = "";
    numeroProveedor.value = "";
  }