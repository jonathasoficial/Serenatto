document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(function(input) {
    input.addEventListener('click', function() {
        input.blur()
    });
});