import { MapPointHelperPage } from './app.po';

describe('map-point-helper App', () => {
  let page: MapPointHelperPage;

  beforeEach(() => {
    page = new MapPointHelperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
