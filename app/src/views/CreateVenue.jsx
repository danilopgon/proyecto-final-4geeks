import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateVenue = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-cover bg-[url('https://images.pexels.com/photos/2078076/pexels-photo-2078076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <div className="w-4/5 md:w-2/5 bg-base-100 p-10 rounded-lg my-10">
        <h1 className="mb-5 text-5xl font-bold">Crear sala</h1>
        <Formik
          initialValues={{
            name: "",
            capacity: 0,
            address: {
              city: "",
              street: "",
              number: "",
              zip_code: "",
              country: "",
              type: "",
            },
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .trim()
              .required("Requerido")
              .min(3, "Debe tener al menos 3 carácteres")
              .max(50, "Debe tener 50 carácteres o menos"),
            capacity: Yup.number()
              .required("Requerido")
              .min(10, "¿Tan pocos?")
              .max(1000000, "Debe ser menor a 1000000"),
            address: Yup.object({
              city: Yup.string()
                .trim()
                .required("Requerido")
                .min(3, "Debe tener al menos 3 carácteres")
                .max(50, "Debe tener 50 carácteres o menos"),
              street: Yup.string()
                .trim()
                .required("Requerido")
                .min(3, "Debe tener al menos 3 carácteres")
                .max(50, "Debe tener 50 carácteres o menos"),
              number: Yup.string()
                .trim()
                .required("Requerido")
                .min(1, "Debe tener al menos 1 caráctere")
                .max(10, "Debe tener 10 carácteres o menos"),
              zip_code: Yup.string()
                .trim()
                .required("Requerido")
                .min(3, "Debe tener al menos 3 carácteres")
                .max(10, "Debe tener 10 carácteres o menos"),
              country: Yup.string()
                .trim()
                .required("Requerido")
                .min(3, "Debe tener al menos 3 carácteres")
                .max(50, "Debe tener 50 carácteres o menos"),
              type: Yup.string()
                .trim()
                .required("Requerido")
                .min(3, "Debe tener al menos 3 carácteres")
                .max(50, "Debe tener 50 carácteres o menos"),
            }),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="form-control gap-1 w-full">
            <div>
              <label htmlFor="name" className="label">
                Nombre
              </label>
              <Field
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Sala 1"
              />
              <ErrorMessage
                component="div"
                className="text-red-600 flex"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="capacity" className="label">
                Capacidad
              </label>
              <Field
                name="capacity"
                type="number"
                className="input input-bordered w-full"
                placeholder="100"
              />
              <ErrorMessage
                component="div"
                className="text-red-600 flex"
                name="capacity"
              />
            </div>
            <div>
              <label htmlFor="address.city" className="label">
                Ciudad
              </label>
              <Field
                name="address.city"
                type="text"
                className="input input-bordered w-full"
                placeholder="Córdoba"
              />
              <ErrorMessage
                component="div"
                className="text-red-600 flex"
                name="address.city"
              />
            </div>
            <div>
              <label htmlFor="address.street" className="label">
                Dirección
              </label>
              <Field
                name="address.street"
                type="text"
                className="input input-bordered w-full"
                placeholder="C. Falsa"
              />
              <ErrorMessage
                component="div"
                className="text-red-600 flex"
                name="address.street"
              />
            </div>
            <div>
              <label htmlFor="address.number" className="label">
                Número
              </label>
              <Field
                name="address.number"
                type="text"
                className="input input-bordered w-full"
                placeholder="123"
              />
              <ErrorMessage
                component="div"
                className="text-red-600 flex"
                name="address.number"
              />
            </div>
            <div>
              <label htmlFor="address.zip_code" className="label">
                Código Postal
              </label>
              <Field
                name="address.zip_code"
                type="text"
                className="input input-bordered w-full"
                placeholder="5000"
              />
              <ErrorMessage
                component="div"
                className="text-red-600 flex"
                name="address.zip_code"
              />
            </div>
            <div>
              <label htmlFor="address.country" className="label">
                País
              </label>
              <Field
                name="address.country"
                type="text"
                className="input input-bordered w-full"
                placeholder="España"
              />
              <ErrorMessage
                component="div"
                className="text-red-600 flex"
                name="address.country"
              />
            </div>
            <div>
              <label htmlFor="address.type" className="label">
                Tipo de Dirección
              </label>
              <Field
                name="address.type"
                type="text"
                className="input input-bordered w-full"
                placeholder="Entrada para Artistas"
              />
              <ErrorMessage
                component="div"
                className="text-red-600 flex"
                name="address.type"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-primary container-fluid my-3"
              >
                Crear
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateVenue;
