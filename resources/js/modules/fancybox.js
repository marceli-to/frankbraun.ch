import { Fancybox } from '@fancyapps/ui';

const closeSvg = '<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.4 2.89999L40 0.5L21.2 19.3L2.39999 0.5L0 2.89999L18.8 21.7L0 40.5L2.39999 42.9L21.2 24.1L40 42.9L42.4 40.5L23.6 21.7L42.4 2.89999Z" fill="#E63033"/></svg>';
const prevSvg = '<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.5 3L12 21.5L30.5 40" stroke="#E63033" stroke-width="3.4" stroke-linecap="butt" stroke-linejoin="miter"/></svg>';
const nextSvg = '<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L30.5 21.5L12 40" stroke="#E63033" stroke-width="3.4" stroke-linecap="butt" stroke-linejoin="miter"/></svg>';

function createButton(html, className, onClick) {
  const btn = document.createElement('button');
  btn.innerHTML = html;
  btn.className = className;
  btn.addEventListener('click', onClick);
  return btn;
}

Fancybox.bind('[data-fancybox]', {
  closeButton: false,
  Carousel: {
    Toolbar: false,
    Thumbs: false,
    Arrows: false,
  },
  caption: function(fancybox, slide) {
    return slide.triggerEl?.dataset?.caption || '';
  },
  on: {
    ready: (fancybox) => {
      const container = fancybox.getContainer();

      container.appendChild(
        createButton(closeSvg, 'fancybox-custom-close', () => Fancybox.close())
      );

      container.appendChild(
        createButton(prevSvg, 'fancybox-custom-prev', () => fancybox.getCarousel().prev())
      );

      container.appendChild(
        createButton(nextSvg, 'fancybox-custom-next', () => fancybox.getCarousel().next())
      );
    },
  },
});
