import React, { useState } from 'react';

const Form = props => {
    const { input, setInput } = props;
    const [errors, setErrors] = useState({
        firstName: null,
        lastName: null,
        email: null
    });

    const onChange = e => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });

        let errorMessage = '';

        switch(name) {
            case 'firstName':
            case 'lastName':
                if (value.length < 2) {
                    errorMessage = `${name} must be at least 2 characters long!`;
                }
                break;
            case 'email':
                if (value.length < 5) {
                    errorMessage = 'Email must be at least 5 characters long!';
                }
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: errorMessage
        }));
    };

    return (
        <form>
            <h3>COMPLETE CON SUS DATOS</h3>
            <div className="mb-3">
                <label class="form-label">Nombre</label>
                <input onChange={onChange} type="text" className="form-control" name="firstName"/>
                {errors.firstName && <p className="error" class="form-text">{errors.firstName}</p>}
            </div>
            <div className="mb-3">
                <label class="form-label">Apellido</label>
                <input onChange={onChange} type="text" className="form-control" name="lastName"/>
                {errors.lastName && <p className="error" class="form-text">{errors.lastName}</p>}
            </div>
            <div className="mb-3">
                <label class="form-label">Correo Electrónico</label>
                <input onChange={onChange} type="text" className="form-control" name="email"/>
                {errors.email && <p className="error" class="form-text">{errors.email}</p>}
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
};

export default Form;
