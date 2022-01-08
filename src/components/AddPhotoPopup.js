import { useFormik } from 'formik';
import React, { useState } from 'react';

import { addImage } from '../model/requests';
import Button from './Button';
import Popup from './Popup';
import Form from './Form';
import InputGroup from './InputGroup';

function AddPhotoPopup({ show, close, onImageAdded }) {
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      label: '',
      url: '',
    },
    async onSubmit(image) {
      try {
        console.log(image);
        const newImg = await addImage(image);
        console.log(newImg);
        close();
        onImageAdded(newImg);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
      }
    },
    validate(image) {
      const errors = {};
      if (!image.label) {
        errors.label = 'Required';
      }
      if (!image.url) {
        errors.email = 'Required';
      }
      return errors;
    },
  });

  const renderContent = function () {
    if (error) {
      return <React.Fragment>{error}</React.Fragment>;
    }
    return (
      <Form onSubmit={formik.handleSubmit}>
        <InputGroup
          labelText="Label"
          name="label"
          placeHolder="Enter a label"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.label}
        />
        <InputGroup
          labelText="Image URL"
          name="url"
          placeHolder="Enter an Image URL"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.url}
        />
        <div className="form__actions">
          <Button onClick={close}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  };
  return (
    <Popup
      show={show}
      close={close}
      title={!error ? 'Add a new photo' : 'Error'}
    >
      {renderContent()}
    </Popup>
  );
}

export default AddPhotoPopup;
