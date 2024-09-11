document.addEventListener('DOMContentLoaded', function() {
    var diceElement = document.getElementById('dice');
    var imgElement = diceElement.querySelector('img');

    diceElement.addEventListener('click', function() {
        if (!imgElement.classList.contains('rolling')) {
            // Lisää rolling-luokka animaation käynnistämiseksi
            imgElement.classList.add('rolling');

            // Arvo uusi numero
            var randomNumber = Math.floor(Math.random() * 6) + 1;

            // Odota animaation päättymistä ennen kuvan vaihtamista
            setTimeout(function() {
                imgElement.src = './img/dice-' + randomNumber + '.png';
                // Poista rolling-luokka animaation päätyttyä
                imgElement.classList.remove('rolling');
            }, 500); // 500ms vastaa animaation kestoa
        }
    });
});