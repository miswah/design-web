import { DesignWebPage } from './app.po';

describe('design-web App', function() {
  let page: DesignWebPage;

  beforeEach(() => {
    page = new DesignWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
