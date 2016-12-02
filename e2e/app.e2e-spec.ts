import { TaimrliPage } from './app.po';

describe('taimrli App', function() {
  let page: TaimrliPage;

  beforeEach(() => {
    page = new TaimrliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
