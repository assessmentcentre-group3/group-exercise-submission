import { RecommendationPage } from './app.po';

describe('recommendation App', () => {
  let page: RecommendationPage;

  beforeEach(() => {
    page = new RecommendationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
