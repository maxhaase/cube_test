// Check the title of a page

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://cube.westeurope.cloudapp.azure.com/');

    expect(browser.getTitle()).toEqual('LAMP STACK');
  });
});
