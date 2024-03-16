[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/5y3q7FHA)
# Using State Assignment 2

1. Create a new branch called "develop" (`git checkout -b 'develop'`)
1. Have the `NavBar` show how many items are in the cart

   1. It should be updated when the "add to cart" button is clicked
   1. Remove from the UI information about how many times this item was ordered

1. Add to the `NavBar` a button/link called "checkout"

   1. When clicking on it, have a form appear with the following input fields: `first name`, `last name`, `Address`, `city`, `state`, `postal code`
   1. The form should have a checkbox with a label that says "Use shipping address as billing address"
   1. When the checkbox is not ticked have a second form appear below the checkbox that contains the following fields: `first name`, `last name`, `Address`, `city`, `state`, `postal code`
   1. The address added to the billing address form should still be in the form if an address was entered in to the billing form and then the checkbox was checked and then unchecked
   1. There should be one submit button for both forms
   1. Trim (remove) whitespace before and after all the inputs when the submit button is clicked

1. Commit the 'develop' branch, push it to the remote repo and then open a Pull Request to `master`
