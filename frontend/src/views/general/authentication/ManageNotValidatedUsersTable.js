import React, { useState, useEffect } from 'react';
import { withRouter, Redirect,Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  CardText,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import axios from 'axios';
import ManageNotValidatedUsersSortingTable from 'components/kshirot/ManageNotValidatedUsersSortingTable/SortingTable'


const ManageUsersTable = ({ match }) => {

  useEffect(() => {
    
    }, [])

  return (
    <>
      <div className="">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ direction: 'rtl' }}>
                <CardTitle tag="h4" style={{ direction: 'rtl', textAlign: 'right' }}>בקשות להרשמה</CardTitle>{/*headline*/}
              </CardHeader>
              <CardBody style={{ direction: 'rtl' }}>
              <ManageNotValidatedUsersSortingTable/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default withRouter(ManageUsersTable);;

