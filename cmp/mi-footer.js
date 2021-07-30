class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Sixto Roberto Olivares Rivera
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
