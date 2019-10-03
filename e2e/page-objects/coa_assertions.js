var COAAssertions={
    COAAssertions:function(coa_assertion,browser){
    return this
    .waitForElementVisible('div.entity-name')
    .waitForElementVisible('#btn-standalone-addresses',2000)
   .click('#btn-standalone-addresses')
   .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div > div','HUNTINGTON PLACE HOUSING CO-OPERATIVE')
   .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number','CP0001205')
   .assert.containsText('#filing-header','Change of Office Addresses')
   .assert.visible('#reg-off-addr-change-btn','Change of Office Addresses')
   .waitForElementVisible('#reg-off-addr-change-btn > div',1000)
    },
   Assertionsforchangeinaddress:function(COA,browser){
    return this
    .assert.visible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > label','Delivery Address')
    .assert.visible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','123test')
    .assert.visible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V1V1V1')
    .assert.visible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
    .assert.visible('#reg-off-addr-reset-btn')
    .useXpath()
    .waitForElementVisible('(//div[@class="fee-list__item-name"])[1]')
    .assert.containsText('//*[@id="standalone-office-address-container"]/aside/div/div/ul/li/div[1]', 'Change of Registered Office Address')
    .useXpath()
    .waitForElementVisible('(//div[@class="fee-list__item-value"])[1]')
    .assert.containsText('//*[@id="standalone-office-address-container"]/aside/div/div/ul/li/div[2]', '$20.00')
    .assert.containsText('//*[@id="standalone-office-address-container"]/aside/div/div/div[2]/div[3]/div', '$20.00')
},
};
module.exports={
    commands:[COAAssertions],
    elements:{}
    
};