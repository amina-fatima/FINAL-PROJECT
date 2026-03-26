function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('salonForm').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
}

function resetForm() {
    document.getElementById('successMsg').style.display = 'none';
    let form = document.getElementById('salonForm');
    form.reset();
    form.style.display = 'block';
}

$('#salonForm').on('submit', function (e) {
    e.preventDefault();

    const studentId = 0;
    const name = $('#name').val();
    const email = $('#email').val();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const Valid = true;
    if (name === '') {
        Valid = false;
        $('#nameError').text('name is required');
    } else if (name.length < 3) {
        Valid = false;
        $('#nameError').text('Name must be at least 3 characters');
    } else {
        // Valid = true;
        $('#nameError').text('');
    }

    if (email === '') {
        Valid = false;
        $('#emailerror').text('Email is required');
    } else if (!emailRegex.test(email)) {
        Valid = false;
        $('#emailerror').text('Use correct syntax');
    } else {
        $('#emailerror').text('');
    }
    if (Valid) {

        document.getElementById('salonForm').style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';
    }
});



let currentIndex = 0;

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');

function goToSlide(index) {
    currentIndex = index;
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
}
function moveSlide(direction) {
    var total = items.length;
    currentIndex = (currentIndex + direction + total) % total;
    goToSlide(currentIndex);
}


$(function () {
    $("#accordion").accordion();
});


$(function () {

    $("#homeaccordion").accordion();

    setTimeout(function () {

        $(".faqmain").css({
            "opacity": "1",
            "transform": "translateY(0)"
        });

    }, 100);

});
