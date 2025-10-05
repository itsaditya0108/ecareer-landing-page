$(document).ready(function () {
    $("#enquiryForm").on("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        // First Name Validation
        let name = /^[a-zA-Z\s'-]+$/;
        if (!name.test($("#firstName").val())) {
            $("#firstName").addClass("is-invalid");
            isValid = false;
        } else {
            $("#firstName").removeClass("is-invalid").addClass("is-valid");
        }

        // Last Name Validation
        if (!name.test($("#lastName").val())) {
            $("#lastName").addClass("is-invalid");
            isValid = false;
        } else {
            $("#lastName").removeClass("is-invalid").addClass("is-valid");
        }

        // Email Validation
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test($("#email").val())) {
            $("#email").addClass("is-invalid");
            isValid = false;
        } else {
            $("#email").removeClass("is-invalid").addClass("is-valid");
        }

        // Phone Number Validation (10 digits)
        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test($("#phone").val())) {
            $("#phone").addClass("is-invalid");
            isValid = false;
        } else {
            $("#phone").removeClass("is-invalid").addClass("is-valid");
        }

        // Course Validation
        if ($("#course").val().trim() === "") {
            $("#course").addClass("is-invalid");
            isValid = false;
        } else if ($("#course").val().trim() === "Choose Your Course") {
            $("#course").addClass("is-invalid");
            isValid = false;
        } else {
            $("#course").removeClass("is-invalid").addClass("is-valid");
        }

        // Final Check for form submission
        if (isValid) {
            alert("Form submitted successfully!");
            $("#enquiryForm")[0].reset(); // Reset the form
            $(".form-control, .form-select").removeClass('is-valid is-invalid'); // Clear validation classes
        }
    });

    $('.box').on('click', function () {
        $(this).toggleClass('blur');
    });

    // // Real-time validation feedback for each field
    // $("input, select").on("input change", function () {
    //     if (this.checkValidity()) {
    //         $(this).removeClass("is-invalid").addClass("is-valid");
    //     } else {
    //         $(this).removeClass("is-valid").addClass("is-invalid");
    //     }
    // });
});
