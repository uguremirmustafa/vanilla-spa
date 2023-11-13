import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }
  async getHtml() {
    return `
      <div>
        <p>Posts</p>
      </div>
    `;
  }
}
