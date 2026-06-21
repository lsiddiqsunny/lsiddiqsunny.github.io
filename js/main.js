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

// Dark mode toggle
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('dark-mode') === 'on') {
    document.body.classList.add('dark-mode');
  }
});

setTimeout(function () {
  var btn = document.getElementById('dark-mode-toggle');
  if (!btn) return;
  function updateIcon() {
    btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  }
  updateIcon();
  btn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'on' : 'off');
    updateIcon();
  });
}, 150);

// Publication section filters
document.addEventListener('DOMContentLoaded', function () {
  var filterBtns = document.querySelectorAll('.pub-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      filterBtns.forEach(function (b) { b.classList.remove('active-filter'); });
      btn.classList.add('active-filter');
      document.querySelectorAll('.pub-section').forEach(function (section) {
        section.style.display = (filter === 'all' || section.getAttribute('data-type') === filter) ? '' : 'none';
      });
    });
  });
});

// Active nav item highlighting (runs after w3IncludeHTML completes)
setTimeout(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var map = {
    'index.html': 'about',
    'education.html': 'education',
    'research.html': 'research',
    'service.html': 'service',
    'achievement.html': 'achievement'
  };
  var id = map[page];
  if (id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('active');
  }
}, 100);

// News pagination — show 5 initially, reveal 10 more per click
document.addEventListener('DOMContentLoaded', function () {
  var newsItems = document.querySelectorAll('#news li');
  var btn = document.getElementById('older-news-btn');
  if (!newsItems.length || !btn) return;

  var shown = 5;
  newsItems.forEach(function (item, i) {
    if (i >= shown) item.style.display = 'none';
  });

  if (shown >= newsItems.length) btn.style.display = 'none';

  btn.addEventListener('click', function () {
    var count = 0;
    newsItems.forEach(function (item, i) {
      if (i >= shown && count < 5) {
        item.style.display = '';
        count++;
      }
    });
    shown += count;
    if (shown >= newsItems.length) btn.style.display = 'none';
  });
});

// Abstract expand/collapse — injects toggle + text for each known paper
document.addEventListener('DOMContentLoaded', function () {
  var abstracts = {
    'bibtex-21': 'We systematically study remote code execution risks in ML model hosting ecosystems such as Hugging Face, analyzing how malicious model artifacts exploit serialization vulnerabilities across popular ML frameworks and quantifying the attack surface across thousands of publicly shared models.',
    'bibtex-20': 'We conduct the first large-scale empirical study of AI-generated pull requests on GitHub, examining the security properties of code contributed by autonomous AI agents and identifying patterns of security weaknesses introduced by AI teammates.',
    'bibtex-19': 'We evaluate the software security comprehension of state-of-the-art large language models, measuring their ability to detect, explain, and reason about vulnerabilities across multiple CWE categories and programming languages.',
    'bibtex-18': 'We investigate reproducibility challenges in LLM-based software engineering research, identifying critical factors such as model version drift, non-determinism, and API deprecation that undermine replicability, and providing actionable guidelines.',
    'bibtex-17': 'We extend security evaluation of LLM-generated code to multiple programming languages, assessing how well models produce secure code across Python, Java, C++, and other languages, revealing language-specific vulnerability patterns in a multilingual benchmark.',
    'bibtex-16': 'We comprehensively evaluate large language models on introductory programming assignments, analyzing solution correctness, code quality, and model performance across algorithmic problems of varying difficulty levels.',
    'bibtex-23': 'We investigate whether large language models are well-calibrated in their security confidence when generating code, examining the alignment between model-expressed uncertainty and actual security outcomes across diverse coding tasks.',
    'bibtex-1': 'We present a systematic literature review of 80+ papers examining how large language models are used in computer science education, synthesizing findings on LLM applications in programming instruction, automated grading, student support, and academic integrity.',
    'bibtex-2': 'We critically assess the quality of widely adopted code generation benchmarks, identifying issues including ambiguous problem specifications, incorrect reference solutions, and limited diversity, suggesting that reported model rankings may not reflect true capability.',
    'bibtex-3': 'We propose FRANC, a lightweight framework that improves the quality of LLM-generated code by combining prompt engineering, output ranking, and constraint-based filtering, significantly reducing functional defects and security vulnerabilities in generated programs.',
    'bibtex-4': 'We empirically evaluate large language models for automated JUnit test generation across 20 open-source Java projects, assessing test coverage, correctness, readability, and the prevalence of test smells in LLM-generated test suites.',
    'bibtex-5': 'We study Regular Expression Denial of Service (ReDoS) vulnerabilities in LLM-generated regular expressions, analyzing how frequently models produce vulnerable regex patterns and how prompt characteristics and developer forum content influence susceptibility.',
    'bibtex-6': 'We conduct an empirical study examining code quality issues — specifically code smells — in code generated by transformer-based models including Codex, analyzing their frequency and types and discussing implications for adopting LLM-based code generation.',
    'bibtex-7': 'We propose SQLIFIX, a learning-based approach using neural machine translation to automatically repair SQL injection vulnerabilities in source code, demonstrating effectiveness across real-world vulnerable programs in a controlled evaluation.',
    'bibtex-22': 'We empirically study the security risks of custom model code in model-sharing platforms, examining how third-party contributed loading and inference code can introduce malicious behaviors, and assessing the adequacy of current platform security safeguards.',
    'bibtex-14': 'We present a research agenda for advancing secure and standards-compliant source code generation, covering automated security evaluation frameworks, quality benchmarking methodologies, and techniques for guiding LLMs toward producing vulnerability-free code.',
    'bibtex-15': 'We apply data augmentation and transformer-based models to the automated classification of code comments by intent, demonstrating that augmentation strategies significantly improve classification performance on this NLP-for-SE task.',
    'bibtex-8': 'We introduce SALLM, a framework for systematically evaluating the security of LLM-generated code, providing a curated benchmark of security-sensitive coding scenarios alongside automated vulnerability detection tooling.',
    'bibtex-9': 'We assess the quality of ChatGPT-generated code and analyze how developers integrate AI-generated code in practice, mining the DevGPT dataset to evaluate functional correctness, code style, security properties, and developer post-edit patterns.',
    'bibtex-10': 'We propose Re(gEx|DoS)Eval, a framework for evaluating both the functional correctness and the susceptibility to ReDoS attacks of LLM-generated regular expressions, revealing that current models generate vulnerable patterns at significant rates.',
    'bibtex-11': 'We explore zero-shot prompting with GitHub Copilot for code complexity prediction, investigating whether LLMs can estimate cyclomatic complexity and other software metrics without task-specific fine-tuning and establishing baselines for future work.',
    'bibtex-12': 'We introduce the SecurityEval dataset, containing 130 Python code generation scenarios covering 75 CWE vulnerability types, providing a standardized benchmark for evaluating the security properties of ML-based code generation systems.',
    'bibtex-13': 'We apply BERT-based pre-trained language models to the automated classification of GitHub issue reports into categories such as bugs, feature requests, and questions, substantially outperforming prior approaches on this software maintenance task.'
  };

  document.querySelectorAll('.pub-section ol li').forEach(function (li) {
    var btn = li.querySelector('.open-bibtex-modal');
    if (!btn) return;
    var id = btn.getAttribute('data-content-id');
    if (!id || !abstracts[id]) return;

    var wrap = document.createElement('div');
    wrap.className = 'abstract-wrap';
    wrap.innerHTML = '<button class="abstract-toggle" aria-expanded="false">Abstract &#9658;</button>' +
      '<div class="abstract-text" style="display:none;">' + abstracts[id] + '</div>';
    li.appendChild(wrap);
  });
});

// Semantic Scholar citation counts
document.addEventListener('DOMContentLoaded', function () {
  var listItems = document.querySelectorAll('.pub-section ol li');
  if (!listItems.length) return;

  var papers = [];
  listItems.forEach(function (li) {
    var links = li.querySelectorAll('a[href]');
    var id = null;
    links.forEach(function (a) {
      if (id) return;
      var href = a.getAttribute('href') || '';
      var doiMatch = href.match(/doi\.org\/(10\.[^/?&#\s]+(?:\/[^/?&#\s]+)?)/i);
      if (doiMatch) { id = 'DOI:' + doiMatch[1]; return; }
      var arxivMatch = href.match(/arxiv\.org\/abs\/([\d.]+)/i);
      if (arxivMatch) { id = 'arXiv:' + arxivMatch[1]; }
    });
    if (id) papers.push({ li: li, id: id });
  });

  if (!papers.length) return;

  fetch('https://api.semanticscholar.org/graph/v1/paper/batch?fields=citationCount', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids: papers.map(function (p) { return p.id; }) })
  })
  .then(function (res) { return res.json(); })
  .then(function (data) {
    var note = document.getElementById('citation-note');
    if (note) note.innerHTML = 'Citation counts from <a href="https://www.semanticscholar.org" target="_blank">Semantic Scholar</a>. May take a moment to load.';
    data.forEach(function (paper, i) {
      if (paper && typeof paper.citationCount === 'number') {
        var badge = document.createElement('span');
        badge.className = 'cite-badge';
        badge.title = 'Citations via Semantic Scholar';
        badge.textContent = paper.citationCount + ' citations';
        papers[i].li.appendChild(badge);
      }
    });
  })
  .catch(function () {
    var note = document.getElementById('citation-note');
    if (note) note.textContent = 'Citation counts temporarily unavailable.';
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
    if (event.target.matches('.toggle-button')) {
      // Check if this is NOT a Copy button or the news pagination button before toggling text
      if (!event.target.classList.contains('copy-btn') && event.target.id !== 'older-news-btn' && !event.target.classList.contains('pub-filter-btn')) {
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

    // Toggle abstract
    if (event.target.classList.contains('abstract-toggle')) {
      var expanded = event.target.getAttribute('aria-expanded') === 'true';
      var abstractText = event.target.nextElementSibling;
      if (abstractText) {
        abstractText.style.display = expanded ? 'none' : 'block';
        event.target.setAttribute('aria-expanded', String(!expanded));
        event.target.innerHTML = expanded ? 'Abstract &#9658;' : 'Abstract &#9660;';
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
