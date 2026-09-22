/**
 * MOLINAZ DEV - SHOWCASE HUB TURISMO (GOOGLE MEET EDITION)
 * Lógica de Presentación Comercial, Filtros, Paletas Canva y Configurador en Vivo
 */

import { 
  categories, 
  demosData, 
  canvaColorPalettes, 
  canvaPaletteCategories,
  tourModules, 
  deliveryInfo 
} from '../data/demos.js';

// Application State
const state = {
  activeCategory: 'all',
  activePaletteCategory: 'all',
  searchQuery: '',
  activeDemo: null,
  activeDevice: 'desktop',
  selectedPalette: canvaColorPalettes[0],
  
  // Builder State
  builder: {
    baseModel: demosData[0], // MaxisTravel
    palette: canvaColorPalettes[0],
    selectedModules: tourModules.filter(m => m.defaultChecked).map(m => m.id),
    activeModuleCategory: 'all',
    previewMode: 'web', // 'web' or 'schematic'
    previewDevice: 'desktop', // 'desktop' or 'mobile'
    fullscreenDevice: 'desktop' // 'desktop', 'tablet', or 'mobile'
  }
};

// DOM Elements
const demosGrid = document.getElementById('demosGrid');
const emptyState = document.getElementById('emptyState');
const categoryTabsContainer = document.getElementById('categoryTabs');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const visibleCountEl = document.getElementById('visibleCount');
const totalCountEl = document.getElementById('totalCount');
const demoCountEl = document.getElementById('demoCount');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const palettesGrid = document.getElementById('palettesGrid');
const paletteCategoryTabs = document.getElementById('paletteCategoryTabs');

// Palette Preview Box Elements
const previewPaletteName = document.getElementById('previewPaletteName');
const previewPaletteDesc = document.getElementById('previewPaletteDesc');
const copyCurrentPaletteBtn = document.getElementById('copyCurrentPaletteBtn');
const quotePaletteBtn = document.getElementById('quotePaletteBtn');

// Builder Elements
const baseModelsSelector = document.getElementById('baseModelsSelector');
const builderPaletteSelect = document.getElementById('builderPaletteSelect');
const builderQuickSwatches = document.getElementById('builderQuickSwatches');
const moduleCategoryTabs = document.getElementById('moduleCategoryTabs');
const modulesChecklist = document.getElementById('modulesChecklist');
const selectedModulesCount = document.getElementById('selectedModulesCount');
const summaryAgencyModel = document.getElementById('summaryAgencyModel');
const summaryPaletteName = document.getElementById('summaryPaletteName');
const summaryDot = document.getElementById('summaryDot');
const schematicBody = document.getElementById('schematicBody');
const builderViewportContainer = document.getElementById('builderViewportContainer');
const builderLiveWeb = document.getElementById('builderLiveWeb');
const previewModeTabs = document.getElementById('previewModeTabs');
const previewDeviceToggle = document.getElementById('previewDeviceToggle');
const schematicUrl = document.getElementById('schematicUrl');
const estimatedDays = document.getElementById('estimatedDays');
const sendConfigWhatsappBtn = document.getElementById('sendConfigWhatsappBtn');
const resetConfigBtn = document.getElementById('resetConfigBtn');
const openFullscreenPreviewBtn = document.getElementById('openFullscreenPreviewBtn');

// Modals
const deviceModal = document.getElementById('deviceModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const previewIframe = document.getElementById('previewIframe');
const deviceFrame = document.getElementById('deviceFrame');
const modalTitle = document.getElementById('modalTitle');
const modalBadge = document.getElementById('modalBadge');
const modalExternalLink = document.getElementById('modalExternalLink');
const modalUrlDisplay = document.getElementById('modalUrlDisplay');
const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
const modalOpenTabBtn = document.getElementById('modalOpenTabBtn');
const iframeLoader = document.getElementById('iframeLoader');
const iframeSecurityNotice = document.getElementById('iframeSecurityNotice');
const securityOpenBtn = document.getElementById('securityOpenBtn');
const switcherButtons = document.querySelectorAll('.switcher-btn');

// Fullscreen Preview Modal Elements
const fullscreenPreviewModal = document.getElementById('fullscreenPreviewModal');
const closeFullscreenBtn = document.getElementById('closeFullscreenBtn');
const fsModalTitle = document.getElementById('fsModalTitle');
const fsModalBadge = document.getElementById('fsModalBadge');
const fsDomainPill = document.getElementById('fsDomainPill');
const fsDomainLink = document.getElementById('fsDomainLink');
const fsWhatsappBtn = document.getElementById('fsWhatsappBtn');
const fsDeviceSwitcher = document.getElementById('fsDeviceSwitcher');
const fsViewportContainer = document.getElementById('fsViewportContainer');
const fsLiveWeb = document.getElementById('fsLiveWeb');

// Sales Guide Modal
const salesGuideModal = document.getElementById('salesGuideModal');
const openSalesGuideBtn = document.getElementById('openSalesGuideBtn');
const closeSalesGuideBtn = document.getElementById('closeSalesGuideBtn');
const gotItBtn = document.getElementById('gotItBtn');

// Toast
const toastNotification = document.getElementById('toastNotification');
const toastMessage = document.getElementById('toastMessage');

/**
 * Initialize Application
 */
function init() {
  totalCountEl.textContent = demosData.length;
  if (demoCountEl) demoCountEl.textContent = demosData.length;

  renderCategories();
  renderDemos();
  renderPaletteCategories();
  renderPalettes();
  initBuilder();
  setupEventListeners();
  refreshLucideIcons();
}

/**
 * Render Category Tabs
 */
function renderCategories() {
  categoryTabsContainer.innerHTML = categories.map(cat => {
    const isActive = cat.id === state.activeCategory ? 'active' : '';
    const count = cat.id === 'all' 
      ? demosData.length 
      : demosData.filter(d => d.category === cat.id).length;

    return `
      <button class="category-tab ${isActive}" data-category="${cat.id}">
        <i data-lucide="${cat.icon}"></i>
        <span>${cat.label}</span>
        <span class="count-pill">(${count})</span>
      </button>
    `;
  }).join('');
}

/**
 * Filter Demos according to category and search query
 */
function getFilteredDemos() {
  const query = state.searchQuery.toLowerCase().trim();

  return demosData.filter(demo => {
    const matchesCategory = state.activeCategory === 'all' || demo.category === state.activeCategory;
    if (!matchesCategory) return false;
    if (!query) return true;

    const searchableText = [
      demo.name,
      demo.region || '',
      demo.location,
      demo.categoryLabel,
      demo.tagline,
      demo.description,
      demo.idealFor,
      demo.techStack,
      ...(demo.features || []),
      ...(demo.salesPitch || [])
    ].join(' ').toLowerCase();

    return searchableText.includes(query);
  });
}

/**
 * Render Demo Cards with Enhanced Buttons for Google Meet
 */
function renderDemos() {
  const filteredDemos = getFilteredDemos();
  visibleCountEl.textContent = filteredDemos.length;

  if (filteredDemos.length === 0) {
    demosGrid.style.display = 'none';
    emptyState.style.display = 'flex';
    refreshLucideIcons();
    return;
  }

  demosGrid.style.display = 'grid';
  emptyState.style.display = 'none';

  demosGrid.innerHTML = filteredDemos.map(demo => {
    const waMessage = encodeURIComponent(
      `Hola equipo Molinaz Dev, me interesa cotizar una propuesta web basada en el modelo "${demo.name}" para una agencia de viajes.`
    );
    const waLink = `https://wa.me/51987654321?text=${waMessage}`;

    return `
      <article class="demo-card" data-id="${demo.id}">
        <!-- Preview Image Header -->
        <div class="card-preview">
          <img src="${demo.previewImage}" alt="Preview ${demo.name}" class="card-preview-img" loading="lazy">
          <div class="card-preview-overlay">
            <div class="preview-top-badges">
              <span class="demo-badge" style="background-color: ${demo.themeColors.badgeBg}; border: 1px solid ${demo.themeColors.badgeBorder};">
                ${demo.badge}
              </span>
              <div class="live-indicator">
                <span class="live-dot"></span>
                <span>En Vivo</span>
              </div>
            </div>

            <!-- Quick Action on Hover -->
            <div class="preview-hover-action">
              <a href="${demo.url}" target="_blank" rel="noopener noreferrer" class="btn-card-launch" title="Abrir en pestaña nueva para compartir en Meet">
                <i data-lucide="external-link"></i>
                <span>Abrir Web en Vivo</span>
              </a>
              <button class="btn-preview-trigger" data-preview-id="${demo.id}" title="Ver en simulador de celular">
                <i data-lucide="smartphone"></i>
                <span>Simulador Móvil</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Card Body -->
        <div class="card-body">
          <div class="card-title-row">
            <div class="card-region-badge">
              <i data-lucide="map-pin"></i>
              <span>${demo.region || demo.location}</span>
            </div>
            <h2 class="demo-title">${demo.name}</h2>
            <span class="location-detail">${demo.location}</span>
          </div>

          <p class="demo-tagline">${demo.tagline}</p>

          <!-- Feature Pills -->
          <div class="features-list">
            ${demo.features.map(f => `<span class="feature-pill">${f}</span>`).join('')}
          </div>

          <!-- Sales Pitch Accordion (Tips for Seller in Google Meet) -->
          <div class="pitch-accordion" id="accordion-${demo.id}">
            <button class="pitch-accordion-trigger" data-accordion-id="accordion-${demo.id}">
              <div class="left-box">
                <i data-lucide="sparkles"></i>
                <span>Qué decirle al cliente (Puntos de Venta)</span>
              </div>
              <i data-lucide="chevron-down" class="chevron"></i>
            </button>
            <div class="pitch-accordion-content">
              <ul class="pitch-bullets">
                ${demo.salesPitch.map(point => `
                  <li>
                    <i data-lucide="check"></i>
                    <span>${point}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="card-footer">
          <div class="card-actions">
            <a href="${demo.url}" target="_blank" rel="noopener noreferrer" class="btn-card-launch" title="Abrir web completa en vivo">
              <i data-lucide="external-link"></i>
              <span>Abrir Web en Vivo</span>
            </a>
            <button class="btn-card-preview" data-preview-id="${demo.id}" title="Simular en celular o tablet">
              <i data-lucide="smartphone"></i>
              <span>Simulador</span>
            </button>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-card-whatsapp" title="Cotizar propuesta por WhatsApp">
              <i data-lucide="message-circle"></i>
              <span>Cotizar</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  refreshLucideIcons();
}

/**
 * Render Palette Category Filter Tabs
 */
function renderPaletteCategories() {
  if (!paletteCategoryTabs) return;

  paletteCategoryTabs.innerHTML = canvaPaletteCategories.map(cat => {
    const isActive = cat.id === state.activePaletteCategory ? 'active' : '';
    const count = cat.id === 'all' 
      ? canvaColorPalettes.length 
      : canvaColorPalettes.filter(p => p.category === cat.id).length;

    return `
      <button class="palette-cat-btn ${isActive}" data-pal-cat="${cat.id}">
        <span>${cat.label.split('(')[0].trim()}</span>
        <span class="p-count">(${count})</span>
      </button>
    `;
  }).join('');
}

/**
 * Render Canva Color Palettes Grid (Filtered by Active Category)
 */
function renderPalettes() {
  if (!palettesGrid) return;

  const filtered = state.activePaletteCategory === 'all'
    ? canvaColorPalettes
    : canvaColorPalettes.filter(p => p.category === state.activePaletteCategory);

  palettesGrid.innerHTML = filtered.map(palette => {
    const isSelected = state.selectedPalette.id === palette.id ? 'active' : '';

    return `
      <div class="palette-card ${isSelected}" data-palette-id="${palette.id}">
        <div class="palette-card-header">
          <h3 class="palette-name">${palette.name}</h3>
          <span class="palette-best-for">${palette.bestFor}</span>
        </div>

        <!-- Visual Color Swatch Strip -->
        <div class="palette-swatches-row" title="Haz clic en cualquier barra para ver detalles">
          ${palette.colors.map(col => `
            <div class="swatch-bar" style="background-color: ${col.hex};" title="${col.name}: ${col.hex}"></div>
          `).join('')}
        </div>

        <!-- Hex Pills -->
        <div class="palette-hex-list">
          ${palette.colors.map(col => `
            <span class="hex-pill" data-copy-hex="${col.hex}" title="Copiar ${col.hex}">
              ${col.hex}
            </span>
          `).join('')}
        </div>

        <div class="palette-card-footer">
          <button class="btn-copy-palette" data-copy-palette="${palette.id}">
            <i data-lucide="copy"></i>
            <span>Copiar 5 Colores</span>
          </button>
          <span class="badge-vibe" style="font-size: 11px; color: var(--c-tierra-600);">
            ${palette.vibe.split(',')[0]}
          </span>
        </div>
      </div>
    `;
  }).join('');

  updatePalettePreviewBox();
  refreshLucideIcons();
}

/**
 * Update Selected Palette Live Preview Box
 */
function updatePalettePreviewBox() {
  if (!previewPaletteName || !previewPaletteDesc || !state.selectedPalette) return;

  const pal = state.selectedPalette;
  previewPaletteName.textContent = `Paleta Seleccionada: ${pal.name}`;
  previewPaletteDesc.textContent = `${pal.vibe}. Recomendada para: ${pal.bestFor}.`;

  const hexList = pal.colors.map(c => `${c.name} (${c.hex})`).join(', ');
  const waMessage = encodeURIComponent(
    `Hola equipo Molinaz Dev, en el showroom elegí la paleta de colores "${pal.name}" [${hexList}] para la propuesta web de mi agencia.`
  );
  if (quotePaletteBtn) {
    quotePaletteBtn.href = `https://wa.me/51987654321?text=${waMessage}`;
  }
}

/**
 * ===================================================================
 * CONFIGURADOR DE WEB EN VIVO (BUILDER)
 * ===================================================================
 */
function initBuilder() {
  renderBaseModelsSelector();
  renderBuilderPaletteSelect();
  renderModulesChecklist();
  updateBuilderSummary();
}

/**
 * 1. Render Base Models Selector
 */
function renderBaseModelsSelector() {
  if (!baseModelsSelector) return;

  baseModelsSelector.innerHTML = demosData.map(demo => {
    const isSelected = state.builder.baseModel.id === demo.id ? 'active' : '';
    return `
      <div class="model-select-card ${isSelected}" data-model-id="${demo.id}">
        <div class="model-card-title">
          <span>${demo.name.split(' ')[0]}</span>
          <i data-lucide="${isSelected ? 'check-circle-2' : 'circle'}"></i>
        </div>
        <span class="model-card-cat">${demo.categoryLabel}</span>
      </div>
    `;
  }).join('');
}

/**
 * 2. Render Builder Palette Select with <optgroup> Categories
 */
function renderBuilderPaletteSelect() {
  if (!builderPaletteSelect) return;

  const validCategories = canvaPaletteCategories.filter(c => c.id !== 'all');

  builderPaletteSelect.innerHTML = validCategories.map(cat => {
    const catPalettes = canvaColorPalettes.filter(p => p.category === cat.id);
    if (!catPalettes.length) return '';

    return `
      <optgroup label="${cat.label}">
        ${catPalettes.map(pal => `
          <option value="${pal.id}" ${pal.id === state.builder.palette.id ? 'selected' : ''}>
            ${pal.name}
          </option>
        `).join('')}
      </optgroup>
    `;
  }).join('');

  updateBuilderQuickSwatches();
}

function updateBuilderQuickSwatches() {
  if (!builderQuickSwatches || !state.builder.palette) return;

  builderQuickSwatches.innerHTML = state.builder.palette.colors.map(col => `
    <div class="b-swatch" style="background-color: ${col.hex};" title="${col.name}: ${col.hex}"></div>
  `).join('');
}

/**
 * 3. Render Modules Checklist with Custom Order Badges and Reorder Controls
 */
function renderModulesChecklist() {
  if (!modulesChecklist) return;

  const activeCat = state.builder.activeModuleCategory;
  const filtered = activeCat === 'all' 
    ? tourModules 
    : tourModules.filter(m => m.category === activeCat);

  modulesChecklist.innerHTML = filtered.map(mod => {
    const isChecked = state.builder.selectedModules.includes(mod.id);
    const orderIndex = state.builder.selectedModules.indexOf(mod.id);
    const badgeClass = mod.source.includes('Recomendado') ? 'rec' : '';

    return `
      <div class="module-item-card ${isChecked ? 'checked' : ''}" data-module-id="${mod.id}">
        <input type="checkbox" class="module-checkbox" ${isChecked ? 'checked' : ''} data-mod-chk="${mod.id}">
        
        ${isChecked ? `
          <span class="module-order-badge" title="Posición en la web: #${orderIndex + 1}">
            #${orderIndex + 1}
          </span>
        ` : ''}

        <div class="module-item-content">
          <div class="module-title-row">
            <span class="module-title">${mod.name}</span>
            <span class="module-source-badge ${badgeClass}">${mod.source}</span>
          </div>
          <p class="module-desc">${mod.desc}</p>
          <span class="module-impact">✨ ${mod.impact}</span>
        </div>

        ${isChecked ? `
          <div class="module-reorder-controls">
            <button type="button" class="btn-reorder btn-reorder-up" data-reorder-up="${mod.id}" title="Subir sección en la web" ${orderIndex === 0 ? 'disabled' : ''}>
              ▲
            </button>
            <button type="button" class="btn-reorder btn-reorder-down" data-reorder-down="${mod.id}" title="Bajar sección en la web" ${orderIndex === state.builder.selectedModules.length - 1 ? 'disabled' : ''}>
              ▼
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  if (selectedModulesCount) {
    selectedModulesCount.textContent = state.builder.selectedModules.length;
  }
}

/**
 * Helper to Move a Module Up or Down in the Sequence
 */
function moveModule(modId, direction) {
  const list = state.builder.selectedModules;
  const idx = list.indexOf(modId);
  if (idx === -1) return;

  if (direction === 'up' && idx > 0) {
    const temp = list[idx];
    list[idx] = list[idx - 1];
    list[idx - 1] = temp;
    showToast(`Módulo movido a la posición #${idx}`);
  } else if (direction === 'down' && idx < list.length - 1) {
    const temp = list[idx];
    list[idx] = list[idx + 1];
    list[idx + 1] = temp;
    showToast(`Módulo movido a la posición #${idx + 2}`);
  }

  renderModulesChecklist();
  updateBuilderSummary();
}

/**
 * Themes and Mock Content for the Live Web Previewer inside the Configurator
 */
const modelPreviewThemes = {
  maxistravel: {
    brandName: "MaxisTravel Cusco",
    brandSubtitle: "Transporte & Turismo Receptivo",
    tagline: "Descubre Cusco, Machu Picchu y el Valle Sagrado",
    subtext: "Operador receptivo oficial en Cusco. Excursiones garantizadas, boletos turísticos oficiales y moderna flota de transporte privado con chofer.",
    badge: "🏔️ Top Receptivo Cusco & Machu Picchu",
    domain: "https://maxistravel-cusco.pe/",
    heroImage: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80",
    tours: [
      {
        title: "Machu Picchu Clásico en Tren Panorámico",
        badge: "Más Vendido",
        duration: "Full Day (1D)",
        price: "$160 USD",
        rating: "4.9 (180+)",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Laguna Humantay & Desayuno Buffet Andino",
        badge: "Aventura",
        duration: "Full Day (4:30 AM)",
        price: "$45 USD",
        rating: "4.8 (95+)",
        image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Montaña de 7 Colores (Vinicunca) & Valle Rojo",
        badge: "Trekking",
        duration: "Full Day",
        price: "$50 USD",
        rating: "4.9 (140+)",
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=600&q=80"
      }
    ],
    altitudeProfile: { maxMsnm: "4,630 msnm", minMsnm: "2,430 msnm", baseCity: "Cusco (3,399 msnm)" },
    fleet: [
      { model: "Mercedes Sprinter VIP (15 pax)", type: "Traslados Privados Hotel - Aeropuerto", feature: "Aire Acondicionado, WiFi y Botiquín" },
      { model: "Minivan Hyundai H1 (8 pax)", type: "Servicio Ejecutivo y Familias", feature: "Asientos reclinables y chofer bilingüe" }
    ]
  },
  sondondo: {
    brandName: "Valle del Sondondo",
    brandSubtitle: "Expediciones & Ecoturismo",
    tagline: "Cañones Milenarios, Cóndores y Tradición Andina",
    subtext: "Turismo vivencial en Ayacucho. Conecta con comunidades locales, andenes pre-incas y el majestuoso vuelo del Cóndor en Mayobamba.",
    badge: "🦅 Ecoturismo & Comunidad Viva",
    domain: "https://sondondo-expeditions.com/",
    heroImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    tours: [
      {
        title: "Avistamiento del Cóndor en Mayobamba",
        badge: "Exclusivo",
        duration: "2 Días / 1 Noche",
        price: "S/ 280 PEN",
        rating: "5.0 (64+)",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Ruta de los Andenes Vivos & Danza de Tijeras",
        badge: "Vivencial",
        duration: "Full Day",
        price: "S/ 190 PEN",
        rating: "4.9 (42+)",
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Expedición al Glaciar Apu Qarhuarazo",
        badge: "Alta Montaña",
        duration: "3 Días / 2 Noches",
        price: "S/ 390 PEN",
        rating: "4.8 (30+)",
        image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=600&q=80"
      }
    ],
    altitudeProfile: { maxMsnm: "5,112 msnm (Apu Qarhuarazo)", minMsnm: "3,200 msnm", baseCity: "Andamarca (3,400 msnm)" },
    fleet: [
      { model: "Camionetas 4x4 Todo Terreno", type: "Expedición en Trocha y Quebradas", feature: "Tracción integral y comunicación radial" },
      { model: "Minibús Turístico Local", type: "Transporte Intercomunitario", feature: "Guía local y chofer andino" }
    ]
  },
  kgoriwayra: {
    brandName: "Kgoriwayra Colca",
    brandSubtitle: "Cabalgatas & Caballo de Paso",
    tagline: "El Cañón del Colca en Caballo Peruano de Paso",
    subtext: "Rutas ecuestres exclusivas en Yanque y miradores del Cañón del Colca. Seguridad, elegancia andina y aguas termales.",
    badge: "🐎 Caballo Peruano de Paso",
    domain: "https://kgoriwayra-colca.pe/",
    heroImage: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80",
    tours: [
      {
        title: "Paseo Arqueológico en Caballo de Paso",
        badge: "Boutique",
        duration: "Half Day (3 Horas)",
        price: "$75 USD",
        rating: "5.0 (82+)",
        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Cabalgata al Mirador del Cañón & Aguas Termales",
        badge: "Aventura & Relax",
        duration: "Full Day",
        price: "$110 USD",
        rating: "4.9 (50+)",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Trek Ecuestre Yanque - Coporaque",
        badge: "Tradición",
        duration: "4 Horas",
        price: "$85 USD",
        rating: "4.9 (38+)",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80"
      }
    ],
    altitudeProfile: { maxMsnm: "3,800 msnm", minMsnm: "3,400 msnm", baseCity: "Yanque - Colca (3,420 msnm)" },
    fleet: [
      { model: "Caballos Peruanos de Paso Registrados", type: "Paseo Suave y Confortable", feature: "Monturas de cuero y aperos tradicionales" },
      { model: "Van Turística de Recojo en Hoteles", type: "Chivay - Yanque - Coporaque", feature: "Servicio puntual puerta a puerta" }
    ]
  },
  toursgotravel: {
    brandName: "GoTravel",
    brandSubtitle: "Experiencias VIP & Yates",
    tagline: "Navegación Privada, Catamaranes y Experiencias VIP",
    subtext: "Rutas exclusivas en mar y costa. Alquiler de yates privados con tripulación, barra libre y snorkel en arrecifes cristalinos.",
    badge: "⛵ Yates & Luxury Charters",
    domain: "https://gotravel-experience.com/",
    heroImage: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=1200&q=80",
    tours: [
      {
        title: "Alquiler Privado de Yate 42ft al Atardecer",
        badge: "VIP Luxury",
        duration: "4 Horas",
        price: "$650 USD",
        rating: "5.0 (46+)",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Catamarán & Snorkel en Arrecifes Vivos",
        badge: "Todo Incluido",
        duration: "5 Horas",
        price: "$120 USD",
        rating: "4.9 (78+)",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Expedición en Lancha Rápida & Playas Vírgenes",
        badge: "Exclusivo",
        duration: "Full Day",
        price: "$190 USD",
        rating: "4.8 (35+)",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80"
      }
    ],
    altitudeProfile: { maxMsnm: "Nivel del mar (0 msnm)", minMsnm: "0 msnm", baseCity: "Marina & Puerto Turístico" },
    fleet: [
      { model: "Yate Sea Ray 42ft Sundancer", type: "Capacidad: 12 pasajeros", feature: "Camarotes, tripulación bilingüe y barra libre" },
      { model: "Catamarán Lagoon 40ft", type: "Eventos y Sunset Charters", feature: "Redes proa, sonido Bluetooth y paddleboards" }
    ]
  }
};

/**
 * 4. Generate Realistic Live Web HTML dynamically following the User's Exact Module Order
 */
function generateLiveWebHTML(baseModel, palette, selectedModules) {
  const modelTheme = modelPreviewThemes[baseModel.id] || modelPreviewThemes.maxistravel;
  const primaryCol = palette.colors.find(c => c.isPrimary)?.hex || palette.colors[0].hex;
  const accentCol = palette.colors.find(c => !c.isPrimary)?.hex || '#D4A853';
  const secondaryCol = palette.colors[2]?.hex || '#2D4F3E';

  const hasModule = (id) => selectedModules.includes(id);

  const moduleRenderers = {
    'hero-video': () => `
      <section class="w-hero" style="background-image: url('${modelTheme.heroImage}');">
        <div class="w-hero-overlay" style="background: linear-gradient(135deg, ${primaryCol}E6 0%, rgba(20, 15, 12, 0.7) 60%, rgba(0,0,0,0.88) 100%);"></div>
        <div class="w-hero-content">
          <span class="w-hero-badge" style="background-color: ${accentCol}; color: #1C1510;">
            ${modelTheme.badge}
          </span>
          <h1 class="w-hero-title">${modelTheme.tagline}</h1>
          <p class="w-hero-sub">${modelTheme.subtext}</p>
          <div class="w-hero-actions">
            <span class="w-btn-primary" style="background-color: ${accentCol}; color: #1D1510;">
              Ver Todos los Tours
            </span>
            <span class="w-btn-outline">
              Cotizar con un Asesor
            </span>
          </div>
        </div>
      </section>
    `,

    'catalogo-filtros': () => `
      <div class="w-search-bar">
        <div class="w-input-field">
          <i data-lucide="map-pin" style="width: 12px; height: 12px; color: ${primaryCol};"></i>
          <span>Destino o Región</span>
        </div>
        <div class="w-input-field">
          <i data-lucide="calendar" style="width: 12px; height: 12px; color: ${primaryCol};"></i>
          <span>Cualquier Fecha</span>
        </div>
        <div class="w-input-field">
          <i data-lucide="users" style="width: 12px; height: 12px; color: ${primaryCol};"></i>
          <span>2 Pasajeros</span>
        </div>
        <button class="w-btn-search" style="background-color: ${primaryCol};">
          Buscar
        </button>
      </div>

      <section class="w-section">
        <div class="w-sec-header">
          <span class="w-sec-tag" style="color: ${primaryCol};">Experiencias Destacadas</span>
          <h2 class="w-sec-title">Circuitos & Excursiones Populares</h2>
        </div>
        <div class="w-tours-grid">
          ${modelTheme.tours.map(tour => `
            <div class="w-tour-card">
              <div class="w-tour-thumb" style="background-image: url('${tour.image}');">
                <span class="w-tour-badge" style="background-color: ${primaryCol};">${tour.badge}</span>
                <span class="w-tour-duration">${tour.duration}</span>
              </div>
              <div class="w-tour-body">
                <h3 class="w-tour-title">${tour.title}</h3>
                <div class="w-tour-footer">
                  <div>
                    <span class="w-tour-price" style="color: ${primaryCol};">${tour.price}</span>
                  </div>
                  <span class="w-tour-rating">★ ${tour.rating}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `,

    'calendario-salidas': () => `
      <div style="padding: 10px 14px 0;">
        <div class="w-urgency-banner">
          <i data-lucide="alert-circle" style="width: 14px; height: 14px; flex-shrink: 0;"></i>
          <span>Salidas confirmadas este fin de semana: ¡Últimos 3 cupos disponibles en tarifa especial!</span>
        </div>
      </div>
    `,

    'itinerario-diario': () => `
      <section class="w-section">
        <div class="w-sec-header">
          <span class="w-sec-tag" style="color: ${primaryCol};">Transparencia Total</span>
          <h2 class="w-sec-title">Itinerario Detallado Día por Día</h2>
        </div>
        <div class="w-itinerary-module">
          <div class="w-itin-step">
            <div class="w-itin-dot" style="background-color: ${primaryCol};">1</div>
            <div class="w-itin-content">
              <strong>Día 1: Recojo puntual, traslado al hotel y aclimatación</strong>
              <p>Recepción con mate de coca tradicional y charla informativa sobre la ruta.</p>
            </div>
          </div>
          <div class="w-itin-step">
            <div class="w-itin-dot" style="background-color: ${primaryCol};">2</div>
            <div class="w-itin-content">
              <strong>Día 2: Excursión principal guiada con boletos de ingreso</strong>
              <p>Visita a sitios arqueológicos, miradores naturales y almuerzo buffet regional.</p>
            </div>
          </div>
          <div class="w-inclusions-strip">
            <span class="w-inc-pill">✓ Transporte Turístico A/C</span>
            <span class="w-inc-pill">✓ Guía Oficial Bilingüe</span>
            <span class="w-inc-pill">✓ Entradas Oficiales</span>
            <span class="w-inc-pill" style="background: #FFF3E0; color: #E65100;">✗ Propinas voluntarias</span>
          </div>
        </div>
      </section>
    `,

    'cotizador-medida': () => `
      <section class="w-section">
        <div class="w-estimator-card" style="border-color: ${accentCol};">
          <span class="w-sec-tag" style="color: ${primaryCol};">Personalización Total</span>
          <h3 class="w-sec-title" style="font-size: 13.5px;">Cotiza tu Viaje Soñado a Medida</h3>
          <p style="font-size: 10.5px; color: #6A5C4F;">Elige tus preferencias y recibe la propuesta en minutos:</p>
          <div class="w-est-steps">
            <span class="w-est-chip active" style="background-color: ${primaryCol}; border-color: ${primaryCol};">1. Rutas Principales</span>
            <span class="w-est-chip">2. Hotel 3★ / 4★</span>
            <span class="w-est-chip">3. Familia (4 pax)</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
            <span style="font-size: 10.5px; font-weight: 700; color: ${primaryCol};">Cotización inmediata</span>
            <span class="w-btn-primary" style="background-color: ${primaryCol}; color: #FFFFFF; padding: 4px 10px; font-size: 10px;">
              Calcular por WhatsApp ➔
            </span>
          </div>
        </div>
      </section>
    `,

    'flota-transporte': () => `
      <section class="w-section">
        <div class="w-sec-header">
          <span class="w-sec-tag" style="color: ${primaryCol};">Movilidad Privada</span>
          <h2 class="w-sec-title">Nuestra Flota Turística Confortable</h2>
        </div>
        <div class="w-fleet-grid">
          ${modelTheme.fleet.map(veh => `
            <div class="w-fleet-card">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <i data-lucide="truck" style="width: 14px; height: 14px; color: ${primaryCol};"></i>
                <span class="w-fleet-title">${veh.model}</span>
              </div>
              <p style="font-size: 10.5px; color: #5B4E41;">${veh.type}</p>
              <span class="w-fleet-feat" style="color: ${primaryCol};">${veh.feature}</span>
            </div>
          `).join('')}
        </div>
      </section>
    `,

    'altimetria-dificultad': () => `
      <section class="w-section">
        <div class="w-altimetry-box" style="border-left-color: ${primaryCol};">
          <div>
            <span style="font-size: 10px; font-weight: 800; color: ${primaryCol}; text-transform: uppercase;">
              Ficha Técnica de Altitud
            </span>
            <strong style="font-size: 12px; display: block; color: #201712;">
              ${modelTheme.altitudeProfile.baseCity} ➔ Máx. ${modelTheme.altitudeProfile.maxMsnm}
            </strong>
            <span style="font-size: 10.5px; color: #5B4E41;">
              Monitoreo constante con oxímetro y balón de oxígeno medicinal en cada vehículo.
            </span>
          </div>
          <div class="w-alt-val" style="color: ${primaryCol};">
            ${modelTheme.altitudeProfile.maxMsnm.split(' ')[0]}
          </div>
        </div>
      </section>
    `,

    'fichas-actividad': () => `
      <section class="w-section">
        <div style="background: #FFFFFF; padding: 12px; border-radius: var(--radius-md); border: 1px solid rgba(0,0,0,0.06); display: flex; align-items: center; gap: 10px;">
          <i data-lucide="shield-check" style="width: 22px; height: 22px; color: #10B981; flex-shrink: 0;"></i>
          <div>
            <strong style="font-size: 11.5px; color: #201712; display: block;">Equipamiento Homologado & Protocolos de Seguridad</strong>
            <span style="font-size: 10.5px; color: #6A5B4D;">Guías federados, botiquín de primeros auxilios y cascos de protección certificados.</span>
          </div>
        </div>
      </section>
    `,

    'pasarela-pagos': () => `
      <div style="padding: 10px 14px;">
        <div class="w-payments-bar">
          <div style="display: flex; align-items: center; gap: 6px;">
            <i data-lucide="lock" style="width: 12px; height: 12px; color: #10B981;"></i>
            <span><strong>Reserva Segura:</strong> Tarjeta Crédito/Débito en Soles y Dólares</span>
          </div>
          <div class="w-pay-pills" style="color: ${primaryCol};">
            <span>VISA</span> • <span>MC</span> • <span>CULQI</span> • <span>NIUBIZ</span> • <span>PAYPAL</span>
          </div>
        </div>
      </div>
    `,

    'testimonios-google': () => `
      <section class="w-section">
        <div class="w-reviews-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="w-rev-stars">★★★★★ 4.9 / 5</span>
            <span style="font-size: 10px; color: #6D5C4E;">180+ Reseñas Verificadas</span>
          </div>
          <p class="w-rev-quote">
            "Excelente organización de principio a fin. El transporte fue muy puntual y el guía resolvió todas nuestras dudas con amabilidad."
          </p>
          <div style="margin-top: 6px; font-size: 10px; font-weight: 700; color: ${primaryCol};">
            — Familia Mendoza R. (Turistas Nacionales)
          </div>
        </div>
      </section>
    `,

    'sellos-formalidad': () => `
      <div style="padding: 10px 14px;">
        <div class="w-trust-strip">
          <span>🛡️ MINCETUR Oficial</span>
          <span>🏛️ DIRCETUR</span>
          <span>✨ Safe Travels</span>
          <span>🇵🇪 Marca Perú</span>
        </div>
      </div>
    `,

    'blog-guias-seo': () => `
      <div style="padding: 10px 14px;">
        <div style="background: #FFFFFF; padding: 12px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: space-between;">
          <div>
            <strong style="font-size: 11px; color: #201712; display: block;">📰 Guía de Viaje & Consejos de Ruta</strong>
            <span style="font-size: 10px; color: #6B5B4E;">Consejos clave para evitar el soroche y qué llevar a la montaña.</span>
          </div>
          <span style="font-size: 10px; font-weight: 700; color: ${primaryCol};">Leer Artículos ➔</span>
        </div>
      </div>
    `,

    'descarga-pdf': () => `
      <div style="padding: 10px 14px;">
        <div style="background: #FFFFFF; padding: 12px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: space-between;">
          <div>
            <strong style="font-size: 11px; color: #201712; display: block;">📄 Ficha de Itinerario PDF Imprimible</strong>
            <span style="font-size: 10px; color: #6B5B4E;">Descarga el catálogo completo con tarifas y políticas de cancelación.</span>
          </div>
          <i data-lucide="download" style="width: 16px; height: 16px; color: ${primaryCol};"></i>
        </div>
      </div>
    `,

    'multidioma': () => `
      <div style="padding: 6px 14px; background: rgba(0,0,0,0.02); display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(0,0,0,0.05); font-size: 10.5px;">
        <span style="color: #6B5B4E;"><i data-lucide="globe" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i> Idiomas disponibles:</span>
        <span style="font-weight: 700; color: ${primaryCol};">Español (ES) • English (EN) • Português (PT)</span>
      </div>
    `
  };

  // Render modules in the EXACT user-configured order!
  const renderedSections = selectedModules
    .map(modId => {
      const renderFn = moduleRenderers[modId];
      return renderFn ? renderFn() : '';
    })
    .filter(Boolean)
    .join('\n');

  return `
    <!-- Top Notification Bar -->
    <div class="w-topbar" style="background-color: ${primaryCol};">
      <div class="w-topbar-left">
        <span><i data-lucide="phone" style="width: 10px; height: 10px; display: inline-block; vertical-align: middle;"></i> +51 987 654 321</span>
        <span>•</span>
        <span>Atención al Viajero 24/7</span>
      </div>
      <div class="w-topbar-right">
        ${hasModule('multidioma') ? `
          <span class="w-lang-chip">🌐 ES • EN • PT</span>
        ` : ''}
        <span>USD / PEN</span>
      </div>
    </div>

    <!-- Navbar -->
    <header class="w-navbar">
      <div class="w-brand">
        <div class="w-brand-icon" style="background-color: ${primaryCol};">
          <i data-lucide="sun" style="width: 16px; height: 16px;"></i>
        </div>
        <div class="w-brand-text">
          <span class="w-brand-title">${modelTheme.brandName}</span>
          <span class="w-brand-sub" style="color: ${primaryCol};">${modelTheme.brandSubtitle}</span>
        </div>
      </div>
      <nav class="w-nav-menu">
        <span>Inicio</span>
        <span>Tours</span>
        <span>Nosotros</span>
        <span>Contacto</span>
      </nav>
      <div class="w-nav-cta">
        <span class="w-btn-whatsapp-header">
          <i data-lucide="message-circle" style="width: 12px; height: 12px;"></i>
          <span>WhatsApp</span>
        </span>
      </div>
    </header>

    <!-- Ordered Sections -->
    <main class="w-content-sections">
      ${renderedSections}
    </main>

    <!-- Floating WhatsApp Button -->
    ${hasModule('whatsapp-directo') ? `
      <div class="w-whatsapp-floating" title="Chatear con un asesor">
        <i data-lucide="message-circle" style="width: 14px; height: 14px;"></i>
        <span>¿Dudas? WhatsApp</span>
      </div>
    ` : ''}

    <!-- Mini Web Footer -->
    <footer class="w-footer">
      <div>
        <strong>${modelTheme.brandName}</strong> • Turismo en Perú
      </div>
      <div>
        <span>Desarrollado por Molinaz Dev</span>
      </div>
    </footer>
  `;
}

/**
 * 4. Render Realistic Live Web Preview inside the Configurator and Fullscreen Modal
 */
function renderLiveWebPreview(baseModel, palette, selectedModules) {
  if (!builderLiveWeb) return;

  const primaryCol = palette.colors.find(c => c.isPrimary)?.hex || palette.colors[0].hex;
  const accentCol = palette.colors.find(c => !c.isPrimary)?.hex || '#D4A853';
  const secondaryCol = palette.colors[2]?.hex || '#2D4F3E';

  builderLiveWeb.style.setProperty('--web-primary', primaryCol);
  builderLiveWeb.style.setProperty('--web-accent', accentCol);
  builderLiveWeb.style.setProperty('--web-secondary', secondaryCol);

  const html = generateLiveWebHTML(baseModel, palette, selectedModules);
  builderLiveWeb.innerHTML = html;

  // Sync fullscreen preview if open
  if (fullscreenPreviewModal && fullscreenPreviewModal.open && fsLiveWeb) {
    fsLiveWeb.style.setProperty('--web-primary', primaryCol);
    fsLiveWeb.style.setProperty('--web-accent', accentCol);
    fsLiveWeb.style.setProperty('--web-secondary', secondaryCol);
    fsLiveWeb.innerHTML = html;
  }

  refreshLucideIcons();
}

/**
 * 5. Update Builder Summary, Schematic Mockup, Live Web Preview & WhatsApp Message
 */
function updateBuilderSummary() {
  const { baseModel, palette, selectedModules, previewMode, previewDevice } = state.builder;

  if (summaryAgencyModel) {
    summaryAgencyModel.textContent = `Modelo: ${baseModel.name}`;
  }

  if (summaryPaletteName && summaryDot && palette) {
    summaryPaletteName.textContent = palette.name;
    const primaryHex = palette.colors.find(c => c.isPrimary)?.hex || palette.colors[0].hex;
    summaryDot.style.backgroundColor = primaryHex;
  }

  if (selectedModulesCount) {
    selectedModulesCount.textContent = selectedModules.length;
  }

  const modelTheme = modelPreviewThemes[baseModel.id] || modelPreviewThemes.maxistravel;
  if (schematicUrl) {
    schematicUrl.textContent = modelTheme.domain;
  }

  // Update Viewport Mode & Visibility
  if (builderViewportContainer) {
    builderViewportContainer.className = `builder-viewport-container ${previewDevice}`;
  }

  if (previewMode === 'web') {
    if (builderLiveWeb) builderLiveWeb.classList.remove('hidden');
    if (schematicBody) schematicBody.classList.add('hidden');
    renderLiveWebPreview(baseModel, palette, selectedModules);
  } else {
    if (builderLiveWeb) builderLiveWeb.classList.add('hidden');
    if (schematicBody) schematicBody.classList.remove('hidden');
  }

  // Calculate estimated delivery timeframe
  let daysText = "10 a 14 Días Hábiles";
  if (selectedModules.length >= 7 && selectedModules.length <= 10) {
    daysText = "12 a 16 Días Hábiles";
  } else if (selectedModules.length > 10) {
    daysText = "16 a 20 Días Hábiles";
  }
  if (estimatedDays) {
    estimatedDays.textContent = daysText;
  }

  // Render Schematic Mockup following the user's custom module order!
  if (schematicBody && palette) {
    const primaryCol = palette.colors.find(c => c.isPrimary)?.hex || '#1B3527';
    const accentCol = palette.colors.find(c => !c.isPrimary)?.hex || '#D4A853';

    const schematicBlocks = selectedModules.map(modId => {
      const def = tourModules.find(m => m.id === modId);
      if (!def) return '';

      switch (modId) {
        case 'hero-video':
          return `
            <div class="schematic-block" style="background: linear-gradient(135deg, ${primaryCol} 0%, rgba(200,90,50,0.6) 100%); color: #FFFFFF; height: 50px; justify-content: center; flex-direction: column; text-align: center;">
              <span style="font-size: 11px;">HERO: ${baseModel.name}</span>
              <span style="font-size: 9px; color: ${accentCol};">Llamado a la Acción Principal</span>
            </div>`;
        case 'catalogo-filtros':
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.06); color: #FFFFFF;">
              <span>CATÁLOGO DE TOURS CON FILTROS</span>
              <span style="font-size: 9px; color: ${accentCol};">Buscador Activo</span>
            </div>`;
        case 'calendario-salidas':
          return `
            <div class="schematic-block" style="background: rgba(234,88,12,0.18); border-color: #EA580C; color: #FDBA74;">
              <span>CALENDARIO DE SALIDAS CONFIRMADAS</span>
              <span style="font-size: 9px;">Cupos Urgentes</span>
            </div>`;
        case 'itinerario-diario':
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.04); color: #FFFFFF;">
              <span>FICHAS DE ITINERARIO DÍA POR DÍA</span>
              <span style="font-size: 9px; opacity: 0.7;">Acordeones</span>
            </div>`;
        case 'cotizador-medida':
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.08); color: #FFFFFF;">
              <span>COTIZADOR DE PAQUETES A MEDIDA</span>
              <span style="font-size: 9px; color: #10B981;">Multi-paso</span>
            </div>`;
        case 'flota-transporte':
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.07); border-color: ${accentCol}; color: #FFFFFF;">
              <span>MÓDULO DE TRANSPORTE TURÍSTICO</span>
              <span style="font-size: 9px; color: ${accentCol};">Traslados Privados</span>
            </div>`;
        case 'altimetria-dificultad':
          return `
            <div class="schematic-block" style="background: rgba(200,90,50,0.2); border-color: #C85A32; color: #F8B49B;">
              <span>FICHA DE ALTIMETRÍA & SOROCHE</span>
              <span style="font-size: 9px;">msnm</span>
            </div>`;
        case 'fichas-actividad':
          return `
            <div class="schematic-block" style="background: rgba(16,185,129,0.15); border-color: #10B981; color: #6EE7B7;">
              <span>FICHAS DE ACTIVIDAD & SEGURIDAD</span>
              <span style="font-size: 9px;">Protocolos</span>
            </div>`;
        case 'pasarela-pagos':
          return `
            <div class="schematic-block" style="background: rgba(16,185,129,0.2); border-color: #10B981; color: #10B981;">
              <span>PASARELA DE PAGOS (CULQI/NIUBIZ/STRIPE)</span>
              <span style="font-size: 9px;">Soles & USD</span>
            </div>`;
        case 'testimonios-google':
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.04); color: #FFFFFF;">
              <span>RESEÑAS TRIPADVISOR / GOOGLE</span>
              <span style="font-size: 9px; color: ${accentCol};">★★★★★</span>
            </div>`;
        case 'sellos-formalidad':
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.05); color: #E2E8F0;">
              <span>SELLOS MINCETUR / DIRCETUR</span>
              <span style="font-size: 9px; color: #10B981;">Formalidad</span>
            </div>`;
        case 'blog-guias-seo':
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.04); color: #FFFFFF;">
              <span>BLOG DE RUTAS & GUÍAS SEO</span>
              <span style="font-size: 9px; opacity: 0.7;">Google SEO</span>
            </div>`;
        case 'descarga-pdf':
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.06); color: #FFFFFF;">
              <span>FICHA ITINERARIO EN PDF</span>
              <span style="font-size: 9px; color: ${accentCol};">Descargable</span>
            </div>`;
        case 'multidioma':
          return `
            <div class="schematic-block" style="background: rgba(59,130,246,0.15); border-color: #3B82F6; color: #93C5FD;">
              <span>SOPORTE MULTILINGÜE NATIVO</span>
              <span style="font-size: 9px;">ES • EN • PT</span>
            </div>`;
        case 'whatsapp-directo':
          return `
            <div class="schematic-block" style="background: #25D366; color: #FFFFFF; justify-content: center; font-size: 10px;">
              <span>BOTÓN FLOTANTE WHATSAPP 24/7 ACTIVO</span>
            </div>`;
        default:
          return `
            <div class="schematic-block" style="background: rgba(255,255,255,0.05); color: #FFFFFF;">
              <span>${def.name.toUpperCase()}</span>
            </div>`;
      }
    }).join('');

    schematicBody.innerHTML = `
      <div class="schematic-block" style="background-color: ${primaryCol}; color: #FFFFFF;">
        <span>NAVBAR & LOGO: ${modelTheme.brandName}</span>
        <span style="font-size: 10px; opacity: 0.85;">Menú + WhatsApp</span>
      </div>
      ${schematicBlocks}
      <div class="schematic-block" style="background-color: #120D0A; color: #8C7F72; justify-content: center; font-size: 9px;">
        <span>FOOTER & CRÉDITOS: ${modelTheme.brandName}</span>
      </div>
    `;
  }

  // Build WhatsApp Message with Full Custom Spec in Exact User Sequence!
  if (sendConfigWhatsappBtn) {
    const moduleNames = selectedModules
      .map((id, idx) => {
        const mod = tourModules.find(m => m.id === id);
        return mod ? `${idx + 1}. ${mod.name}` : null;
      })
      .filter(Boolean)
      .join('%0A');

    const msg = 
      `*PROPUESTA WEB TURISMO - MOLINAZ DEV*%0A%0A` +
      `*Modelo Base Elegido:* ${baseModel.name}%0A` +
      `*Paleta de Colores:* ${palette.name}%0A` +
      `*Módulos Seleccionados en Orden (${selectedModules.length}):*%0A${moduleNames}%0A%0A` +
      `*Tiempo Estimado:* ${daysText}%0A` +
      `*Metodología:* Feedback continuo incluido hasta aprobación final.%0A%0A` +
      `Por favor cotizar esta especificación para mi agencia de viajes.`;

    sendConfigWhatsappBtn.href = `https://wa.me/51987654321?text=${msg}`;
    if (fsWhatsappBtn) {
      fsWhatsappBtn.href = sendConfigWhatsappBtn.href;
    }
  }

  // Live update fullscreen modal content if currently open
  if (fullscreenPreviewModal && fullscreenPreviewModal.open && fsLiveWeb) {
    fsLiveWeb.style.setProperty('--web-primary', primaryCol);
    fsLiveWeb.style.setProperty('--web-accent', accentCol);
    fsLiveWeb.style.setProperty('--web-secondary', secondaryCol);
    fsLiveWeb.innerHTML = generateLiveWebHTML(baseModel, palette, selectedModules);
  }
}

/**
 * Open Fullscreen Preview Modal (Google Meet Presentation Mode)
 */
function openFullscreenPreviewModal() {
  if (!fullscreenPreviewModal) return;

  const { baseModel, palette, selectedModules, fullscreenDevice } = state.builder;
  const modelTheme = modelPreviewThemes[baseModel.id] || modelPreviewThemes.maxistravel;

  if (fsModalTitle) fsModalTitle.textContent = `${baseModel.name} (Simulación en Vivo)`;
  if (fsDomainPill) fsDomainPill.textContent = modelTheme.domain;
  if (fsDomainLink) fsDomainLink.href = modelTheme.domain;

  const primaryCol = palette.colors.find(c => c.isPrimary)?.hex || palette.colors[0].hex;
  const accentCol = palette.colors.find(c => !c.isPrimary)?.hex || '#D4A853';
  const secondaryCol = palette.colors[2]?.hex || '#2D4F3E';

  if (fsLiveWeb) {
    fsLiveWeb.style.setProperty('--web-primary', primaryCol);
    fsLiveWeb.style.setProperty('--web-accent', accentCol);
    fsLiveWeb.style.setProperty('--web-secondary', secondaryCol);
    fsLiveWeb.innerHTML = generateLiveWebHTML(baseModel, palette, selectedModules);
  }

  if (fsViewportContainer) {
    fsViewportContainer.className = `fs-viewport-container ${fullscreenDevice || 'desktop'}`;
  }

  if (fsDeviceSwitcher) {
    fsDeviceSwitcher.querySelectorAll('.switcher-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.device === (fullscreenDevice || 'desktop'));
    });
  }

  if (fsWhatsappBtn && sendConfigWhatsappBtn) {
    fsWhatsappBtn.href = sendConfigWhatsappBtn.href;
  }

  fullscreenPreviewModal.showModal();
  refreshLucideIcons();
  showToast("Modo Pantalla Completa activado para Google Meet.");
}

/**
 * Close Fullscreen Preview Modal
 */
function closeFullscreenPreviewModal() {
  if (fullscreenPreviewModal) {
    fullscreenPreviewModal.close();
  }
}

/**
 * Set Fullscreen Device Viewport (desktop, tablet, mobile)
 */
function setFullscreenDeviceMode(device) {
  state.builder.fullscreenDevice = device;
  if (fsViewportContainer) {
    fsViewportContainer.className = `fs-viewport-container ${device}`;
  }
}

/**
 * Toast Notification Helper
 */
function showToast(message) {
  if (!toastNotification || !toastMessage) return;
  toastMessage.textContent = message;
  toastNotification.classList.add('show');
  setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 2500);
}

/**
 * Setup Event Handlers
 */
function setupEventListeners() {
  // Category tabs click
  categoryTabsContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.category-tab');
    if (!tab) return;

    state.activeCategory = tab.dataset.category;
    renderCategories();
    renderDemos();
  });

  // Search input typing
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
    renderDemos();
  });

  // Clear search
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderDemos();
    searchInput.focus();
  });

  // Reset filters button
  resetFiltersBtn.addEventListener('click', () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    renderCategories();
    renderDemos();
  });

  // Accordion toggle & Preview triggers inside Demos Grid
  demosGrid.addEventListener('click', (e) => {
    const accordionBtn = e.target.closest('.pitch-accordion-trigger');
    if (accordionBtn) {
      const accordion = accordionBtn.closest('.pitch-accordion');
      accordion.classList.toggle('open');
      return;
    }

    const previewBtn = e.target.closest('[data-preview-id]');
    if (previewBtn) {
      const demoId = previewBtn.dataset.previewId;
      openDeviceModal(demoId);
    }
  });

  // Palette Category Tabs Filter (7 categories)
  if (paletteCategoryTabs) {
    paletteCategoryTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.palette-cat-btn');
      if (!btn) return;

      document.querySelectorAll('.palette-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activePaletteCategory = btn.dataset.palCat;
      renderPalettes();
    });
  }

  // Palettes Grid events (selection and copy)
  if (palettesGrid) {
    palettesGrid.addEventListener('click', (e) => {
      const hexPill = e.target.closest('[data-copy-hex]');
      if (hexPill) {
        const hex = hexPill.dataset.copyHex;
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`¡Color ${hex} copiado al portapapeles!`);
        });
        return;
      }

      const copyPaletteBtn = e.target.closest('[data-copy-palette]');
      if (copyPaletteBtn) {
        const palId = copyPaletteBtn.dataset.copyPalette;
        const pal = canvaColorPalettes.find(p => p.id === palId);
        if (pal) {
          const hexList = pal.colors.map(c => `${c.name}: ${c.hex}`).join(' | ');
          navigator.clipboard.writeText(hexList).then(() => {
            showToast(`¡5 Colores de "${pal.name}" copiados!`);
          });
        }
        return;
      }

      const card = e.target.closest('.palette-card');
      if (card) {
        const palId = card.dataset.paletteId;
        const pal = canvaColorPalettes.find(p => p.id === palId);
        if (pal) {
          state.selectedPalette = pal;
          state.builder.palette = pal;
          document.querySelectorAll('.palette-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          updatePalettePreviewBox();
          renderBuilderPaletteSelect();
          updateBuilderSummary();
          showToast(`Seleccionaste: ${pal.name}`);
        }
      }
    });
  }

  // Copy current selected palette from preview banner
  if (copyCurrentPaletteBtn) {
    copyCurrentPaletteBtn.addEventListener('click', () => {
      if (!state.selectedPalette) return;
      const pal = state.selectedPalette;
      const hexList = pal.colors.map(c => `${c.name}: ${c.hex}`).join(' | ');
      navigator.clipboard.writeText(hexList).then(() => {
        showToast(`¡Paleta "${pal.name}" copiada al portapapeles!`);
      });
    });
  }

  // ===================================================================
  // BUILDER EVENT HANDLERS
  // ===================================================================

  // Model selection
  if (baseModelsSelector) {
    baseModelsSelector.addEventListener('click', (e) => {
      const card = e.target.closest('.model-select-card');
      if (!card) return;

      const modelId = card.dataset.modelId;
      const model = demosData.find(d => d.id === modelId);
      if (model) {
        state.builder.baseModel = model;
        renderBaseModelsSelector();
        updateBuilderSummary();
        refreshLucideIcons();
        showToast(`Modelo base: ${model.name}`);
      }
    });
  }

  // Palette select change
  if (builderPaletteSelect) {
    builderPaletteSelect.addEventListener('change', (e) => {
      const palId = e.target.value;
      const pal = canvaColorPalettes.find(p => p.id === palId);
      if (pal) {
        state.builder.palette = pal;
        state.selectedPalette = pal;
        updateBuilderQuickSwatches();
        updateBuilderSummary();
        document.querySelectorAll('.palette-card').forEach(c => {
          c.classList.toggle('active', c.dataset.paletteId === pal.id);
        });
        updatePalettePreviewBox();
        showToast(`Paleta aplicada: ${pal.name}`);
      }
    });
  }

  // Module Category Filter Tabs
  if (moduleCategoryTabs) {
    moduleCategoryTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.m-tab');
      if (!tab) return;

      document.querySelectorAll('.m-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.builder.activeModuleCategory = tab.dataset.modCat;
      renderModulesChecklist();
    });
  }

  // Module Checklist Toggle & Reordering
  if (modulesChecklist) {
    modulesChecklist.addEventListener('click', (e) => {
      // 1. Reorder UP button click
      const btnUp = e.target.closest('[data-reorder-up]');
      if (btnUp) {
        e.stopPropagation();
        const modId = btnUp.dataset.reorderUp;
        moveModule(modId, 'up');
        return;
      }

      // 2. Reorder DOWN button click
      const btnDown = e.target.closest('[data-reorder-down]');
      if (btnDown) {
        e.stopPropagation();
        const modId = btnDown.dataset.reorderDown;
        moveModule(modId, 'down');
        return;
      }

      // 3. Card click (toggle module inclusion)
      const card = e.target.closest('.module-item-card');
      if (!card) return;

      const modId = card.dataset.moduleId;
      const isChecked = state.builder.selectedModules.includes(modId);

      if (isChecked) {
        state.builder.selectedModules = state.builder.selectedModules.filter(id => id !== modId);
      } else {
        state.builder.selectedModules.push(modId);
      }

      renderModulesChecklist();
      updateBuilderSummary();
    });
  }

  // Preview Mode Tabs (Web Real vs Esquema de Módulos)
  if (previewModeTabs) {
    previewModeTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.p-tab');
      if (!btn) return;

      document.querySelectorAll('.p-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.builder.previewMode = btn.dataset.previewMode;
      updateBuilderSummary();
      showToast(state.builder.previewMode === 'web' ? 'Vista: Previsualización Web Real' : 'Vista: Esquema de Arquitectura');
    });
  }

  // Preview Device Toggle (Escritorio vs Celular)
  if (previewDeviceToggle) {
    previewDeviceToggle.addEventListener('click', (e) => {
      const btn = e.target.closest('.p-dev-btn');
      if (!btn) return;

      document.querySelectorAll('.p-dev-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.builder.previewDevice = btn.dataset.device;
      updateBuilderSummary();
      showToast(state.builder.previewDevice === 'desktop' ? 'Simulador: Pantalla de Escritorio' : 'Simulador: Vista Móvil Celular');
    });
  }

  // Open Fullscreen Preview Modal
  if (openFullscreenPreviewBtn) {
    openFullscreenPreviewBtn.addEventListener('click', () => {
      openFullscreenPreviewModal();
    });
  }

  // Close Fullscreen Preview Modal
  if (closeFullscreenBtn) {
    closeFullscreenBtn.addEventListener('click', () => {
      closeFullscreenPreviewModal();
    });
  }

  if (fullscreenPreviewModal) {
    fullscreenPreviewModal.addEventListener('click', (e) => {
      if (e.target === fullscreenPreviewModal) {
        closeFullscreenPreviewModal();
      }
    });
  }

  // Fullscreen Device Switcher
  if (fsDeviceSwitcher) {
    fsDeviceSwitcher.addEventListener('click', (e) => {
      const btn = e.target.closest('.switcher-btn');
      if (!btn) return;

      fsDeviceSwitcher.querySelectorAll('.switcher-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const dev = btn.dataset.device;
      setFullscreenDeviceMode(dev);
    });
  }

  // Reset Builder Config
  if (resetConfigBtn) {
    resetConfigBtn.addEventListener('click', () => {
      state.builder.baseModel = demosData[0];
      state.builder.palette = canvaColorPalettes[0];
      state.builder.selectedModules = tourModules.filter(m => m.defaultChecked).map(m => m.id);
      state.builder.activeModuleCategory = 'all';
      state.builder.previewMode = 'web';
      state.builder.previewDevice = 'desktop';

      if (previewModeTabs) {
        document.querySelectorAll('.p-tab').forEach(b => b.classList.toggle('active', b.dataset.previewMode === 'web'));
      }
      if (previewDeviceToggle) {
        document.querySelectorAll('.p-dev-btn').forEach(b => b.classList.toggle('active', b.dataset.device === 'desktop'));
      }

      renderBaseModelsSelector();
      renderBuilderPaletteSelect();
      renderModulesChecklist();
      updateBuilderSummary();
      refreshLucideIcons();
      showToast("Configurador restablecido a valores iniciales.");
    });
  }

  // Device Switcher buttons
  switcherButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switcherButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const device = btn.dataset.device;
      setDeviceMode(device);
    });
  });

  // Close Device Modal
  closeModalBtn.addEventListener('click', closeDeviceModal);
  deviceModal.addEventListener('click', (e) => {
    if (e.target === deviceModal) {
      closeDeviceModal();
    }
  });

  // Keyboard escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (deviceModal && deviceModal.open) closeDeviceModal();
      if (salesGuideModal && salesGuideModal.open) closeSalesGuideModal();
      if (fullscreenPreviewModal && fullscreenPreviewModal.open) closeFullscreenPreviewModal();
    }
  });

  // Sales Guide Modal triggers
  openSalesGuideBtn.addEventListener('click', () => {
    salesGuideModal.showModal();
    refreshLucideIcons();
  });

  closeSalesGuideBtn.addEventListener('click', closeSalesGuideModal);
  gotItBtn.addEventListener('click', closeSalesGuideModal);
  salesGuideModal.addEventListener('click', (e) => {
    if (e.target === salesGuideModal) {
      closeSalesGuideModal();
    }
  });

  // Iframe load handler to hide spinner
  previewIframe.addEventListener('load', () => {
    iframeLoader.classList.add('hidden');
  });
}

/**
 * Open Device Preview Modal with Support for Protected Sites (MaxisTravel)
 */
function openDeviceModal(demoId) {
  const demo = demosData.find(d => d.id === demoId);
  if (!demo) return;

  state.activeDemo = demo;

  modalTitle.textContent = demo.name;
  modalBadge.textContent = demo.badge;
  modalExternalLink.href = demo.url;
  modalOpenTabBtn.href = demo.url;
  
  const displayUrl = demo.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  modalUrlDisplay.textContent = displayUrl;

  const waMessage = encodeURIComponent(
    `Hola equipo Molinaz Dev, estoy viendo la demo "${demo.name}" (${demo.url}) y quiero cotizar esta propuesta para mi agencia de viajes.`
  );
  modalWhatsappBtn.href = `https://wa.me/51987654321?text=${waMessage}`;

  setDeviceMode('desktop');
  switcherButtons.forEach(b => {
    b.classList.toggle('active', b.dataset.device === 'desktop');
  });

  if (demo.embedSafe === false) {
    iframeLoader.classList.add('hidden');
    iframeSecurityNotice.style.display = 'flex';
    securityOpenBtn.href = demo.url;
    securityOpenBtn.innerHTML = `
      <i data-lucide="external-link"></i>
      <span>Abrir ${demo.name} en Pantalla Completa</span>
    `;
    previewIframe.src = 'about:blank';
  } else {
    iframeSecurityNotice.style.display = 'none';
    iframeLoader.classList.remove('hidden');
    previewIframe.src = demo.url;
  }

  deviceModal.showModal();
  refreshLucideIcons();
}

/**
 * Close Device Preview Modal
 */
function closeDeviceModal() {
  deviceModal.close();
  previewIframe.src = 'about:blank';
  state.activeDemo = null;
}

/**
 * Change Device Viewport Mode
 */
function setDeviceMode(mode) {
  state.activeDevice = mode;
  deviceFrame.classList.remove('desktop-mode', 'tablet-mode', 'mobile-mode');
  deviceFrame.classList.add(`${mode}-mode`);
}

/**
 * Sales Guide Modal Close
 */
function closeSalesGuideModal() {
  salesGuideModal.close();
}

/**
 * Re-initialize Lucide Icons for dynamic content
 */
function refreshLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
