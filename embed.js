/*!
 * Missed Call Cost Calculator v1.0.0
 * A free, embeddable calculator for contractors and home service businesses.
 * By Build Boosters, https://buildboosters.com/missed-call-calculator
 * MIT License
 *
 * Usage:
 *   <div data-missed-call-calculator></div>
 *   <script src="https://buildboostershq.github.io/MissedCallCalculator/embed.js" async></script>
 *
 * Options (data attributes on the div):
 *   data-calls="3"     starting missed calls per week (1 to 20)
 *   data-job="1500"    starting average job value ($500 to $10,000)
 *   data-close="20"    starting close rate in percent (10 to 50)
 *   data-accent="#f2a20c"  accent color
 *   data-theme="dark"  dark or light (default dark)
 */
(function () {
  'use strict';
  var CSS = '' +
    '.mcc{--a:#f2a20c;--bg:#0b2440;--fg:#fff;--mut:#b9c4d4;--card:rgba(255,255,255,.06);--line:rgba(255,255,255,.14);font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--fg);border-radius:18px;padding:22px;max-width:640px;box-sizing:border-box}' +
    '.mcc.light{--bg:#fff;--fg:#121a24;--mut:#5b6878;--card:#f3f5f8;--line:#e4e9ef;border:1px solid var(--line)}' +
    '.mcc *{box-sizing:border-box}.mcc h3{margin:0 0 4px;font-size:20px;line-height:1.2}.mcc p{margin:0}' +
    '.mcc .sub{color:var(--mut);font-size:14px;margin-bottom:16px}' +
    '.mcc label{display:block;margin:14px 0 4px;font-weight:600;font-size:14px}.mcc label span{float:right;color:var(--a);font-weight:800}' +
    '.mcc input[type=range]{width:100%;accent-color:var(--a)}' +
    '.mcc .out{margin-top:18px;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;display:grid;gap:6px}' +
    '.mcc .big{font-size:36px;font-weight:800;color:var(--a);line-height:1.05}.mcc .f{color:var(--mut);font-size:13px}' +
    '.mcc .by{margin-top:12px;font-size:12px;color:var(--mut)}.mcc .by a{color:inherit}';
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function clamp(v, lo, hi, d) { v = parseFloat(v); return isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; }
  function mount(el) {
    if (el.getAttribute('data-mcc-ready')) return;
    el.setAttribute('data-mcc-ready', '1');
    var calls = clamp(el.getAttribute('data-calls'), 1, 20, 3);
    var job = clamp(el.getAttribute('data-job'), 500, 10000, 1500);
    var close = clamp(el.getAttribute('data-close'), 10, 50, 20);
    var box = document.createElement('div');
    box.className = 'mcc' + (el.getAttribute('data-theme') === 'light' ? ' light' : '');
    var accent = el.getAttribute('data-accent'); if (accent && /^#[0-9a-f]{3,8}$/i.test(accent)) box.style.setProperty('--a', accent);
    var id = 'mcc' + Math.random().toString(36).slice(2, 8);
    box.innerHTML =
      '<h3>What are missed calls costing you?</h3><p class="sub">Move the sliders to match your business.</p>' +
      '<label for="' + id + 'c">Missed calls per week <span></span></label><input id="' + id + 'c" type="range" min="1" max="20" step="1">' +
      '<label for="' + id + 'j">Average job value <span></span></label><input id="' + id + 'j" type="range" min="500" max="10000" step="100">' +
      '<label for="' + id + 'r">Close rate <span></span></label><input id="' + id + 'r" type="range" min="10" max="50" step="1">' +
      '<div class="out" aria-live="polite"><p>Estimated revenue lost per year</p><p class="big"></p><p class="jobs"></p><p class="f"></p></div>' +
      '<p class="by">Calculator by <a href="https://buildboosters.com/missed-call-calculator" target="_blank" rel="noopener">Build Boosters</a></p>';
    var r = box.querySelectorAll('input'), spans = box.querySelectorAll('label span');
    r[0].value = calls; r[1].value = job; r[2].value = close;
    function update() {
      var c = +r[0].value, j = +r[1].value, p = +r[2].value / 100, lost = c * 52 * p * j, jobs = Math.round(c * 52 * p);
      spans[0].textContent = c; spans[1].textContent = money(j); spans[2].textContent = r[2].value + '%';
      box.querySelector('.big').textContent = money(lost);
      box.querySelector('.jobs').textContent = 'About ' + jobs + ' job' + (jobs === 1 ? '' : 's') + ' a year going to someone else.';
      box.querySelector('.f').textContent = c + ' missed calls × 52 weeks × ' + r[2].value + '% close rate × ' + money(j) + ' average job';
    }
    for (var i = 0; i < r.length; i++) r[i].addEventListener('input', update);
    update();
    el.innerHTML = ''; el.appendChild(box);
  }
  function init() {
    if (!document.getElementById('mcc-css')) { var s = document.createElement('style'); s.id = 'mcc-css'; s.textContent = CSS; document.head.appendChild(s); }
    var els = document.querySelectorAll('[data-missed-call-calculator]');
    for (var i = 0; i < els.length; i++) mount(els[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
