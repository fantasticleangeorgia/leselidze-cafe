/**
 * Café Mirabelle - Main Application Logic
 * Old Tbilisi, Georgia
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    lang: localStorage.getItem('mirabelle_lang') || 'en',
    menuFilter: 'all',
    galleryFilter: 'all',
    preorders: JSON.parse(localStorage.getItem('mirabelle_preorders') || '{}'),
    activeBooking: JSON.parse(localStorage.getItem('cafe_mirabelle_booking') || 'null'),
    currentReviewIndex: 0,
    currentLightboxIndex: 0,
    galleryFilteredList: []
  };

  // DOM Elements Cache
  const elements = {
    html: document.documentElement,
    langBtns: document.querySelectorAll('.lang-btn'),
    topPulseDot: document.getElementById('topPulseDot'),
    topStatusText: document.getElementById('topStatusText'),
    heroPulseDot: document.getElementById('heroPulseDot'),
    heroStatusHeading: document.getElementById('heroStatusHeading'),
    heroStatusSub: document.getElementById('heroStatusSub'),
    heroTbilisiClock: document.getElementById('heroTbilisiClock'),
    menuGrid: document.getElementById('menuGrid'),
    menuFilterBtns: document.querySelectorAll('.menu-filter-btn'),
    preorderTray: document.getElementById('preorderTray'),
    preorderCount: document.getElementById('preorderCount'),
    preorderTotalCost: document.getElementById('preorderTotalCost'),
    btnClearPreorder: document.getElementById('btnClearPreorder'),
    attachedPreordersList: document.getElementById('attachedPreordersList'),
    pastryHoldCheck: document.getElementById('pastryHoldCheck'),
    galleryGrid: document.getElementById('galleryGrid'),
    galleryFilterBtns: document.querySelectorAll('.gallery-filter-btn'),
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxTitle: document.getElementById('lightboxTitle'),
    lightboxDesc: document.getElementById('lightboxDesc'),
    lightboxClose: document.getElementById('lightboxClose'),
    lightboxPrev: document.getElementById('lightboxPrev'),
    lightboxNext: document.getElementById('lightboxNext'),
    reviewsSlider: document.getElementById('reviewsSlider'),
    reviewDots: document.getElementById('reviewDots'),
    prevReviewBtn: document.getElementById('prevReviewBtn'),
    nextReviewBtn: document.getElementById('nextReviewBtn'),
    reservationForm: document.getElementById('reservationForm'),
    resDate: document.getElementById('resDate'),
    resTime: document.getElementById('resTime'),
    mondayAlert: document.getElementById('mondayAlert'),
    btnMyBooking: document.getElementById('btnMyBooking'),
    mobileBtnMyBooking: document.getElementById('mobileBtnMyBooking'),
    ticketModalBackdrop: document.getElementById('ticketModalBackdrop'),
    ticketModalClose: document.getElementById('ticketModalClose'),
    btnTicketPrint: document.getElementById('btnTicketPrint'),
    btnTicketCancel: document.getElementById('btnTicketCancel'),
    tktBookingRef: document.getElementById('tktBookingRef'),
    tktDateTime: document.getElementById('tktDateTime'),
    tktGuests: document.getElementById('tktGuests'),
    tktSeating: document.getElementById('tktSeating'),
    tktContact: document.getElementById('tktContact'),
    tktPreordersWrap: document.getElementById('tktPreordersWrap'),
    tktPreordersList: document.getElementById('tktPreordersList'),
    tktBarcode: document.getElementById('tktBarcode'),
    addressCopyBox: document.getElementById('addressCopyBox'),
    toastMsg: document.getElementById('toastMsg'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    mobileDrawerClose: document.getElementById('mobileDrawerClose'),
    mobileDrawerLinks: document.querySelectorAll('.mobile-drawer-link'),
    schedTueFri: document.getElementById('schedTueFri'),
    schedSatSun: document.getElementById('schedSatSun'),
    schedMon: document.getElementById('schedMon')
  };

  /* ==========================================================================
     1. Tbilisi Time & Café Operating Status Engine
     ========================================================================== */
  function getTbilisiNow() {
    const now = new Date();
    // UTC time in ms
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    // Tbilisi is UTC+4
    return new Date(utc + (3600000 * 4));
  }

  function formatTbilisiTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  function updateTbilisiStatus() {
    const tbilisiTime = getTbilisiNow();
    const day = tbilisiTime.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
    const hours = tbilisiTime.getHours();
    const minutes = tbilisiTime.getMinutes();
    const timeVal = hours + minutes / 60;

    // Update Live Clock display
    if (elements.heroTbilisiClock) {
      elements.heroTbilisiClock.textContent = formatTbilisiTime(tbilisiTime);
    }

    let isOpen = false;
    let headingEn = "";
    let headingKa = "";
    let subEn = "";
    let subKa = "";

    // Clear active today classes on schedule rows
    if (elements.schedTueFri) elements.schedTueFri.classList.remove('active-today');
    if (elements.schedSatSun) elements.schedSatSun.classList.remove('active-today');
    if (elements.schedMon) elements.schedMon.classList.remove('active-today');

    if (day === 1) {
      // Monday - CLOSED ALL DAY for Artisan Baking Prep
      isOpen = false;
      headingEn = "Closed Today (Artisan Baking Prep)";
      headingKa = "დღეს დაკეტილია (საცხობის მოსამზადებელი დღე)";
      subEn = "Our pastry chefs are preparing the week's batches. Reopens Tuesday at 09:00 AM.";
      subKa = "მზადდება კვირის ახალი პარტიები. გაიღება სამშაბათს დილის 09:00-ზე.";
      if (elements.schedMon) elements.schedMon.classList.add('active-today');
    } else if (day >= 2 && day <= 5) {
      // Tuesday - Friday: 09:00 to 22:00
      if (elements.schedTueFri) elements.schedTueFri.classList.add('active-today');
      if (timeVal >= 9.0 && timeVal < 22.0) {
        isOpen = true;
        headingEn = "Open Now • Closes at 22:00";
        headingKa = "ახლა ღიაა • იკეტება 22:00-ზე";
        subEn = "Baking aroma in the salon • Walk-ins & reservations welcome";
        subKa = "სურნელოვანი ცხობა სალონში • მიღება თავისუფალია";
      } else if (timeVal < 9.0) {
        isOpen = false;
        headingEn = "Closed Now • Opens at 09:00";
        headingKa = "ახლა დაკეტილია • გაიღება 09:00-ზე";
        subEn = "Morning batch currently baking in our ovens";
        subKa = "დილის ცხობა ღუმელში მზადდება";
      } else {
        isOpen = false;
        headingEn = "Closed for the Evening";
        headingKa = "საღამოს საათები დასრულებულია";
        subEn = day === 5 ? "Reopens Saturday at 10:00 AM for weekend brunch" : "Reopens tomorrow morning at 09:00 AM";
        subKa = day === 5 ? "გაიღება შაბათს 10:00-ზე ბრანჩისთვის" : "გაიღება ხვალ დილით 09:00-ზე";
      }
    } else {
      // Saturday - Sunday: 10:00 to 23:00
      if (elements.schedSatSun) elements.schedSatSun.classList.add('active-today');
      if (timeVal >= 10.0 && timeVal < 23.0) {
        isOpen = true;
        headingEn = "Open Now • Weekend Hours until 23:00";
        headingKa = "ახლა ღიაა • შაბათ-კვირის საათები 23:00-მდე";
        subEn = "Courtyard fairy lights lit • Wine & French pastries";
        subKa = "ეზოში ანთია სანათები • ღვინო და ფრანგული დესერტები";
      } else if (timeVal < 10.0) {
        isOpen = false;
        headingEn = "Closed Now • Opens at 10:00";
        headingKa = "ახლა დაკეტილია • გაიღება 10:00-ზე";
        subEn = "Weekend brunch service begins at 10:00 AM";
        subKa = "შაბათ-კვირის ბრანჩი იწყება 10:00-ზე";
      } else {
        isOpen = false;
        headingEn = "Closed for the Night";
        headingKa = "საღამოს საათები დასრულებულია";
        subEn = day === 0 ? "Closed Monday for artisan prep • Reopens Tuesday at 09:00" : "Reopens Sunday at 10:00 AM";
        subKa = day === 0 ? "ორშაბათს ვისვენებთ • გაიღება სამშაბათს 09:00-ზე" : "გაიღება კვირას 10:00-ზე";
      }
    }

    // Apply styles to badges
    const statusText = state.lang === 'ka' ? headingKa : headingEn;
    const subText = state.lang === 'ka' ? subKa : subEn;

    if (elements.topStatusText) elements.topStatusText.textContent = statusText;
    if (elements.heroStatusHeading) elements.heroStatusHeading.textContent = statusText;
    if (elements.heroStatusSub) elements.heroStatusSub.textContent = subText;

    if (isOpen) {
      if (elements.topPulseDot) { elements.topPulseDot.className = "pulse-dot open"; }
      if (elements.heroPulseDot) { elements.heroPulseDot.className = "pulse-dot open"; }
    } else {
      if (elements.topPulseDot) { elements.topPulseDot.className = "pulse-dot closed"; }
      if (elements.heroPulseDot) { elements.heroPulseDot.className = "pulse-dot closed"; }
    }
  }

  /* ==========================================================================
     2. Bilingual Language Switcher (EN / KA)
     ========================================================================== */
  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('mirabelle_lang', lang);
    elements.html.setAttribute('lang', lang);

    // Update active state on language buttons
    elements.langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate all standard elements with data-i18n
    const transMap = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (transMap[key]) {
        el.textContent = transMap[key];
      }
    });

    // Update placeholders
    const nameInput = document.getElementById('resName');
    if (nameInput) nameInput.placeholder = transMap.res_form_name_placeholder;
    const contactInput = document.getElementById('resContact');
    if (contactInput) contactInput.placeholder = transMap.res_form_contact_placeholder;
    const notesInput = document.getElementById('resNotes');
    if (notesInput) notesInput.placeholder = transMap.res_notes_placeholder;

    // Refresh dynamic components
    updateTbilisiStatus();
    renderMenu();
    renderGallery();
    renderReviews();
    updatePreorderUI();
    updateDateValidationNotice();
    updateMyBookingButton();
  }

  // Language buttons event
  elements.langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang !== state.lang) {
        applyLanguage(targetLang);
      }
    });
  });

  /* ==========================================================================
     3. Filterable Menu with Photography & Dietary Tags
     ========================================================================== */
  function getBadgeLabel(badgeKey) {
    const map = {
      popular: state.lang === 'ka' ? I18N.ka.badge_popular : I18N.en.badge_popular,
      fresh_daily: state.lang === 'ka' ? I18N.ka.badge_fresh_daily : I18N.en.badge_fresh_daily,
      limited_batch: state.lang === 'ka' ? I18N.ka.badge_limited_batch : I18N.en.badge_limited_batch,
      house_favorite: state.lang === 'ka' ? I18N.ka.badge_house_favorite : I18N.en.badge_house_favorite
    };
    return map[badgeKey] || badgeKey;
  }

  function getBadgeClass(badgeKey) {
    const classMap = {
      popular: 'badge-popular',
      fresh_daily: 'badge-fresh-daily',
      limited_batch: 'badge-limited-batch',
      house_favorite: 'badge-house-favorite'
    };
    return classMap[badgeKey] || 'badge-fresh-daily';
  }

  function getDietaryLabel(dietKey) {
    const map = {
      vegetarian: state.lang === 'ka' ? I18N.ka.diet_vegetarian : I18N.en.diet_vegetarian,
      gluten_free_friendly: state.lang === 'ka' ? I18N.ka.diet_gluten_free_friendly : I18N.en.diet_gluten_free_friendly,
      fresh_daily: state.lang === 'ka' ? I18N.ka.badge_fresh_daily : I18N.en.badge_fresh_daily
    };
    return map[dietKey] || dietKey;
  }

  function renderMenu() {
    if (!elements.menuGrid) return;

    const filteredItems = CAFE_DATA.menu.filter(item => {
      if (state.menuFilter === 'all') return true;
      return item.category === state.menuFilter;
    });

    elements.menuGrid.innerHTML = '';

    filteredItems.forEach(item => {
      const isPreordered = !!state.preorders[item.id];
      const count = state.preorders[item.id] || 0;
      const itemName = item.name[state.lang] || item.name.en;
      const itemDesc = item.description[state.lang] || item.description.en;

      const card = document.createElement('article');
      card.className = 'menu-card';
      card.dataset.id = item.id;

      // Badges HTML
      let badgesHtml = '';
      if (item.badges && item.badges.length > 0) {
        badgesHtml = `<div class="menu-card-badges">` +
          item.badges.map(b => `<span class="badge-tag ${getBadgeClass(b)}">${getBadgeLabel(b)}</span>`).join('') +
          `</div>`;
      }

      // Dietary HTML
      let dietaryHtml = '';
      if (item.dietary && item.dietary.length > 0) {
        dietaryHtml = `<div class="dietary-tags">` +
          item.dietary.map(d => `<span class="diet-pill">${getDietaryLabel(d)}</span>`).join('') +
          `</div>`;
      }

      const btnText = isPreordered 
        ? `${I18N[state.lang].menu_in_preorder} (${count})` 
        : I18N[state.lang].menu_add_preorder;

      card.innerHTML = `
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${itemName}" class="menu-card-img" loading="lazy">
          ${badgesHtml}
        </div>
        <div class="menu-card-content">
          <div class="menu-card-header">
            <h3 class="menu-card-title">${itemName}</h3>
            <span class="menu-card-price">₾${item.price.toFixed(2)}</span>
          </div>
          <p class="menu-card-desc">${itemDesc}</p>
          <div class="menu-card-footer">
            ${dietaryHtml}
            <button type="button" class="btn-preorder-add ${isPreordered ? 'added' : ''}" data-item-id="${item.id}">
              ${btnText}
            </button>
          </div>
        </div>
      `;

      elements.menuGrid.appendChild(card);
    });

    // Attach click listeners to preorder buttons
    elements.menuGrid.querySelectorAll('.btn-preorder-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemId = btn.getAttribute('data-item-id');
        togglePreorderItem(itemId);
      });
    });
  }

  // Filter tabs click
  elements.menuFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.menuFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      state.menuFilter = btn.getAttribute('data-category');
      renderMenu();
    });
  });

  /* ==========================================================================
     4. Pre-Order Cart & Table Reservation Integration
     ========================================================================== */
  function togglePreorderItem(itemId) {
    const item = CAFE_DATA.menu.find(m => m.id === itemId);
    if (!item) return;

    if (!state.preorders[itemId]) {
      state.preorders[itemId] = 1;
      showToast(state.lang === 'ka' 
        ? `"${item.name.ka}" დაემატა თქვენს მაგიდას!` 
        : `"${item.name.en}" saved to your table!`);
    } else {
      state.preorders[itemId] += 1;
      showToast(state.lang === 'ka' 
        ? `დამატებულია: ${state.preorders[itemId]}x "${item.name.ka}"` 
        : `Added another: ${state.preorders[itemId]}x "${item.name.en}"`);
    }

    // Auto-check pastry hold when pastries are added
    if (elements.pastryHoldCheck) {
      elements.pastryHoldCheck.checked = true;
    }

    localStorage.setItem('mirabelle_preorders', JSON.stringify(state.preorders));
    updatePreorderUI();
    renderMenu();
  }

  function removePreorderItem(itemId) {
    if (state.preorders[itemId]) {
      delete state.preorders[itemId];
      localStorage.setItem('mirabelle_preorders', JSON.stringify(state.preorders));
      updatePreorderUI();
      renderMenu();
    }
  }

  function updatePreorderUI() {
    const keys = Object.keys(state.preorders);
    let totalCount = 0;
    let totalCost = 0;

    keys.forEach(k => {
      const item = CAFE_DATA.menu.find(m => m.id === k);
      if (item) {
        const qty = state.preorders[k];
        totalCount += qty;
        totalCost += item.price * qty;
      }
    });

    // Update floating tray
    if (totalCount > 0) {
      elements.preorderTray.classList.add('visible');
      elements.preorderCount.textContent = totalCount;
      elements.preorderTotalCost.textContent = `₾${totalCost.toFixed(2)}`;
    } else {
      elements.preorderTray.classList.remove('visible');
    }

    // Update reservation form attached items list
    if (elements.attachedPreordersList) {
      if (keys.length === 0) {
        elements.attachedPreordersList.innerHTML = `<span style="font-size:0.8rem; color:var(--taupe);">${I18N[state.lang].res_preorder_empty}</span>`;
      } else {
        elements.attachedPreordersList.innerHTML = '';
        keys.forEach(k => {
          const item = CAFE_DATA.menu.find(m => m.id === k);
          if (item) {
            const qty = state.preorders[k];
            const chip = document.createElement('div');
            chip.className = 'attached-item-chip';
            chip.innerHTML = `
              <span>${qty}x ${item.name[state.lang] || item.name.en}</span>
              <span style="color:var(--caramel); font-weight:600;">(₾${(item.price * qty).toFixed(2)})</span>
              <span class="chip-remove" data-remove-id="${item.id}" title="Remove">&times;</span>
            `;
            elements.attachedPreordersList.appendChild(chip);
          }
        });

        // Add listeners to chip removal
        elements.attachedPreordersList.querySelectorAll('.chip-remove').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-remove-id');
            removePreorderItem(id);
          });
        });
      }
    }
  }

  if (elements.btnClearPreorder) {
    elements.btnClearPreorder.addEventListener('click', () => {
      state.preorders = {};
      localStorage.removeItem('mirabelle_preorders');
      updatePreorderUI();
      renderMenu();
      showToast(state.lang === 'ka' ? "შეკვეთა გასუფთავდა" : "Pre-order cleared");
    });
  }

  /* ==========================================================================
     5. Interactive Photo Gallery & Fullscreen Lightbox
     ========================================================================== */
  function renderGallery() {
    if (!elements.galleryGrid) return;

    state.galleryFilteredList = CAFE_DATA.gallery.filter(item => {
      if (state.galleryFilter === 'all') return true;
      return item.category === state.galleryFilter;
    });

    elements.galleryGrid.innerHTML = '';

    state.galleryFilteredList.forEach((item, index) => {
      const title = item.title[state.lang] || item.title.en;
      const desc = item.desc[state.lang] || item.desc.en;

      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', title);

      el.innerHTML = `
        <img src="${item.image}" alt="${title}" loading="lazy">
        <div class="gallery-item-overlay">
          <h4 class="gallery-item-title">${title}</h4>
          <p class="gallery-item-desc">${desc}</p>
        </div>
      `;

      el.addEventListener('click', () => {
        openLightbox(index);
      });

      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      elements.galleryGrid.appendChild(el);
    });
  }

  elements.galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.galleryFilter = btn.getAttribute('data-gal-cat');
      renderGallery();
    });
  });

  function openLightbox(index) {
    state.currentLightboxIndex = index;
    updateLightboxContent();
    elements.lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    elements.lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = state.galleryFilteredList[state.currentLightboxIndex];
    if (!item) return;

    elements.lightboxImg.src = item.image;
    elements.lightboxImg.alt = item.title[state.lang] || item.title.en;
    elements.lightboxTitle.textContent = item.title[state.lang] || item.title.en;
    elements.lightboxDesc.textContent = item.desc[state.lang] || item.desc.en;
  }

  if (elements.lightboxClose) elements.lightboxClose.addEventListener('click', closeLightbox);
  if (elements.lightboxPrev) {
    elements.lightboxPrev.addEventListener('click', () => {
      state.currentLightboxIndex = (state.currentLightboxIndex - 1 + state.galleryFilteredList.length) % state.galleryFilteredList.length;
      updateLightboxContent();
    });
  }
  if (elements.lightboxNext) {
    elements.lightboxNext.addEventListener('click', () => {
      state.currentLightboxIndex = (state.currentLightboxIndex + 1) % state.galleryFilteredList.length;
      updateLightboxContent();
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!elements.lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && elements.lightboxPrev) elements.lightboxPrev.click();
    if (e.key === 'ArrowRight' && elements.lightboxNext) elements.lightboxNext.click();
  });

  elements.lightboxModal.addEventListener('click', (e) => {
    if (e.target === elements.lightboxModal) closeLightbox();
  });

  /* ==========================================================================
     6. Guest Reviews Carousel
     ========================================================================== */
  function renderReviews() {
    if (!elements.reviewsSlider) return;

    elements.reviewsSlider.innerHTML = '';
    elements.reviewDots.innerHTML = '';

    CAFE_DATA.reviews.forEach((rev, idx) => {
      const slide = document.createElement('div');
      slide.className = `review-slide ${idx === state.currentReviewIndex ? 'active' : ''}`;

      let starsSvg = '';
      for (let s = 0; s < rev.rating; s++) {
        starsSvg += `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
      }

      slide.innerHTML = `
        <div class="review-stars-quote">${starsSvg}</div>
        <p class="review-quote">"${rev.text[state.lang] || rev.text.en}"</p>
        <div class="review-author-info">
          <h4>${rev.author}</h4>
          <p>${rev.origin} • ${rev.date}</p>
        </div>
      `;

      elements.reviewsSlider.appendChild(slide);

      // Dot
      const dot = document.createElement('button');
      dot.className = `review-dot ${idx === state.currentReviewIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to review ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToReview(idx);
      });
      elements.reviewDots.appendChild(dot);
    });
  }

  function goToReview(idx) {
    state.currentReviewIndex = idx;
    const slides = elements.reviewsSlider.querySelectorAll('.review-slide');
    const dots = elements.reviewDots.querySelectorAll('.review-dot');

    slides.forEach((sl, i) => {
      sl.classList.toggle('active', i === idx);
    });
    dots.forEach((dt, i) => {
      dt.classList.toggle('active', i === idx);
    });
  }

  if (elements.prevReviewBtn) {
    elements.prevReviewBtn.addEventListener('click', () => {
      const count = CAFE_DATA.reviews.length;
      goToReview((state.currentReviewIndex - 1 + count) % count);
    });
  }
  if (elements.nextReviewBtn) {
    elements.nextReviewBtn.addEventListener('click', () => {
      const count = CAFE_DATA.reviews.length;
      goToReview((state.currentReviewIndex + 1) % count);
    });
  }

  // Auto carousel slide every 7 seconds
  let reviewInterval = setInterval(() => {
    const count = CAFE_DATA.reviews.length;
    goToReview((state.currentReviewIndex + 1) % count);
  }, 7000);

  if (elements.reviewsSlider) {
    elements.reviewsSlider.addEventListener('mouseenter', () => clearInterval(reviewInterval));
    elements.reviewsSlider.addEventListener('mouseleave', () => {
      reviewInterval = setInterval(() => {
        const count = CAFE_DATA.reviews.length;
        goToReview((state.currentReviewIndex + 1) % count);
      }, 7000);
    });
  }

  /* ==========================================================================
     7. Smart Table Reservation System
     ========================================================================== */
  function initReservationDate() {
    if (!elements.resDate) return;

    // Set minimum date to today in local time
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDateStr = `${yyyy}-${mm}-${dd}`;
    elements.resDate.setAttribute('min', minDateStr);

    // Default select tomorrow or next open day
    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 1);
    // If tomorrow is Monday, move to Tuesday
    if (defaultDate.getDay() === 1) {
      defaultDate.setDate(defaultDate.getDate() + 1);
    }
    const defYyyy = defaultDate.getFullYear();
    const defMm = String(defaultDate.getMonth() + 1).padStart(2, '0');
    const defDd = String(defaultDate.getDate()).padStart(2, '0');
    elements.resDate.value = `${defYyyy}-${defMm}-${defDd}`;

    populateTimeSlots(defaultDate);
  }

  function populateTimeSlots(dateObj) {
    if (!elements.resTime) return;

    elements.resTime.innerHTML = '';
    const day = dateObj.getDay();

    if (day === 1) {
      // Monday - closed!
      elements.mondayAlert.classList.add('visible');
      const opt = document.createElement('option');
      opt.value = "";
      opt.textContent = state.lang === 'ka' 
        ? "ორშაბათობით საცხობი დაკეტილია" 
        : "Closed Mondays for baking prep";
      opt.disabled = true;
      opt.selected = true;
      elements.resTime.appendChild(opt);
      return;
    } else {
      elements.mondayAlert.classList.remove('visible');
    }

    let startHour = 9;
    let endHour = 21; // Last seating at 21:30 for 22:00 close

    if (day === 0 || day === 6) {
      // Sat-Sun: 10:00 to 22:30 (close at 23:00)
      startHour = 10;
      endHour = 22;
    }

    const placeholderOpt = document.createElement('option');
    placeholderOpt.value = "";
    placeholderOpt.disabled = true;
    placeholderOpt.selected = true;
    placeholderOpt.textContent = state.lang === 'ka' ? "აირჩიეთ სასურველი დრო" : "Select an available time slot";
    elements.resTime.appendChild(placeholderOpt);

    for (let h = startHour; h <= endHour; h++) {
      const hStr = String(h).padStart(2, '0');
      ['00', '30'].forEach(mins => {
        if (h === endHour && mins === '30' && (day >= 2 && day <= 5)) {
          // Last slot on weekdays is 21:30
          return;
        }
        const opt = document.createElement('option');
        opt.value = `${hStr}:${mins}`;
        opt.textContent = `${hStr}:${mins}`;
        elements.resTime.appendChild(opt);
      });
    }

    // Default select 14:00 or second option
    if (elements.resTime.options.length > 3) {
      elements.resTime.selectedIndex = 3;
    }
  }

  function updateDateValidationNotice() {
    if (!elements.resDate || !elements.resDate.value) return;
    const parts = elements.resDate.value.split('-');
    const selectedDate = new Date(parts[0], parts[1] - 1, parts[2]);
    if (selectedDate.getDay() === 1) {
      elements.mondayAlert.classList.add('visible');
    } else {
      elements.mondayAlert.classList.remove('visible');
    }
  }

  if (elements.resDate) {
    elements.resDate.addEventListener('change', () => {
      const parts = elements.resDate.value.split('-');
      if (parts.length === 3) {
        const selectedDate = new Date(parts[0], parts[1] - 1, parts[2]);
        if (selectedDate.getDay() === 1) {
          // It's a Monday!
          elements.mondayAlert.classList.add('visible');
          // Clear time slots
          elements.resTime.innerHTML = `<option value="" disabled selected>${state.lang === 'ka' ? 'ორშაბათობით დაკეტილია - აირჩიეთ სხვა დღე' : 'Closed on Mondays - please select another date'}</option>`;
        } else {
          elements.mondayAlert.classList.remove('visible');
          populateTimeSlots(selectedDate);
        }
      }
    });
  }

  // Handle Reservation Form Submission
  if (elements.reservationForm) {
    elements.reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const contact = document.getElementById('resContact').value.trim();
      const date = elements.resDate.value;
      const time = elements.resTime.value;
      const guests = document.getElementById('resGuests').value;
      const seating = document.getElementById('resSeating').value;
      const pastryHold = elements.pastryHoldCheck.checked;
      const notes = document.getElementById('resNotes').value.trim();

      // Check Monday validation
      const dateParts = date.split('-');
      const dObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      if (dObj.getDay() === 1) {
        elements.mondayAlert.classList.add('visible');
        elements.resDate.focus();
        showToast(state.lang === 'ka' 
          ? "მირაბელი ორშაბათობით დაკეტილია. გთხოვთ აირჩიოთ სამშაბათი-კვირა." 
          : "Café Mirabelle is closed Mondays for artisan prep. Please choose another day.");
        return;
      }

      if (!time) {
        showToast(state.lang === 'ka' ? "გთხოვთ აირჩიოთ დროის მონაკვეთი." : "Please choose a time slot.");
        elements.resTime.focus();
        return;
      }

      // Generate aesthetic unique booking reference code
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const bookingRef = `MB-${randomId}-TB`;

      // Build reserved pastries snapshot
      const reservedPastriesSnapshot = [];
      Object.keys(state.preorders).forEach(id => {
        const item = CAFE_DATA.menu.find(m => m.id === id);
        if (item) {
          reservedPastriesSnapshot.push({
            id: item.id,
            nameEn: item.name.en,
            nameKa: item.name.ka,
            qty: state.preorders[id],
            price: item.price
          });
        }
      });

      const booking = {
        ref: bookingRef,
        name,
        contact,
        date,
        time,
        guests,
        seating,
        pastryHold,
        notes,
        pastries: reservedPastriesSnapshot,
        createdAt: new Date().toISOString()
      };

      // Save to localStorage
      state.activeBooking = booking;
      localStorage.setItem('cafe_mirabelle_booking', JSON.stringify(booking));

      // Show Ticket modal
      showTicketModal(booking);
      updateMyBookingButton();

      showToast(state.lang === 'ka' 
        ? "ჯავშანი წარმატებით დადასტურდა!" 
        : "Reservation successfully confirmed!");
    });
  }

  /* ==========================================================================
     8. Digital Ticket Confirmation Modal
     ========================================================================== */
  function showTicketModal(booking) {
    if (!booking) return;

    elements.tktBookingRef.textContent = booking.ref;
    
    // Format date string nicely
    const p = booking.date.split('-');
    const dt = new Date(p[0], p[1] - 1, p[2]);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const dateFormatted = dt.toLocaleDateString(state.lang === 'ka' ? 'ka-GE' : 'en-US', options);
    elements.tktDateTime.textContent = `${dateFormatted} • ${booking.time}`;

    const guestsLabel = state.lang === 'ka' ? 'სტუმარი' : (booking.guests === '1' ? 'Guest' : 'Guests');
    elements.tktGuests.textContent = `${booking.guests} ${guestsLabel}`;

    const seatingLabel = booking.seating === 'courtyard' 
      ? (state.lang === 'ka' ? I18N.ka.res_seat_courtyard : I18N.en.res_seat_courtyard)
      : (state.lang === 'ka' ? I18N.ka.res_seat_indoor : I18N.en.res_seat_indoor);
    elements.tktSeating.textContent = seatingLabel;

    elements.tktContact.textContent = `${booking.name} (${booking.contact})`;

    // Pre-orders summary on ticket
    if (booking.pastries && booking.pastries.length > 0) {
      elements.tktPreordersWrap.style.display = 'block';
      elements.tktPreordersList.innerHTML = booking.pastries.map(p => {
        const pName = state.lang === 'ka' ? p.nameKa : p.nameEn;
        return `• ${p.qty}x ${pName} (₾${(p.price * p.qty).toFixed(2)})`;
      }).join('<br>');
    } else {
      elements.tktPreordersWrap.style.display = 'none';
    }

    const pastryNotice = document.getElementById('tktPastryHoldNotice');
    if (pastryNotice) {
      pastryNotice.style.display = booking.pastryHold ? 'block' : 'none';
    }

    elements.ticketModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeTicketModal() {
    elements.ticketModalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (elements.ticketModalClose) {
    elements.ticketModalClose.addEventListener('click', closeTicketModal);
  }

  elements.ticketModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.ticketModalBackdrop) {
      closeTicketModal();
    }
  });

  // Print ticket
  if (elements.btnTicketPrint) {
    elements.btnTicketPrint.addEventListener('click', () => {
      window.print();
    });
  }

  // Cancel reservation
  if (elements.btnTicketCancel) {
    elements.btnTicketCancel.addEventListener('click', () => {
      const confirmText = state.lang === 'ka'
        ? "ნამდვილად გსურთ ჯავშნის გაუქმება?"
        : "Are you sure you want to cancel your table reservation?";

      if (confirm(confirmText)) {
        state.activeBooking = null;
        localStorage.removeItem('cafe_mirabelle_booking');
        closeTicketModal();
        updateMyBookingButton();
        showToast(state.lang === 'ka' ? "ჯავშანი გაუქმებულია." : "Reservation cancelled.");
      }
    });
  }

  function updateMyBookingButton() {
    const hasBooking = !!state.activeBooking;
    if (elements.btnMyBooking) {
      elements.btnMyBooking.style.display = hasBooking ? 'inline-flex' : 'none';
      elements.btnMyBooking.onclick = () => showTicketModal(state.activeBooking);
    }
    if (elements.mobileBtnMyBooking) {
      elements.mobileBtnMyBooking.style.display = hasBooking ? 'inline-flex' : 'none';
      elements.mobileBtnMyBooking.onclick = () => {
        closeMobileDrawer();
        showTicketModal(state.activeBooking);
      };
    }
  }

  /* ==========================================================================
     9. Click to Copy Address & Toast Notifications
     ========================================================================== */
  function showToast(message) {
    if (!elements.toastMsg) return;
    elements.toastMsg.textContent = message;
    elements.toastMsg.classList.add('show');
    setTimeout(() => {
      elements.toastMsg.classList.remove('show');
    }, 3500);
  }

  if (elements.addressCopyBox) {
    elements.addressCopyBox.addEventListener('click', () => {
      const addressToCopy = CAFE_DATA.profile.address.en;
      navigator.clipboard.writeText(addressToCopy).then(() => {
        showToast(state.lang === 'ka' ? I18N.ka.loc_copied : I18N.en.loc_copied);
      }).catch(() => {
        // Fallback
        showToast(addressToCopy);
      });
    });
  }

  /* ==========================================================================
     10. Mobile Menu Drawer
     ========================================================================== */
  function openMobileDrawer() {
    elements.mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    elements.mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener('click', openMobileDrawer);
  }
  if (elements.mobileDrawerClose) {
    elements.mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  }
  elements.mobileDrawerLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  /* ==========================================================================
     11. Initialize Everything on Load
     ========================================================================== */
  initReservationDate();
  applyLanguage(state.lang);
  updateTbilisiStatus();
  updateMyBookingButton();

  // Tick clock and status every second
  setInterval(updateTbilisiStatus, 1000);
});
