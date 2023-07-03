import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function UpdateContact() {
  const { id } = useParams();
  const navigat = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  useEffect(() => {
    fetch(`https://average-fish-sundress.cyclic.app/contact/${id}`).then(
      (result) => {
        result.json().then((resp) => setFormData(resp));
      }
    );
  }, []);

  const handleUpdate = (e: any) => {
    e.preventDefault();

    if (formData.phoneNumber.length > 10 || formData.phoneNumber.length < 10) {
      alert("Please Enter Valid Contact Number");
    } else {
      fetch("https://average-fish-sundress.cyclic.app/updateContact", {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Contact Updated Successfully");
          navigat("/");
        })
        .catch(() => {
          alert("Something went wrong!!!");
        });
    }
  };
  return (
    <>
      <div className="ContactForm">
        <h1>Update Conatct Form</h1>
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={formData.firstName}
              required
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              type="text"
              placeholder="Ex. Jhon"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={formData.lastName}
              required
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              type="text"
              placeholder="Ex. Doe"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={formData.phoneNumber}
              required
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              type="number"
              placeholder="000-000-1234"
            />
          </Form.Group>
          <Link to="/">
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Button variant="primary ms-2" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateContact;
