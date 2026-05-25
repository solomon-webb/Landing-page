document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('pricingModal');
  const closeModalButton = document.getElementById('closeModal');
  const selectedPlanInput = document.getElementById('selectedPlan');
  const selectedPlanText = document.querySelector('.selectedPlanText');

  function openPricingModal(planName) {
    if (!modal) return;
    selectedPlanInput.value = planName;
    selectedPlanText.innerHTML = `You are selecting the <strong>${planName}</strong> plan.`;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closePricingModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  const pricingButtons = document.querySelectorAll('.openModalBtn');
  pricingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openPricingModal(button.dataset.plan || 'Starter');
    });
  });

  closeModalButton?.addEventListener('click', closePricingModal);

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      closePricingModal();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal?.classList.contains('active')) {
      closePricingModal();
    }
  });

  const pricingForm = document.getElementById('pricingForm');
  pricingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! We will contact you shortly about your ' + selectedPlanInput.value + ' plan.');
    closePricingModal();
  });

  // Demo modal
  const demoModal = document.getElementById('demoModal');
  const closeDemoModalButton = document.getElementById('closeDemoModal');
  const watchDemoButton = document.querySelector('.btn2');

  function openDemoModal() {
    if (!demoModal) return;
    demoModal.classList.add('active');
    demoModal.setAttribute('aria-hidden', 'false');
  }

  function closeDemoModal() {
    if (!demoModal) return;
    demoModal.classList.remove('active');
    demoModal.setAttribute('aria-hidden', 'true');
  }

  watchDemoButton?.addEventListener('click', openDemoModal);
  closeDemoModalButton?.addEventListener('click', closeDemoModal);

  demoModal?.addEventListener('click', (event) => {
    if (event.target === demoModal) {
      closeDemoModal();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && demoModal?.classList.contains('active')) {
      closeDemoModal();
    }
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.navLink ul li a');

  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Mobile nav toggle
  const mobileBtn = document.querySelector('.mobilebtn');
  const navMenu = document.querySelector('.navLink ul');

  mobileBtn?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('show');
    });
  });
});
