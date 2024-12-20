document.addEventListener('DOMContentLoaded', function() {
    // Define the toggleOptions function
    function toggleOptions() {
        var dropdown = document.getElementById("navbarDropdown");
        dropdown.classList.toggle("show");
    }

    // Add event listeners to the options
    document.getElementById('getAnimeDetailsOption').addEventListener('click', function() {
        window.location.href = '/chat';
    });

    document.getElementById('recommendAnimeOption').addEventListener('click', function() {
        window.location.href = '/recommend/anime';
    });

    document.getElementById('recommendGenreOption').addEventListener('click', function() {
        window.location.href = '/recommend/tags';
    });
});
