import { LitElement, html } from 'lit-element';
import axios from 'axios';


class StatusElement extends LitElement {
  static get properties() { 
    return { 
      name: { type: String },
    };
  }

  connectedCallback() {
    // @ts-ignore
    window.ss = this;
    setInterval(() => {
      axios.get("http://localhost:8081/status", {
        headers: { "Access-Control-Allow-Origin": "*"}
      })
        .then((res) => {
          console.log(res.status, res.data);
          this.status = res.data
          this.requestUpdate();
        })
        .catch((err) => {
          console.warn(err);
        });
    }, 5000);
  }
  

  render() {
    return html`<h1>${this.name} ${this.status}</h1>`;
  }

}

customElements.define("web-status", StatusElement);
