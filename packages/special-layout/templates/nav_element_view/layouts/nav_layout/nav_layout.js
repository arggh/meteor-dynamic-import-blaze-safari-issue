import './nav_layout.html';

Template.nav_layout.viewmodel({
  editMode: false,

  navClass() {
    return this.editMode() ? styles.editEnabledNav : styles.nav;
  },
  
  linkStyles() {
    let styles = {};
    styles.backgroundColor = 'transparent';
    styles.color = '#888888';
    return styles;
  },

  secondColor() {
    return '#999999';
  },

  firstColor() {
    return '#222222';
  }
});