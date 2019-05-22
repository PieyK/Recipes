import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const recipeQuery = gql`
  {
    recipe {
      idMeal
      strMeal
      strInstructions
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strIngredient11
      strIngredient12
      strIngredient13
      strIngredient14
      strIngredient15
      strIngredient16
      strIngredient17
      strIngredient18
      strIngredient19
      strIngredient20
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
      strMeasure11
      strMeasure12
      strMeasure13
      strMeasure14
      strMeasure15
      strMeasure16
      strMeasure17
      strMeasure18
      strMeasure19
      strMeasure20
    }
  }
`;

class Recipe extends Component {
  render() {
    return (
      <Query query={recipeQuery}>
        {({ loading, data }) => {
          if (loading) return "Loading...";

          const { recipe } = data;
          //console.log(recipe);
          return (
            <Accordion className="container">
              <Card>
                <Card.Header>
                  <h3>Random Recipes</h3>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {recipe.strMeal}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ol>
                      {recipe && (
                        <React.Fragment>
                          <h5>Ingredients</h5>

                          <li key={recipe.idMeal}>
                            {recipe.strIngredient1}, {}
                            {recipe.strMeasure1}
                          </li>

                          <li key={recipe.idMeal}>
                            {recipe.strIngredient2}, {}
                            {recipe.strMeasure2}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient3}, {}
                            {recipe.strMeasure3}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient4}, {}
                            {recipe.strMeasure4}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient5}, {}
                            {recipe.strMeasure5}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient6}, {}
                            {recipe.strMeasure6}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient7}, {}
                            {recipe.strMeasure7}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient8}, {}
                            {recipe.strMeasure8}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient9}, {}
                            {recipe.strMeasure9}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient10}, {}
                            {recipe.strMeasure10}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient11}, {}
                            {recipe.strMeasure11}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient12}, {}
                            {recipe.strMeasure12}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient13}, {}
                            {recipe.strMeasure13}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient14}, {}
                            {recipe.strMeasure14}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient15}, {}
                            {recipe.strMeasure15}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient16}, {}
                            {recipe.strMeasure16}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient17}, {}
                            {recipe.strMeasure17}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient18}, {}
                            {recipe.strMeasure18}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient19}, {}
                            {recipe.strMeasure19}
                          </li>
                          <li key={recipe.idMeal}>
                            {recipe.strIngredient20}, {}
                            {recipe.strMeasure20}
                          </li>
                        </React.Fragment>
                      )}
                    </ol>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Instructions
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {recipe && (
                      <div>
                        <ul>
                          {recipe && (
                            <li key={recipe.idMeal}>
                              {recipe.strInstructions}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        }}
      </Query>
    );
  }
}
export default Recipe;
