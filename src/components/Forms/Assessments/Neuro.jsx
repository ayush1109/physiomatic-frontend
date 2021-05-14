import React, { useState } from "react";
import BasicContainer from "../../Container/BasicContainer";
import { Form, Field } from "react-final-form";
import { Button } from "@material-ui/core";

function Neuro() {
  const [open, setOpen] = useState(0);
  return (
    <BasicContainer>
      <div>
        <Form
          onSubmit={(formValues) => {
            console.log("submitted", formValues);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="ui form">
              <Button variant="contained" color="primary" type="submit">Submit</Button>
              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(1)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Glasgow Coma Scale-info
                </h3>
                {open === 1 && (
                  <div>
                    <div class="ui two column grid">
                      <div class="column">
                        <label>Eye Opening</label>
                      </div>
                      <div class=" four wide column">
                        <select class="ui fluid dropdown">
                          <option selected>Please Select</option>
                          <option value="4">4</option>
                          <option value="3">3</option>
                          <option value="2">2</option>
                          <option value="1">1</option>
                        </select>

                      </div>

                      <div class="column"></div>
                      <div class="column"></div>
                    </div>

                    <div class="ui two column grid">
                      <div class="column">
                        <label>Eye Opening</label>
                      </div>
                      <div class=" four wide column">
                        <select class="ui fluid dropdown">
                          <option selected>Please Select</option>
                          <option value="5">5</option>
                          <option value="4">4</option>
                          <option value="3">3</option>
                          <option value="2">2</option>
                          <option value="1">1</option>
                        </select>
                      </div>

                      <div class="column"></div>
                      <div class="column"></div>
                    </div>

                    <div class="ui two column grid">
                      <div class="column">
                        <label>Eye Opening</label>
                      </div>
                      <div class=" four wide column">
                        <select class="ui fluid dropdown">
                          <option selected>Please Select</option>
                          <option value="6">6</option>
                          <option value="5">5</option>
                          <option value="4">4</option>
                          <option value="3">3</option>
                          <option value="2">2</option>
                          <option value="1">1</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(2)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Neuro Dynamic Test
                </h3>
                {open === 2 && (
                  <div>
                    <table
                      class="table table-striped table-bordered"
                      id="advancedDataTable"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center"></td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <center>Left </center>
                          </td>
                          <td class="text-center">
                            <center>Right</center>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Ulnar</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                          <Field name="ulnar">
                      {({ input, meta }) => <input type="text" {...input} />}
                    </Field>
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="ulnar_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Radial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Radial_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Radial_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Median</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Median_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Median_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Musculocutaneous</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Musculocutaneous_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Musculocutaneous_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Sciatic</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Sciatic_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Sciatic_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Tibial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Tibial_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Tibial_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Comman peronial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Commanperonial_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Commanperonial_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Femoral</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Femoral_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Femoral_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Lateral cutaneous</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Lateralcutaneous_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Lateralcutaneous_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Obturator</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Obturator_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Obturator_right"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Sural</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Sural_left"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Sural_right"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(3)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Special Test Info
                </h3>
                {open === 3 && (
                  <div>
                    <div className="ui two column grid">
                      <div className="column">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                          </div>
                          <input
                            placeholder="Special Tests"
                            type="text"
                            name="scar"
                            id="scar"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                          </div>
                          <textarea
                            placeholder="Description"
                            type="text"
                            name="adhere"
                            id="adhere"
                            class="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(4)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  ADL score.functional Assessment
                </h3>
                {open === 4 && (
                  <div>
                    <div>
                      <div className="ui two column grid">
                        <div className="column">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">@</span>
                            </div>
                            <input
                              placeholder="Special Tests"
                              type="text"
                              name="scar"
                              id="scar"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="column">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">@</span>
                            </div>
                            <textarea
                              placeholder="Description"
                              type="text"
                              name="adhere"
                              id="adhere"
                              class="form-control"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(5)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Neural Tissue Palpation
                </h3>
                {open === 5 && (
                  <div>
                    <table
                      class="table table-striped table-bordered"
                      id="advancedDataTable"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center"></td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <center>Left</center>{" "}
                          </td>
                          <td class="text-center">
                            <center>Right</center>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Ulnar</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="ulnar_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="ulnar_right1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Radial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Radial_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Radial_right1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Median</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Median_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Median_right1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Sciatic</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Sciatic_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Sciatic_right1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Tibial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Tibial_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Tibial_right1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">peronial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="peronial_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="peronial_right1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Comman peronial</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Femoral_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Femoral_right1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Femoral</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Sural_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Sural_right1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td class="text-center">Lateral cutaneous</td>
                          <td class="text-center"></td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Saphenous_left1"
                            />{" "}
                          </td>
                          <td class="text-center">
                            <input
                              type="text"
                              class="form-control"
                              name="Saphenous_right1"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(6)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Co-ordination test
                </h3>
                {open === 6 && (
                  <div>
                    <div class="card-body">
                      <div class="table-responsive media-body">
                        <label>Finger To Nose</label>
                        <table
                          class="table table-striped table-bordered"
                          id="advancedDataTable"
                        >
                          <tbody>
                            <tr>
                              <td class="text-center">
                                Time Taken to Complete the Activity :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="f1"
                                />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                Speed at which the Activity is Performed :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="f2"
                                />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">No. of Error Made :</td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="f3"
                                />{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                      <br />
                      <div class="table-responsive media-body">
                        <label>
                          Aternating Supination - pronation movement
                        </label>
                        <table
                          class="table table-striped table-bordered"
                          id="advancedDataTable"
                        >
                          <tbody>
                            <tr>
                              <td class="text-center">
                                Time Taken to Complete the Activity :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="a1"
                                />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                Speed at which the Activity is Performed :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="a2"
                                />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">No. of Error Made :</td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="a3"
                                />{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                      <br />
                      <div class="table-responsive media-body">
                        <label>Heel to Shin</label>
                        <table
                          class="table table-striped table-bordered"
                          id="advancedDataTable"
                        >
                          <tbody>
                            <tr>
                              <td class="text-center">
                                Time Taken to Complete the Activity :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="h1"
                                />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                Speed at which the Activity is Performed :
                              </td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="h2"
                                />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">No. of Error Made :</td>
                              <td class="text-center"></td>
                              <td class="text-center">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="h3"
                                />{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                )}
              </div>
              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(7)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Gait and Balance Test
                </h3>
                {open === 7 && (
                  <div>
                    <div className="ui two column grid">
                      <div className="column">Gait level surface :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Change in gait speed :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Gait level surface :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">
                        Gait with horizontal head turns :
                      </div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">
                        Gait with vertical head turns :
                      </div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Gait and pivot turn :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Step over obstacle :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Step around obstacles :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Steps :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="item">
                      <div className="ui four wide column">
                        <label>Balance and Movement Analyzer</label>
                      </div>

                      <textarea rows="5"></textarea>
                    </div>
                  </div>
                )}
              </div>
              <div className="ui center aligned segment">
                <h3
                  onClick={() => setOpen(8)}
                  className="ui left aligned dividing header"
                  style={{ cursor: "pointer" }}
                >
                  Functional Testing
                </h3>
                {open === 8 && (
                  <div>
                    <div className="ui two column grid">
                      <div className="column">Bowels (preceding week) :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Bladder (preceding week) :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">
                        Grooming (preceding 24 - 48 hours) :
                      </div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Toilet use :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Feeding :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Bathing :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">
                        Transfer (from bed to chair and back) ::
                      </div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Mobility :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Dressing :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="column">Stairs :</div>
                      <div className="column">
                        <div class=" four wide column">
                          <select class="ui fluid dropdown">
                            <option selected>Please Select</option>

                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          )}
        </Form>
      </div>
    </BasicContainer>
  );
}

export default Neuro;
