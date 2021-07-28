function palindrome(str) {
    var stSinCaracteresEspeciales = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s+]/gi, '').toLowerCase();
    var stSinCaracteresEspecialesAlReves = stSinCaracteresEspeciales.split('').reverse().join('');
    return stSinCaracteresEspeciales == stSinCaracteresEspecialesAlReves;
}
  
  
function mostrarResultado(){
    var stCadena = document.getElementById('palabra').value;
    
    var boEsPalindrome = palindrome(stCadena);

    if (boEsPalindrome) {
        document.getElementById("resultado").textContent = "El contenido Si es palindromo.";
    }else{
        document.getElementById("resultado").textContent = "La contenido No es palindromo .";
    }
}