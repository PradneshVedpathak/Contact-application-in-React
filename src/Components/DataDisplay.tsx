import "./Stylesheet/DataDisplay.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function ShowData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://average-fish-sundress.cyclic.app/allContacts").then(
      (result) => {
        result.json().then((resp) => setData(resp));
      }
    );
  }, []);

  return (
    <div className="Table">
      <Table bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, i) => (
            <tr key={i}>
              <td>{++i}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>+91 {item.phoneNumber}</td>
              <td>
                {
                  <Link to={`/UpdateContact/${item._id}`}>
                    <Button>Edit</Button>
                  </Link>
                }
                {
                  <Button
                    variant="danger ms-2"
                    onClick={() => {
                      if (
                        confirm("Are you sure you want to delete this contact?")
                      ) {
                        fetch(
                          `https://average-fish-sundress.cyclic.app/removeContact/${item._id}`,
                          {
                            method: "DELETE",
                          }
                        )
                          .then((response) => response.json())
                          .then(() => {
                            location.reload();
                          });
                      } else {
                      }
                    }}
                  >
                    Delete
                  </Button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowData;
