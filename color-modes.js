/* Manny's colour modes — taken from the logo: waffle gold, chocolate brown, cream. */
(function () {
  const T = {
    cream: { label: 'Cream', swatch: '#FBF5EA', ring: '#D99A26', v: {
      bg: '#FBF5EA', surface: '#FFFFFF', text: '#3F231C', accent: '#8A5E10',
      'accent-100': '#F6E6C4', 'accent-400': '#E8B64E', 'accent-500': '#8A5E10', 'accent-600': '#6E4A0C', 'accent-700': '#7A520E', 'accent-900': '#4A2A22',
      divider: '#E6D6BE', 'neutral-500': '#A08D80', 'neutral-600': '#86705F', 'neutral-700': '#6B5446', 'neutral-800': '#54392F' } },
    chocolate: { label: 'Chocolate', swatch: '#3F231C', ring: '#E3A833', v: {
      bg: '#2E1A15', surface: '#3A231C', text: '#F6EBDD', accent: '#E3A833',
      'accent-100': '#4A3020', 'accent-400': '#F0BD55', 'accent-500': '#E3A833', 'accent-600': '#F0BD55', 'accent-700': '#F0BD55', 'accent-900': '#FBE3A8',
      divider: '#533A30', 'neutral-500': '#9C8575', 'neutral-600': '#B8A292', 'neutral-700': '#CDBAAA', 'neutral-800': '#E2D3C5' } },
    golden: { label: 'Golden', swatch: '#E8B23C', ring: '#4A2A22', v: {
      bg: '#EDB741', surface: '#F7D27A', text: '#3F231C', accent: '#4A2A22',
      'accent-100': '#F4CB6A', 'accent-400': '#6B3F30', 'accent-500': '#4A2A22', 'accent-600': '#2E1A15', 'accent-700': '#4A2A22', 'accent-900': '#2E1A15',
      divider: '#CF9A2E', 'neutral-500': '#7A5530', 'neutral-600': '#6A4526', 'neutral-700': '#5A3A22', 'neutral-800': '#4A2A22' } },
  };
  window.MANNYS_THEMES = T;
  window.applyMannysTheme = function (name) {
    const t = T[name] || T.cream, r = document.documentElement.style;
    for (const k in t.v) r.setProperty('--color-' + k, t.v[k]);
    document.body && (document.body.style.background = t.v.bg);
    try { localStorage.setItem('mannys-mode', name); } catch (e) {}
  };
})();
