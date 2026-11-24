// Table Reservation Engine for Shree Panjurlli Fine Dine
// Formats WhatsApp deep-link message directly to the restaurant: +91 91410 93360

export function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const modal = document.getElementById('reservation-confirmation-modal');
  const closeBtn = document.getElementById('close-confirmation-btn');
  const whatsappActionBtn = document.getElementById('confirm-whatsapp-btn');

  if (!form) return;

  // Set default minimum date to today
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name')?.value.trim() || '';
    const phone = document.getElementById('res-phone')?.value.trim() || '';
    const date = document.getElementById('res-date')?.value || '';
    const time = document.getElementById('res-time')?.value || '';
    const guests = document.getElementById('res-guests')?.value || '2 Guests';
    const area = document.getElementById('res-area')?.value || 'AC Family Hall';
    const occasion = document.getElementById('res-occasion')?.value || 'Casual Dining';
    const requests = document.getElementById('res-requests')?.value.trim() || 'None';

    if (!name || !phone || !date || !time) {
      alert('Please fill in your name, phone number, date, and preferred time.');
      return;
    }

    // Format WhatsApp message strictly per the restaurant workflow guidelines
    const rawMessage = 
`*Table Reservation Request*
*Restaurant:* Shree Panjurlli Fine Dine, Tilakwadi
----------------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Date:* ${date}
*Time:* ${time}
*Guests:* ${guests}
*Seating Area:* ${area}
*Occasion:* ${occasion}
*Special Requests:* ${requests}
----------------------------------------
_Please confirm table availability._`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/919141093360?text=${encodedMessage}`;

    // Update confirmation modal
    const summaryEl = document.getElementById('reservation-summary-details');
    if (summaryEl) {
      summaryEl.innerHTML = `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Date & Time:</strong> ${escapeHtml(date)} at ${escapeHtml(time)}</p>
        <p><strong>Party Size:</strong> ${escapeHtml(guests)} (${escapeHtml(area)})</p>
        <p><strong>Occasion:</strong> ${escapeHtml(occasion)}</p>
      `;
    }

    if (whatsappActionBtn) {
      whatsappActionBtn.href = whatsappUrl;
      whatsappActionBtn.target = '_blank';
    }

    // Show modal
    if (modal) {
      modal.classList.add('active');
    }
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      form.reset();
    });
  }

  // Close on backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
