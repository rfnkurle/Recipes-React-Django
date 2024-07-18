//import { useState } from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
//import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addRecipe } from '../services/RecipeService';


const AddRecipeModal = (props) => {

    // const [formData, setFormData] = useState({recipeName: "", time: "", ingredients: "", instructions:""})

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    //   };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        addRecipe(e.target)
        .then((result)=>{
            alert(result);
           // eslint-disable-next-line react/prop-types
           props.setUpdated(true);
        },
        (error)=>{
            console.log(error)
            alert("Failed to Add Recipe");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Recipe Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                {/* <Form.Group controlId="FirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="FirstName" required placeholder="" />
                            </Form.Group> */}
                            <Form.Group controlId="recipeName">
                                    <Form.Label>Recipe</Form.Label>
                                    <Form.Control type="text" name="recipeName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="time">
                                    <Form.Label>Estimated Time</Form.Label>
                                    <Form.Control type="text" name="time" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="ingredients">
                                    <Form.Label>Ingredients</Form.Label>
                                    <Form.Control type="text" name="ingredients" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="instructions">
                                    <Form.Label>Instructions</Form.Label>
                                    <Form.Control type="text" name="instructions" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                {/* <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button> */}

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddRecipeModal;