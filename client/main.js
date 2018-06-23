Template.body.viewmodel({
  isOpen: false,

  toggleApp() {
    this.isOpen(!this.isOpen());
  }
});

Template.app.viewmodel({
  counts() {
    const counts = [];
    for (let i = 0; i < 100; i++) {
      counts.push(i);
    }
    return counts;
  }
});
