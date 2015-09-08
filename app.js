export class App {
  configureRouter(config, router) {
    this.router = router;

    config.map([
      { route: ['', 'List'],
        moduleId: 'movies/List',
        title: 'List',
        nav:true },
      { route: 'About',
        moduleId: 'about/About',
        title: 'About',
        nav:true }
    ]);
  }
}
