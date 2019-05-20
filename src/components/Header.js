import "styles/Header.css";
import ExportButtons from "./ExportButtons";

/**
 * The page header
 */
export default class Header {
  /**
   * Creates a Header component
   */
  constructor() {
    this._container = document.createElement("div");
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._container.id = "header";

    const logoContainer = document.createElement("div");
    logoContainer.className = "logo-container";

    const title = document.createElement("h1");
    title.innerText = "Chuck's Ducks";

    const exportButtons = new ExportButtons();
    this._container.appendChild(logoContainer);
    this._container.appendChild(title);
    this._container.appendChild(exportButtons.getElement());

    return this._container;
  }
}

// When the user scrolls down 50px from the top of the document, resize the header's size
function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 50,
  headerEl = document.getElementById("header");
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("shrink");
  } else {
    headerEl.classList.remove("shrink");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);



