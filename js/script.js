document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('resume-modal');
    const btns = document.querySelectorAll('.resume-link'); // Select all resume-link elements
    const span = document.querySelector('.close');
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector("#nav")

    // When the user clicks any resume button, open the modal
    btns.forEach(btn => {
        btn.onclick = function(event) {
            modal.style.display = "block";
        }
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    function toggleMenu() {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none'
        } else {
            nav.style.display = 'flex'
        }
    }

    hamburger.addEventListener('click', toggleMenu)

});
