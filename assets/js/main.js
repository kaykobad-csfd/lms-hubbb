// FAQ Accordion
document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function () {
      const accordionPanel = this.nextElementSibling;
      this.classList.toggle('active');
  
      // Check if this panel is active or not
      if (accordionPanel.style.maxHeight) {
        accordionPanel.style.maxHeight = null;
      } else {
        accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
  
        // Close other panels
        document.querySelectorAll('.accordion + .panel').forEach(panel => {
          if (panel !== accordionPanel) {
            panel.style.maxHeight = null;
            panel.previousElementSibling.classList.remove('active');
          }
        });
      }
    });
  
    // If accordion declared 'active' class is open panel
    const accordionPanel = accordion.nextElementSibling;
    if (accordion.classList.contains('active')) {
      accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
    } else {
      accordionPanel.style.maxHeight = null;
    }
  });

  // course tab
  function tabCourses(evt, courseCategory) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    // Display all courses when 'All' is selected
    if (courseCategory === 'All') {
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
      }
    } else {
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      document.getElementById(courseCategory).style.display = "block";
    }

    // Remove active class from all buttons
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Add active class to the clicked button
    evt.currentTarget.className += " active";
  }

  /** Swiper Slide **/
  // Blog slide
  var swiper = new Swiper(".instructor", {
    speed: 3000,
    spaceBetween: 30,
    pagination: {
      el: ".instructor-pagination",
      clickable: true,
    },
    speed: 2000,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
    navigation: {
      nextEl: '.next-instructor',
      prevEl: '.prev-instructor'
    }
  });
  // Blog slide
  var swiper = new Swiper(".blog-slider", {
    speed: 3000,
    spaceBetween: 30,
    pagination: {
      el: ".blog-pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
    
  });