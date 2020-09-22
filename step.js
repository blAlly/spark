const createTestCafe       = require('testcafe');
var { defineSupportCode } = require('cucumber');
var Selector       = require('testcafe').Selector;
var t       = require('testcafe').t;
defineSupportCode(function ({ Given, When, Then }) {


    Given('I open aubay website', function() {
     
	function runTest () {
    var runner = null;

    createTestCafe('localhost', 1337, 1338)
        .then(function (tc) {
            testcafe = tc;
            runner   = tc.createRunner();

            return runner
                .src('./feature.js')
                .browsers('chrome')
                .run()
                .catch(function (error) {
                    console.log(error);
                });
        })
        .then(function (report) {
            console.log(report);
        });
     }
	 async function navigateURL (){ 
	 runTest();
     t.navigateTo('https://www.aubay.pt/Home/SpontaneausApp?culture=en-us');
	 };
	 
    });
	
	const searchField = Selector('#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img');
	
	const selectDress = Selector('#color_20');
	
	const addQuantity = Selector('#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up');
	
	const addToCart = Selector('#add_to_cart > button')
		
	const newDiv = Selector('#layer_cart > div.clearfix');
	
	const proccedToCheckout = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a')
	
	const productLink = Selector('#product_5_20_0_0 > td.cart_description > p > a');
	
	const totalPrice = Selector('#total_price');
    
		
	
    When('I am searching for a dress', function () {
     async function enterName (){        
	   t.typeText('searchField', 'dress')
	 };
    });

	When('Selecting the frist dress', function () {
     async function selectDress (){        
	   t.click('selectDress')
	 };
    });
	
	When('I am changing the quantity', function () {
     async function changeQuantity (){        
	   t.click('addQuantity');
	   t.click('addQuantity');
	   t.click('addQuantity');
	   t.click('addQuantity');
	 };
    });
	
	When('I am adding the dress to cart ', function () {
     async function addToCart (){        
	   t.click('addToCart')
	 };
    });

	When('I am changing to a new div', function () {
     async function changeDiv (){        
	    t.click('newDiv')
	 };
    });
	
	When('I am procceding to checkout', function () {
     async function proccedToCheckout (){        
	   t.expect('productLink').contains('Printed summer dress')
	 };
    });
	
	Then('I am procceding to checkout', function () {
     async function proccedToCheckout (){        
	   t.expect('productLink').contains('Printed summer dress')
	 };
    });
	
	Then('I am checking the order price', function () {
     async function orderPrice (){        
	   t.expect('totalPrice').contains('465.68')
	 };
    });

 
 });


});

