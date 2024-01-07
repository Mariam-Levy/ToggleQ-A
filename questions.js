const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function() {
        for (const item of questions) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        }
        question.classList.toggle("show-text");
    })
})




/* // Selecciona todos los elementos con la clase CSS 'question' y los guarda en la variable 'questions'
const questions = document.querySelectorAll('.question');

// Itera sobre cada elemento 'question' usando el método forEach
questions.forEach(function(question) {
    // Para cada elemento 'question', busca el botón dentro de ese elemento con la clase CSS 'question-btn' y lo guarda en la variable 'btn'
    const btn = question.querySelector('.question-btn');

    // Agrega un event listener para el evento de clic en el botón
    btn.addEventListener('click', function() {
        // Dentro del evento de clic en el botón, itera sobre cada elemento 'question' nuevamente usando forEach
        questions.forEach(function(item) {
            // Verifica si el elemento 'item' actual en el bucle no es igual al elemento 'question' al que se le hizo clic
            if (item !== question) {
                // Si no son iguales, se elimina la clase CSS 'show-text' del elemento 'item'
                item.classList.remove('show-text');
            }
        });

        // Después de haber ocultado todas las preguntas excepto la que se hace clic,
        // se utiliza toggle para alternar la visibilidad de la pregunta específica que se hizo clic añadiendo o quitando la clase CSS 'show-text'
        question.classList.toggle("show-text");
    })
}) */


