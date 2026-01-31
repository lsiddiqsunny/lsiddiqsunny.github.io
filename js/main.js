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

// Global Event Delegation for Robustness
document.addEventListener('DOMContentLoaded', function () {

  document.body.addEventListener('click', function (event) {
    // Toggle Text (Show More/Less)
    // Toggle Text (Show More/Less)
    if (event.target.matches('.toggle-button')) {
      // Check if this is NOT a Copy button before toggling text
      if (!event.target.classList.contains('copy-btn')) {
        const textBlock = document.getElementById('text-block');
        if (textBlock) {
          if (window.getComputedStyle(textBlock).display === 'none') {
            textBlock.style.display = 'block';
            event.target.textContent = 'Show Less';
          } else {
            textBlock.style.display = 'none';
            event.target.textContent = 'Show More';
          }
        }
      }
    }

    // Open Popup
    if (event.target.matches('.openPopup')) {
      const popupId = event.target.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      if (popup) popup.classList.add('open');
    }

    // Close Popup (Button)
    if (event.target.matches('.close')) {
      const popupId = event.target.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      if (popup) popup.classList.remove('open');
    }

    // Close Popup (Click Outside)
    if (event.target.matches('.popup')) {
      event.target.classList.remove('open');
    }

    // Copy to Clipboard
    if (event.target.matches('.copy-btn')) {
      const codeId = event.target.getAttribute('data-copy');
      const codeElement = document.getElementById(codeId);
      if (codeElement) {
        const codeText = codeElement.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          alert('Code copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    }
    // Open Global BibTex Modal
    if (event.target.matches('.open-bibtex-modal')) {
      const contentId = event.target.getAttribute('data-content-id');
      const contentElement = document.getElementById(contentId);

      if (contentElement) {
        let bibtexContent = contentElement.textContent.trim();
        // Remove the extra indentation that might be present in the HTML text content
        // This is a simple fix to left-align the creating string
        bibtexContent = bibtexContent.replace(/^\s+/gm, '');

        const globalCodeBlock = document.getElementById('global-bibtex-code');

        if (globalCodeBlock) {
          globalCodeBlock.textContent = bibtexContent;
          const globalModal = document.getElementById('global-bibtex-modal');
          if (globalModal) globalModal.classList.add('open');
        }
      }
    }

    // Close Global Modal (Button)
    if (event.target.matches('.close-global-modal')) {
      const globalModal = document.getElementById('global-bibtex-modal');
      if (globalModal) globalModal.classList.remove('open');
    }

    // Copy Global BibTex Content
    if (event.target.matches('.copy-global-btn')) {
      const globalCodeBlock = document.getElementById('global-bibtex-code');
      if (globalCodeBlock) {
        navigator.clipboard.writeText(globalCodeBlock.textContent).then(() => {
          alert('BibTex copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    }
  });

});
