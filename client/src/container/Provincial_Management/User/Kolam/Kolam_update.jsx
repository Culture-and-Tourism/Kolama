import React from 'react'
import { input } from 'reactstrap'
import './form.css'
import images from '../../../../constants/images';
const Kolam_Update = () => {
    return (
        <table>
            <tr>
                <td> <div className="img_form">
                    <img src={images.welcomeArts} className='form_img alt="' />
                </div></td>
                <td> <div className='formbox'>

                    <form class="row g-3">
                        <div class="row-md-2">
                            <label for="validationDefault01" class="form-label">Name</label>
                            <input type="text" class="form-control" id="validationDefault01" required />
                        </div>

                        <div class="row-md-2">
                            <label for="validationDefault02" class="form-label">Location-Province</label>
                            <input type="text" class="form-control" id="validationDefault02" required />
                        </div>
                        <div class="row-md-2">
                            <label for="validationDefault01" class="form-label">Art Category</label>
                            <input type="text" class="form-control" id="validationDefault01" required />
                        </div>

                        <div class="row-md-2">
                            <label for="validationDefault02" class="form-label">Title</label>
                            <input type="text" class="form-control" id="validationDefault02" required />
                        </div>

                        <div class="row-md-2">
                            <label for="validationDefault02" class="form-label">Phone No</label>
                            <input type="text" class="form-control" id="validationDefault02" required />
                        </div>

                        <div class="row-md-2">
                            <label for="validationDefaultUsername" class="form-label">Email</label>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>

                        <div class="row-md-2">
                            <label for="validationDefault02" class="form-label">  Description</label>
                            <input type="text" class="form-control" id="validationDefault02" required />
                        </div>
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Default file input example</label>
                            <input class="form-control" type="file" id="formFile" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label class="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-warning" type="submit">Submit form</button>
                        </div>
                    </form>

                </div>
                </td>
            </tr>
        </table>

    )
}

export default Kolam_Update;