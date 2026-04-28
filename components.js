const PAYPAL = "https://www.paypal.com/donate/?hosted_button_id=HG58KEAJ6E5TA";
const GOOGLE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSci0a6q2ujmFryTeGCMd-kiX7fKdyUNOEJ9fbn3FL68BCB4Ng/viewform?usp=header";

const NAV_HTML = (activePage) => `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="logo">
      <img src="logo-horizontal.png" alt="Abono ONG" class="logo-img"/>
    </a>
    <button class="hamburger" onclick="document.getElementById('navlinks').classList.toggle('open')" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navlinks">
      <li><a href="index.html" ${activePage==='inicio'?'class="active"':''}>Inicio</a></li>
      <li><a href="about.html" ${activePage==='about'?'class="active"':''}>Quiénes somos</a></li>
      <li><a href="taller-ia.html" ${activePage==='taller'?'class="active"':''}>Taller iA</a></li>
      <li><a href="join.html" ${activePage==='join'?'class="active"':''}>RedAbono</a></li>
      <li><a href="${PAYPAL}" target="_blank" class="btn-donar">DONAR</a></li>
    </ul>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <a href="index.html" class="logo">
      <img src="logo-horizontal-white.png" alt="Abono ONG" class="logo-img logo-img-footer"/>
    </a>
    <div class="footer-right">
      <p>Conecta con nosotros.</p>
      <a href="mailto:abono.ong.uy@gmail.com">abono.ong.uy@gmail.com</a>
      <div class="footer-icons">
        <a href="mailto:abono.ong.uy@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
        <a href="https://www.instagram.com/abono.ong/" target="_blank" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>`;
