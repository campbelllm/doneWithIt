import React from 'react';
import Screen from '../../components/Screen/Screen';
import * as Yup from 'yup';
import {
	AppForm,
	AppFormField,
	SubmitButton,
	AppFormPicker,
} from '../../components/Forms';

const categories = [
	{
		label: 'Furniture',
		value: 1,
	},
	{
		label: 'Clothing',
		value: 2,
	},
	{
		label: 'Camera',
		value: 3,
	},
];

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).max(20).label('Title'),
	price: Yup.string().required().min(1).max(10000).label('Price'),
	category: Yup.object().required().nullable().label('Category'),
	description: Yup.string().max(500).label('Description'),
});

function ListingEditScreen() {
	return (
		<Screen>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<AppFormField
					autoCapitalize
					autoCorrect={true}
					placeholder="Title"
					name="title"
				/>
				<AppFormField
					keyboardType="numeric"
					placeholder='Price'
					name="price"
				/>
				<AppFormPicker
					name="category"
					placeholder="Category"
					items={categories}/>
				<AppFormField
					multiline
					numberOfLines={3}
					autoCapitalize
					autoCorrect={false}
					placeholder={'Description'}
					name="description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
}

export default ListingEditScreen;
