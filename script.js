function calcularNitrogeno() {
    let amoniaco = parseFloat(document.getElementById("amonTotal").value) || 0;
    let nitritos = parseFloat(document.getElementById("nitritos").value) || 0;
    let nitratos = parseFloat(document.getElementById("nitratos").value) || 0;
    
    let nitrogenoTotal = amoniaco + nitritos + nitratos;
    
    document.getElementById("resultado").innerHTML = 
        "🔹 Nitrógeno Total: " + nitrogenoTotal.toFixed(2) + " mg/L";
}
