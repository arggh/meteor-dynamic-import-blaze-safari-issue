import './names_element_view.html';

const loadTemplate = () => import('./layouts/names_layout/names_layout.js');

Template.names_element_view.viewmodel({
  elementTemplate: null,

  onCreated() {
    loadTemplate().then(() => this.elementTemplate('names_layout'));
  },

  inlineStyles() {
    const elementStyles = {
      color: '#cccccc',
      fontFamily: 'Arial',
      textTransform: 'none'
    };
  }
});
