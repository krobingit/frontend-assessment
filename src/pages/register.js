import { Form, Formik } from "formik";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { HeadingMedium, VStack } from "../components/ui";
import { RegistrationYupSchema } from "../helper/registration-validation";
import * as yup from "yup";
import { useRegisterUser } from "../hooks/register-hooks";

const Container = styled.div`
  background-image: linear-gradient(
    to right top,
    #12100e,
    #251a18,
    #37222a,
    #3d2e46,
    #2b4162
  );
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  min-height: 100vh;
`;

const InputGroupCustom = styled(InputGroup.Text)`
  display: flex;
  gap: 10px;
  color: #4f2f5e;
  font-weight: 500;
`;

const ButtonCustom = styled(Button)`
  width: 100%;
`;

const FormErrorMessage = styled.p`
  font-size: 14px;
  color: red;
  margin: 0;
  padding: 0;
`;

function Register() {
  const { mutate, isLoading } = useRegisterUser();
  return (
    <Container>
      <VStack style={{ background: "beige" }}>
        <HeadingMedium>Registration Form</HeadingMedium>
        <Formik
          initialValues={{
            full_name: "",
            email: "",
            country: "",
            mobile_no: "",
            city: "",
            state: "",
            message: "",
          }}
          validationSchema={RegistrationYupSchema(yup)}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess: () => {
                resetForm();
              },
            });
          }}
        >
          {({ values, handleChange, errors }) => (
            <Form>
              <InputGroup className="mb-3">
                <InputGroupCustom id="inputGroup-sizing-default">
                  Name
                </InputGroupCustom>
                <FormControl
                  name="full_name"
                  value={values.full_name}
                  onChange={handleChange}
                  aria-label="Name"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.full_name && errors.full_name}
              </FormErrorMessage>
              <InputGroup className="mb-3">
                <InputGroupCustom id="inputGroup-sizing-default">
                  Email
                </InputGroupCustom>
                <FormControl
                  name="email"
                  value={values.email}
                  aria-label="Email"
                  onChange={handleChange}
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.email && errors.email}
              </FormErrorMessage>
              <InputGroup className="mb-3">
                <InputGroupCustom id="inputGroup-sizing-default">
                  Mobile
                </InputGroupCustom>
                <FormControl
                  name="mobile_no"
                  value={values.mobile_no}
                  onChange={handleChange}
                  aria-label="Mobile"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.mobile_no && errors.mobile_no}
              </FormErrorMessage>
              <InputGroup className="mb-3">
                <InputGroupCustom id="inputGroup-sizing-default">
                  Country
                </InputGroupCustom>
                <FormControl
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  aria-label="Country"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupCustom id="inputGroup-sizing-default">
                  City
                </InputGroupCustom>
                <FormControl
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  aria-label="City"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupCustom id="inputGroup-sizing-default">
                  State
                </InputGroupCustom>
                <FormControl
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  aria-label="State"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupCustom id="inputGroup-sizing-default">
                  Message
                </InputGroupCustom>
                <FormControl
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  aria-label="Message"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <ButtonCustom
                variant="secondary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Registering" : "Register"}
              </ButtonCustom>
            </Form>
          )}
        </Formik>
      </VStack>
    </Container>
  );
}

export default Register;
