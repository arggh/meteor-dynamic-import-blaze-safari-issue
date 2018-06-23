import './nav_element_view.html';
import './icon_nav_close.html';
import './icon_nav_open.html';

const loadTemplate = (name) => import('./layouts/nav_layout/nav_layout.js');

Template.nav_element_view.viewmodel({
  elementTemplate: ViewModel.property.string,

  onCreated() {
    loadTemplate().then(() => this.elementTemplate('nav_layout'));
  },

  context() {
    return {
      targets: this.sectionTargets()
    };
  },

  sectionTargets() {
    return [
      {
        name: 'X',
        order: 0,
        navOrder: 0,
        navLabel: 'X',
        _id: 1
      },
      {
        name: 'Y',
        order: 1,
        navOrder: 1,
        navLabel: 'Y',
        _id: 2
      },
      {
        name: 'Z',
        order: 2,
        navOrder: 2,
        navLabel: 'Z',
        _id: 3
      }
    ];
  },

  iconColors() {
    return { fontColor: '#cccccc', backgroundColor: '#eeeeee' };
  }
});
