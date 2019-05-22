import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Modal from "react-bootstrap/Modal";

class CreateRecipe extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [
        {
          title: "Noodles",
          ingredients: ["Noodles", "Water", "salt", "sauce"],
          steps: [
            "Bring water to boil",
            "Add noodles & salt",
            "cook till done",
            "drain the water, add sauce and serve"
          ]
        }
      ],

      showAddModal: false,
      showEdit: false,
      currentIndex: 0,
      newRecipe: { title: "", ingredients: [], steps: [] }
    };

    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.updateNewRecipe = this.updateNewRecipe.bind(this);
    this.saveNewRecipe = this.saveNewRecipe.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateRecipeName = this.updateRecipeName.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.updateSteps = this.updateSteps.bind(this);
  }

  deleteRecipe(i) {
    let recipes = this.state.recipes.slice();
    recipes.splice(i, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  updateNewRecipe(title, ingredients, steps) {
    this.setState({
      newRecipe: { title: title, ingredients: ingredients, steps: steps }
    });
  }

  saveNewRecipe(newRecipe) {
    let recipes = this.state.recipes.slice();
    recipes.push({
      title: this.state.newRecipe.title,
      ingredients: this.state.newRecipe.ingredients,
      steps: this.state.newRecipe.steps
    });
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
    this.setState({ newRecipe: { title: "", ingredients: [], steps: [] } });
    this.handleClose();
  }

  //Opens a modal
  handleShow(state, currentIndex) {
    this.setState({ [state]: true });
    this.setState({ currentIndex });
  }

  //Closes a modal
  handleClose() {
    if (this.state.showAddModal) {
      this.setState({ showAddModal: false });
    } else if (this.state.showEdit) {
      this.setState({ showEdit: false });
    }
  }

  updateRecipeName(title, currentIndex) {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {
      title: title,
      ingredients: recipes[currentIndex].ingredients,
      steps: recipes[currentIndex].steps
    };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  updateIngredients(ingredients, currentIndex) {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {
      title: recipes[currentIndex].title,
      ingredients: ingredients,
      steps: recipes[currentIndex].steps
    };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  updateSteps(steps, currentIndex) {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {
      title: recipes[currentIndex].title,
      ingredients: recipes[currentIndex].ingredients,
      steps: steps
    };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  componentDidMount() {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    this.setState({ recipes });
  }

  render() {
    const { recipes, newRecipe, currentIndex } = this.state;
    return (
      <div className="createRecipe container">
        {recipes.length > 0 && (
          <div>
            <Accordion>
              {recipes.map((recipe, i) => (
                <Card key={i}>
                  <Card.Header>
                    <h3>Create A Recipe</h3>
                    <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                      {recipe.title}
                    </Accordion.Toggle>
                  </Card.Header>

                  <Accordion.Collapse eventKey={i}>
                    <Card.Body>
                      <h4>Ingredients</h4>
                      <ul>
                        {recipe.ingredients.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <ButtonToolbar>
                        <Button
                          variant="danger"
                          onClick={e => this.deleteRecipe(i)}
                        >
                          Delete Recipe
                        </Button>
                        <Button
                          variant="primary"
                          onClick={e => this.handleShow("showEdit", i)}
                        >
                          Edit Recipe
                        </Button>
                      </ButtonToolbar>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>

            <Modal show={this.state.showEdit} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Recipe</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="formBasicText">
                  <Form.Label>Recipe Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={recipes[currentIndex].title}
                    placeholder="Text"
                    onChange={e =>
                      this.updateRecipeName(e.target.value, currentIndex)
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formControlsTextarea">
                  <Form.Label>Ingredients</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Ingredients...comma seperated"
                    value={recipes[currentIndex].ingredients}
                    onChange={e =>
                      this.updateIngredients(
                        e.target.value.split(","),
                        currentIndex
                      )
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formControlsTextarea">
                  <Form.Label>Steps</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="steps...comma seperated"
                    value={recipes[currentIndex].steps}
                    onChange={e =>
                      this.updateSteps(e.target.value.split(","), currentIndex)
                    }
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}

        <Modal show={this.state.showAddModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicText">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="text"
                value={newRecipe.title}
                placeholder="Recipe Name"
                onChange={e =>
                  this.updateNewRecipe(e.target.value, newRecipe.ingredients)
                }
              />
            </Form.Group>

            <Form.Group controlId="formControlsTextarea">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                type="textarea"
                value={newRecipe.ingredients}
                placeholder="Ingredients...comma seperated"
                onChange={e =>
                  this.updateNewRecipe(
                    newRecipe.title,
                    e.target.value.split(",")
                  )
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={e => this.saveNewRecipe(newRecipe)}>
              Save New Recipe
            </Button>
          </Modal.Footer>
        </Modal>

        <Button
          variant="secondary"
          onClick={e => this.handleShow("showAddModal", currentIndex)}
        >
          Add recipe
        </Button>
      </div>
    );
  }
}
export default CreateRecipe;
