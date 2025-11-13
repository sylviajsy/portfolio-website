document.addEventListener("DOMContentLoaded", function() {
    // Nav Bar Search function
    const form = document.getElementById("navBar-search-form");
     form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const newInput = document.getElementById('search-input');
        const query = document.getElementById('search-input').value.trim().toLowerCase();

        if (!query) return;

        const elements = document.querySelectorAll("h1, h2, h3, h4, p, li, footer");
        let found = false;
        for (const i of elements){
            if (i.textContent.toLowerCase().includes(query.toLowerCase())){
                found = true;
                i.scrollIntoView({ behavior: "smooth", block: "center" });
                const regex = new RegExp(`(${query})`, "gi");
                i.innerHTML = i.innerHTML.replace(regex, `<mark>$1</mark>`);
                break;
            }
        }
            if (!found){alert(`No Match found for "${query}"`);}
            newInput.value = "";
    });
    
    // Modal Window
    const modal = document.getElementById("contactModal");
    const contactbtn = document.getElementById("contact-btn");
    const span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
    contactbtn.onclick = function() {
    modal.style.display = "block";
    }

        // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    // Scroll to each section more obvious
    const sections = document.querySelectorAll(".scroll-container");
    let current = 0;
    let isScrolling = false;

    window.addEventListener("wheel", (e) => {
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0 && current < sections.length - 1) {
        current++;
    } else if (e.deltaY < 0 && current > 0) {
        current--;
    }

    sections[current].scrollIntoView({ behavior: "smooth" });

    });

    // Git counters
    const counters = document.querySelectorAll('.git-counter-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        counter.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            counter.textContent = target;
        }
        }

        requestAnimationFrame(update);
    });
});