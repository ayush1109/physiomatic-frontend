import React from "react";

import { Form, Field } from "react-final-form";

import { ButtonGroup, Button } from "@material-ui/core";

function Motor() {
    const onSubmit = (formValues) => {
        console.log(formValues);
    };

    const initialValues = { date: new Date().toISOString().substr(0, 10) };

    return (
        <Form onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit, form }) => (
                <div className="text-center">
                    <form onSubmit={handleSubmit} className="ui form ">
                        <div className="item">
                            <label>Date</label>
                            <Field name="date" type="date">
                                {({ input, meta }) => <input type="date" {...input} />}
                            </Field>
                        </div>
                        <br />
                        <br />
                        <div>
                            <table class="datatable table-striped table-bordered">
                                <thead>
                                    <tr>

                                        <th>Head Neck and Trunk</th>
                                        <th colspan="3">Left</th>
                                        <th colspan="3">Right</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td></td>
                                    <td>ROW</td>
                                    <td>Power</td>
                                    <td>Tone</td>
                                    <td>ROW</td>
                                    <td>Power</td>
                                    <td>Tone</td>

                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[STERNOCLENOID Cr XI]</td>
                                    <td>
                                        <Field name="hntflex-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hntflex-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[NECK EXTENSORS C1-T1]</td>
                                    <td>
                                        <Field name="hntextension-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hntextension-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[RECTUS ABD. T7-L1]</td>
                                    <td>
                                        <Field name="hntflex2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hntflex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[DORSAL SPINAL MUSCLE]</td>
                                    <td>
                                        <Field name="hntextension2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hntextension2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[LUMBAR SPINAL MUSCLE]</td>
                                    <td>
                                        <Field name="hntextension3-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hntextension3-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hip Hike<br></br>[QUAD LUMB L1-L3, T1-T2]</td>
                                    <td>
                                        <Field name="hike-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hike-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Facial Movt.<br></br>[FACIAL MUSCLE Cr VII]</td>
                                    <td>
                                        <Field name="face-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="face-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <thead>
                                    <tr>

                                        <th>Hip</th>
                                    </tr>
                                </thead>

                                <tr>
                                    <td>Flexion<br></br>[ILIOPSOAS L1-L4]</td>
                                    <td>
                                        <Field name="flex-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="flex-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[SARTORIUS L2-L4]</td>
                                    <td>
                                        <Field name="flex2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="flex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[RECTUS FEMORIS L2-L4]</td>
                                    <td>
                                        <Field name="flex3-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="flex3-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[GLUTEUS MAX L5-S1-S2]</td>
                                    <td>
                                        <Field name="extension-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="extension-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Abduction<br></br>[GLUTEUS MED. MIN L4-L5-S1]</td>
                                    <td>
                                        <Field name="abduction-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="abduction-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Abduction<br></br>[TENS. FAS. LATA. L4-L5-S1]</td>
                                    <td>
                                        <Field name="abduction2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="abduction2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adduction<br></br>[ADDUCTORS L2-L4]</td>
                                    <td>
                                        <Field name="adduction-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="adduction-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ext. Rotation<br></br>[EXT. ROTATORS L2-L5-S1]</td>
                                    <td>
                                        <Field name="ext-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="ext-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Int. Rotation<br></br>[INT. ROTATORS L4-L5-S1-S2]</td>
                                    <td>
                                        <Field name="int-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="int-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <thead>
                                    <tr>

                                        <th>Knee</th>

                                    </tr>
                                </thead>

                                <tr>
                                    <td>Flexion<br></br>[MED. HAMSTRING L4-L5-S1-S2]</td>
                                    <td>
                                        <Field name="flexi-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="flexi-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[LAT. HAMSTRING L5-S1-S2-S3]</td>
                                    <td>
                                        <Field name="flexi2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="flexi2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[GRACILIS L2-L4]</td>
                                    <td>
                                        <Field name="flexi3-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="flexi3-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[QUADRICEPS L2-L4]</td>
                                    <td>
                                        <Field name="extensioni-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="extensioni-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>



                                <thead>
                                    <tr>

                                        <th>Ankle</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Plantar Flexion<br></br>[GASTROCMEIUS S1-S2]</td>
                                    <td>
                                        <Field name="pflex-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="pflex-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Plantar Flexion<br></br>[SOLEUS L5-S1-S2]</td>
                                    <td>
                                        <Field name="pflex2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="pflex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dorsi Flexion<br></br>[ANT. TIBIAL, PERON. TERT. L4-L5-S1]</td>
                                    <td>
                                        <Field name="dflex-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="dflex-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Inversion<br></br>[ANT. TIBIAL, POST. TIBIAL L4-L5-S1-S2]</td>
                                    <td>
                                        <Field name="inversion-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="inversion-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eversion<br></br>[PERONEALS L4-L5-S1]</td>
                                    <td>
                                        <Field name="eversion-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="eversion-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>

                                <thead>
                                    <tr>

                                        <th>Toes</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Flexion<br></br>[FLEXOR DIGI. BREVIS, LONG AND LUMBRICALS L5-S1]</td>
                                    <td>
                                        <Field name="tflex-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="tflex-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[EXT. DIGI. BREVIS, LONG L4-L5-S1-S2]</td>
                                    <td>
                                        <Field name="textension-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="textension-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>

                                <thead>
                                    <tr>

                                        <th>Hallux</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Flexion<br></br>[FLEXOR HALL. BREV L5-S1]</td>
                                    <td>
                                        <Field name="hflex1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hflex1-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[FLEXOR HALL. LONG L4-L5-S1-S2]</td>
                                    <td>
                                        <Field name="hflex2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hflex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[EXT. HALL LONG L4-L5-S1-S2]</td>
                                    <td>
                                        <Field name="hflex3-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="hflex3-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <thead>
                                    <tr>

                                        <th>Shoulder</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Flexion<br></br>[CORAC. A. DELT. C5-C6]</td>
                                    <td>
                                        <Field name="shflex-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="shflex-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[LATTIS DORSI C6-C7-C8]</td>
                                    <td>
                                        <Field name="shextension-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="shextension-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Abduction<br></br>[DELT. SUPRA C4-C5-C6]</td>
                                    <td>
                                        <Field name="shabduction-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="shabduction-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Abduction<br></br>[POST DELTOID C5-C6]</td>
                                    <td>
                                        <Field name="abd2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="abd2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adduction<br></br>[T. MAJ. POST DELT C5-C6-C7]</td>
                                    <td>
                                        <Field name="addu1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="addu1-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adduction<br></br>[PECT. MAJOR C5-C6-C7-C8-T1]</td>
                                    <td>
                                        <Field name="addu2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="addu2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ext. Rotation<br></br>[T. MINOR, INFRA, P DELT. C5-C6]</td>
                                    <td>
                                        <Field name="extRotation-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="extRotation-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Int. Rotation<br></br>[T. MAJOR, A. DELT. C5-C6]</td>
                                    <td>
                                        <Field name="intRotation-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="intRotation-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>

                                <thead>
                                    <tr>

                                        <th>Scapula</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Abduction<br></br>[SERRATUS ANT. C5-C7]</td>
                                    <td>
                                        <Field name="sabduction-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="sabduction-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Elevation<br></br>[UPPER TRAPS C2-C4]</td>
                                    <td>
                                        <Field name="elevation-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="elevation-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adduction<br></br>[MID TRAPS C2-C4]</td>
                                    <td>
                                        <Field name="add-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="add-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adduction<br></br>[RHOMBOIDS C4-C5]</td>
                                    <td>
                                        <Field name="add2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="add2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Depression<br></br>[LOWER TRAPS C2-C4]</td>
                                    <td>
                                        <Field name="depress-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="depress-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pain<br></br>[Upper Congestion]</td>
                                    <td>
                                        <Field name="pain-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="pain-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <thead>
                                    <tr>

                                        <th>Elbow</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Flexion<br></br>[BICEPS BRACHIALIS C5-C6]</td>
                                    <td>
                                        <Field name="eflex1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="eflex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[BRACHIORADIALIS C5-C6]</td>
                                    <td>
                                        <Field name="eflex2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="eflex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[TRICEPS C6-C8]</td>
                                    <td>
                                        <Field name="eextension-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="eextension-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <thead>
                                    <tr>

                                        <th>Fore Arm</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Supination<br></br>[BICEPS C5-C6]</td>
                                    <td>
                                        <Field name="supination-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="supination-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Supination<br></br>[SUPINATOR C6]</td>
                                    <td>
                                        <Field name="supination2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="supination2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pronation<br></br>[PRONATORS C6]</td>
                                    <td>
                                        <Field name="pronation-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="pronation-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>



                                <thead>
                                    <tr>

                                        <th>Wrist</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Flexion<br></br>[FL. CARP. RAD. C6-C8]</td>
                                    <td>
                                        <Field name="wflex1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="wflex1-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[FL. CARP. ULN. C8]</td>
                                    <td>
                                        <Field name="wflex2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="wflex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[EXT. CARP. RAD C6-C7]</td>
                                    <td>
                                        <Field name="wextension1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="wextension1-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[EXT. CARP. ULN C7]</td>
                                    <td>
                                        <Field name="wextension2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="wextension2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Radial Deviation<br></br>[FLEXOR CARP. RAD C6-C7]</td>
                                    <td>
                                        <Field name="radial1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="radial1-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Radial Deviation<br></br>[EXT. CARP. RAD LONGUS C6-C7]</td>
                                    <td>
                                        <Field name="radial2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="radial2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ulnar Deviation<br></br>[FLEX. CARP. ULNARIS C8-T1]</td>
                                    <td>
                                        <Field name="ulnar1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="ulnar1-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ulnar Deviation<br></br>[EXT. CARP. ULNARIS C7]</td>
                                    <td>
                                        <Field name="ulnar2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="ulnar2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>

                                <thead>
                                    <tr>

                                        <th>Fingers</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Flexion<br></br>[LUMBRICALS C7-C8-T1]</td>
                                    <td>
                                        <Field name="fflex1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="fflex1-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[FLEX DIG. SUP. C7-C8-T1]</td>
                                    <td>
                                        <Field name="fflex2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="fflex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[FLEX DIG. PROF. C8-T1]</td>
                                    <td>
                                        <Field name="fflex3-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="fflex3-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[EXT. DIGITOR C7]</td>
                                    <td>
                                        <Field name="fextension-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="fextension-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Abduction<br></br>[D. INT ABD. D.M. C8-T1]</td>
                                    <td>
                                        <Field name="fabd-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="fabd-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adduction<br></br>[PALM, INTER. C8]</td>
                                    <td>
                                        <Field name="fadd-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="fadd-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>

                                <thead>
                                    <tr>

                                        <th>Thumb</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>Flexion<br></br>[FLEXOR POL BREVIS C6-C8]</td>
                                    <td>
                                        <Field name="thflex1-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="thflex1-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flexion<br></br>[FLEXOR POL LONGUS C8-T1]</td>
                                    <td>
                                        <Field name="thflex2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="thflex2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[EXT. POL BREVIS C7]</td>
                                    <td>
                                        <Field name="thextension-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="thextension-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extension<br></br>[EXT. POL LONGUS C7]</td>
                                    <td>
                                        <Field name="thextension2-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="thextension2-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Abduction<br></br>[ABDUCTORS P. C7]</td>
                                    <td>
                                        <Field name="thabd-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="thabd-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adduction<br></br>[ADDUCTORS P. C6-C7]</td>
                                    <td>
                                        <Field name="thadd-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="thadd-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Opposition<br></br>[OPPONENS POLLICIS C6-C8-T1]</td>
                                    <td>
                                        <Field name="oppo-left" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                        </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>

                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><Field name="oppo-right" type="text">
                                        {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                    </Field>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Power</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2-">2-</option>
                                                <option value="2">2</option>
                                                <option value="2+">2+</option>
                                                <option value="3-">3-</option>
                                                <option value="3">3</option>
                                                <option value="3+">3+</option>
                                                <option value="4-">4-</option>
                                                <option value="4">4</option>
                                                <option value="4+">4+</option>
                                                <option value="5-">5-</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" four wide column">
                                            <select class="ui fluid dropdown">
                                                <option selected>Tone</option>
                                                <option value="normal">Normal</option>
                                                <option value="Flacial">Flacial</option>
                                                <option value="Spastice">Spastice</option>
                                                <option value="Rigid">Rigid</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>



                            </table>
                            <table>
                                <thead>
                                    <tr>

                                        <th>Measurement</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        Asis to Medial Malleolus
                                        </td>
                                    <td>
                                        <Field name="asis" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="cm" />}
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Umblicus to Medial Malleolus
                                        </td>
                                    <td>
                                        <Field name="umblicus" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="cm" />}
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Mid Thigh Circumference
                                        </td>
                                    <td>
                                        <Field name="midThigh" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="5 cm above Patella" />}
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Mid Calf Circumference
                                        </td>
                                    <td>
                                        <Field name="midCalf" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="5 cm below Patella" />}
                                        </Field>
                                    </td>
                                </tr>
                            </table>
                            <div style={{ textAlign: "center" }}>
                                <button
                                    // disabled={!_.isEmpty(errors) || submitting}
                                    className="ui primary button"
                                >
                                    Save
                                </button>
                                <button
                                    // disabled={!_.isEmpty(errors) || submitting}
                                    className="ui button"
                                    type="reset"
                                // onClick={form.reset}
                                >
                                    Discard
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </Form>
    );
}

export default Motor;
