import React from "react";
import { Form, Field } from "react-final-form";
import { Grid } from "@material-ui/core";

function Pediatric() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <div>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="text-center">
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <div className="fname">
                    <label htmlFor="fname">First Name</label>

                    <input
                      placeholder="First Name"
                      value={this.state.fname}
                      type="text"
                      name="fname"
                      onChange={this.handlechange}
                      required
                    />
                  </div>

                  <div className="lname">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      placeholder="Last Name"
                      value={this.state.lname}
                      type="text"
                      name="lname"
                      onChange={this.handlechange}
                      required
                    />
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      placeholder="Email-id"
                      value={this.state.email}
                      type="email"
                      name="email"
                      autoComplete="off"
                      onChange={this.handlechange}
                      required
                    />
                  </div>
                </Grid>
                <Grid xs={4}>
                  <div className="password">
                    <label htmlFor="password">Password</label>

                    <input
                      placeholder="Password"
                      value={this.state.password}
                      type="password"
                      name="password"
                      onChange={this.handlechange}
                      required
                    />
                  </div>
                  <div className="contact">
                    <label htmlFor="motor">Contact Number</label>
                    <input
                      placeholder="Contact Number"
                      value={this.state.contact}
                      type="contact"
                      name="contact"
                      onChange={this.handlechange}
                      required
                    />
                  </div>
                </Grid>
                <Grid xs={4}>
                  <div className="cpassword">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                      placeholder="Confirm Password"
                      value={this.state.cpassword}
                      type="cpassword"
                      name="cpassword"
                      autoComplete="off"
                      onChange={this.handlechange}
                      required
                    />
                  </div>

                  <div className="address">
                    <label htmlFor="address">Address</label>
                    <input
                      placeholder="Address"
                      value={this.state.address}
                      type="text"
                      name="address"
                      onChange={this.handlechange}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <div className="item">
                      <Field name="date" type="date">
                        {({ input, meta }) => (
                          <div className="field">
                            <label>Date</label>
                            <input type="date" {...input} />
                          </div>
                        )}
                      </Field>
                    </div>
                  </div>
                </Grid>

                <div className="Submit">
                  <button type="submit">Submit</button>
                </div>
              </Grid>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}

export default Pediatric;
