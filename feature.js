Feature: Shoppingt the first dress in the search

  I want to shop The five unites of the first dress

  Scenario: Shopping five dresses
    Given I am open Automation practice website
    When I search for the frist dress
    And I select the blue dress
    And I add five dresss to the cart
	And I procced to checkout
	Then I should see the order name
	Then I should see ther order price