// Reto 03 Sistem de calendario para verificar si el dia actual, junto a la hora es considerara dia y horario laboral estandar

const hour = new Date().getHours();
const day = new Date().getDay();

function businessHours() {
    return (hour >= 9 && hour < 16) ? true : false;
}

//console.log(businessHours());

function businessDay() {
    return (day >= 5) ? true : false;
}

//console.log(businessDay());

switch (true) {
    case businessHours() && businessDay():
        console.log("Estámos en horario laboral y dia laborable");
        break;
    default:
        console.log("No estamos en horario laboral ni dia laborable");
        break;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// Usar recursion




// Declaramos un arreglo con valores booleanos
arreglo = [0]

// Función para contar cuántos elementos 'true' hay en el arreglo
function contarTrue(arreglo, count = 0) {
    // Si el arreglo está vacío, entonces no hay 'true' en el arreglo y regresamos 0
    if (arreglo.length === 0) {
        return 0;
    }
    // Si el primer elemento del arreglo es 'true', incrementamos la variable 'count' en 1
    if (arreglo[0] === true) {
        count++;
    }
    // Si el arreglo tiene un solo elemento, regresamos la cantidad de elementos 'true' encontrados
    if (arreglo.length === 1) {
        return count;
    }
    // Si no se cumplen las condiciones anteriores, se llama a la función 'contarTrue' de manera recursiva
    // y se le pasa el arreglo sin el primer elemento (usando el método slice()) y el valor actual de 'count'
    return contarTrue(arreglo.slice(1), count);
}

// Llamamos a la función 'contarTrue' con el arreglo definido anteriormente y mostramos el resultado en la consola
console.log(contarTrue(arreglo));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

// Función para encontrar el MCD de dos números usando recursión
function mcd(a, b) {
    // Si b es 0, entonces a es el MCD y se devuelve a
    if (b == 0) {
        return a;
    }
    // De lo contrario, llamamos a la función de manera recursiva pasando b y el resto de a/b como parámetros
    return mcd(b, a % b);
}

// Llamamos a la función y mostramos el resultado en la consola
console.log(mcd(48, 3));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ***Encontrar los primeros n elementos de la serie fibonacci***
// Usar recursion




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos














///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

const areaTierra = 148940000

function areaCountry(nombre, area) {
    total = (area * 100) / areaTierra;
    return "El Area de " + nombre + " Es igual a " + total;
}

console.log(areaCountry("USA", 9372610));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

function input(a) {
    return 1 - a
}

console.log(input(1))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

function messenger(u) {
    switch (u) {
        case 0:
            res = "No hay nadie en línea"
            return res
            break;
        case 1:
            res = "user1 está en línea"
            return res
            break;
        case 2:
            res = "user1 y user2 están en línea"
            return res
            break;
        default:
            res = "user1 y " + (u - 1) + " Usuarios mas estan en linea";

    }
    return res;
}

console.log(messenger(3))