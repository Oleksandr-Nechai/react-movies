import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcSearch } from 'react-icons/fc';
// import PropTypes from 'prop-types';

// import { validationRequest } from 'services/notifications';

import {
  FormStyled,
  Container,
  Input,
  ButtonStyled,
} from './Searchbar.styled.js';

function Searchbar({ onSubmitForm, visible = false }) {
  const handleFormSubmit = ({ nameFilm }, { resetForm }) => {
    if (!nameFilm.trim()) {
      return;
    }
    onSubmitForm(nameFilm.toLowerCase());
    resetForm();
  };

  const initialValues = {
    nameFilm: '',
  };

  const SignupSchema = Yup.object({
    nameFilm: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={SignupSchema}
      >
        <FormStyled>
          <Container>
            <label>
              <Input type="text" name="nameFilm" placeholder="Batman" />
            </label>

            <ButtonStyled
              type="submit"
              disabled={visible}
              aria-label="find film"
            >
              <FcSearch />
            </ButtonStyled>
          </Container>
          <ErrorMessage name="nameFilm" render={msg => <p>msg</p>} />
        </FormStyled>
      </Formik>
    </>
  );
}

export default Searchbar;

// Searchbar.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
//   visible: PropTypes.bool.isRequired,
// };
