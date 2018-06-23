import './effect.html';

const loadTemplate = () => import('./forest_effect.js');

Template.effect.viewmodel({
  dynamicTemplateName: ViewModel.property.string,

  onCreated() {
    loadTemplate().then(() => this.dynamicTemplateName('forest_effect'));
  }
});
