describe('Kipos Landing page',function()

{
    it('Should validate all the elements',function()
    {

        browser.get('http://13.127.181.42:9095/#/');
         
        
          element(by.id('emailId')).sendKeys('shubam.orp@gmail.com');
           
          element(by.id('password')).sendKeys('welcome123');

          element(by.xpath('//span[@class="mat-button-wrapper"]')).click();


           
    });
});