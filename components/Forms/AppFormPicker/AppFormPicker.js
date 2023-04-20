import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../../AppPicker/AppPicker';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


function AppFormPicker({items,name, placeholder, width, ...otherProps}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                {...otherProps}
                items={items}
                onSelectedItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage
            error={errors[name]}
            	visible={touched[name]}
            />
            
        </>
    );
}

export default AppFormPicker;