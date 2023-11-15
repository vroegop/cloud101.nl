import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

import { eightChapters } from './chapter-styles.js';
import styles from 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' assert { type: 'css' };

class Chapter extends LitElement {
    static properties = {
        lesson: {type: String},
        chapters: {type: String},
        title: {type: String},
        subtitle: {type: String},
        image1: {type: String},
        image2: {type: String},
    };

    static styles = [styles, css`${eightChapters}`];

    doneOrActive(lesson) {
        return +lesson === +this.lesson ? 'active' : +lesson > +this.lesson ? '' : 'done';
    }

    render() {
        return html`
            <div class="wrapper">
                <div class="learning-path">
                    <div class="header">
                        <h1>${this.title || 'AWS CDK'}</h1>
                        <p>${this.subtitle || 'Workshop'}</p>
                    </div>
                    ${this.chapters.split(', ').map((chapter, index) => html`
                        <div class="lesson ${this.doneOrActive(index + 1)}"><i class="fa-solid fa-${chapter}"></i></div>
                    `)}
                    <img class="img1" src="presentation/img/${this.image1}">
                    <img class="img2" src="presentation/img/${this.image2}">
                    <div class="footer"></div>
                </div>
                <div class="slide-main-content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}
customElements.define('presentation-chapter', Chapter);