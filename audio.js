document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');

    var songs = [
        'in-y2mate.com - The Lamp Is Low.wav',
        'another-song.wav',
        'yet-another-song.wav'
        ''
    ];

    // Function to get a random song from the array
    function getRandomSong() {
        var randomIndex = Math.floor(Math.random() * songs.length);
        return songs[randomIndex];
    }

    // Function to attempt to play the audio
    function tryPlayAudio() {
        var randomSong = getRandomSong();
        audio.src = '{{ url_for('static', filename='') }}' + randomSong;
        audio.play().then(function() {
            console.log('Autoplay successful');
        }).catch(function(error) {
            console.log('Autoplay prevented, retrying in 5 seconds');
            setTimeout(tryPlayAudio, 5000); // Retry every 5 seconds
        });
    }

    // Initial attempt to play the audio
    tryPlayAudio();
});


