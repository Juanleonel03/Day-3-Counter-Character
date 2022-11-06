//character count
const input = document.getElementById('input')
const boxCheck = document.getElementById('box-answer')
input.addEventListener('keyup', ()=>{
  const cont = input.value;
  boxCheck.innerHTML = `<p>total character: ${cont.replace(/\s+/g, '').length}</p>`
})


/* README
\s: selecciona espacios en blanco, tabulaciones y saltos de linea.
+: en conjunto con \s sirve para tomar espacios consecutivos, de esta forma si hay 1 o mas espacios seguidos se eliminaran en conjunto.
g: permite repetir el proceso a lo largo del string o cadena, de otra forma solo se eliminaría el primer espacio encontrado.

en este sitio sabrás mas acerca de las expresiones regulares o regexp
https://es.javascript.info/regexp-introduction


\s: selects blank spaces, tabs and line breaks.
+: together with \s it is used to take consecutive spaces, this way if there are 1 or more spaces in a row they will be eliminated together.
g: allows to repeat the process along the string, otherwise only the first space found would be eliminated.

in this site you will know more about regular expressions or regexp. 
https://eloquentjavascript.net/09_regexp.html
https://es.javascript.info/regexp-introduction
*/