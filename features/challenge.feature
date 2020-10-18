Feature: Create a challange
    As an logged user I want to create a challenge in habitica website in order to create a challenge

Scenario Outline: Create challenge success with right inputs

  Given I am a user logged in habitica website
    When I go to challenge side
    And I go to create challenge button
    And I fill challenge info with <name>, <shortname>, <summary>, <challengedesc>, <addto>, <categories> and <prize>
    And I try create challenge
    Then I expect to see challenge alert <error>

    Examples:
      | name    | shortname | summary                    | challengedesc   | addto             | categories   | prize | error                                                |
      | pruebas | test      | Esta es la prueba cucumber | Sin descripción | Public Challenges | academics    | 20    | "You can't afford this prize."                       |