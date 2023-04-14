import React from 'react';
import Screen from '../../components/Screen/Screen';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton } from '../../components/Forms'

const category = 
    [
        { id:1,},
        {id:2,},
    ]


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).max(20).label('Title'),
    price: Yup.string().required().label('Price'),
	description: Yup.string().max(500).email().label('Email'),
	// password: Yup.string().required().min(4).label('Password'),
});

function ListingEditScreen(props) {
	return (
		<Screen>
			<AppForm
				initialValues={{ title: '',price: '',email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<AppFormField
					autoCapitalize="true"
					autoCorrect={true}
					keyboardType="text"
					placeholder="Title"
					textContentType="title"
					name="title"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
                    keyboardType="numeric"
					placeholder={"Price"}
					textContentType="price"
					name="price"
                />
                <AppFormField
					autoCapitalize="true"
					autoCorrect={false}
                    keyboardType="text"
					placeholder={"Description"}
					textContentType="description"
					name="description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
}

export default ListingEditScreen;


