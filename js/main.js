$(document).ready(function () {

  // Scroll to top button ----------------------------------------------------------
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.getElementById("topper").style.display = "block";
    } else {
      document.getElementById("topper").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  $("#topper").on("click", function () {
    $("html").animate({
      scrollTop: 0
    }, 400);
  });

  // tooltips function
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Initally hide the read more div
  $("#read-more").css("display", "none");

  // Show more on click
  $("#badge-more").on("click", function () {

    // Show/hide the div
    $("#read-more").fadeToggle("fast");

    // Change the button
    if ($("#badge-more").text() == "more") {
      $("#badge-more").text("less");
    } else {
      $("#badge-more").text("more");
    }

  });

  // popover function
  $('[data-toggle="popover"]').popover();

  // open all accordion panels for possible rinting
  // $(".expander").on("click", function() {
  //
  //    // Change the button
  //    if ($(".expander").text() == "show all") {
  //       $(".expander").text("hide all");
  //       $(".panel-collapse").addClass("in");
  //       $(".panel-default a").attr("aria-expanded", "true").removeClass("collapsed");
  //    } else {
  //       $(".expander").text("show all");
  //       $(".panel-collapse").removeClass("in");
  //       $(".panel-default a").attr("aria-expanded", "false").addClass("collapsed");
  //    }
  //
  // });

  // open all accordion panels for possible printing or close
  $(".expander").on("click", function () {

    if ($(".expander").text() === "show all") {

      // Change the button text
      $(".expander").text("hide all");
      // show all accordions
      $(".panel-collapse").collapse('show');

    } else {
      // Change the button text
      $(".expander").text("show all");
      // hide all accordions
      $(".panel-collapse").collapse('hide');
    }
  });

});

function toggleText() {
  const textBlock = document.getElementById('text-block');
  const button = document.querySelector('.toggle-button');

  if (textBlock.style.display === 'none' || textBlock.style.display === '') {
    textBlock.style.display = 'block';
    button.textContent = 'Show Less';
  } else {
    textBlock.style.display = 'none';
    button.textContent = 'Show More';
  }
}

// Google Calendar Appointment Scheduling
(function () {
  window.addEventListener('load', function () {
    const target = document.getElementById('calendar-appointment-button');
    if (target) {
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_j7LoBP5RbXSMR51bpsiGifNM8HNP0NySKo-HY715GM6D_7Q2USVeAo7gSjzyQwZyu0ZY5dgc?gv=true',
        color: '#039BE5',
        label: 'Book an appointment',
        target,
      });
    }
  });
})();

// Popup and Clipboard Logic
document.addEventListener('DOMContentLoaded', function () {
  // Function to open a pop-up
  document.querySelectorAll('.openPopup').forEach(button => {
    button.addEventListener('click', function () {
      const popupId = this.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      if (popup) popup.classList.add('open');
    });
  });

  // Function to close a pop-up
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      const popupId = this.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      if (popup) popup.classList.remove('open');
    });
  });

  // Close pop-up when clicking outside of the content area
  window.addEventListener('click', function (event) {
    document.querySelectorAll('.popup').forEach(popup => {
      if (event.target === popup) {
        popup.classList.remove('open');
      }
    });
  });

  // Function to copy code to clipboard
  document.querySelectorAll('.copy-btn').forEach(copyButton => {
    copyButton.addEventListener('click', function () {
      const codeId = this.getAttribute('data-copy');
      const codeElement = document.getElementById(codeId);
      if (codeElement) {
        const codeText = codeElement.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          alert('Code copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    });
  });
});
