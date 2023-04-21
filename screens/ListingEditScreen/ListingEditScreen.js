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
		iconName: "floor-lamp",
		iconBackgroundColor: "#fc5c65",
		iconSize:60,
	},
	{
		label: 'Cars',
		value: 2,
		iconName: "car",
		iconBackgroundColor: "#fd9644",
		iconSize:60,
	},
	{
		label: 'Cameras',
		value: 3,
		iconName: "camera",
		iconBackgroundColor: "#fed330",
		iconSize:60,
	},
	{
		label: 'Games',
		value: 3,
		iconName: "cards",
		iconBackgroundColor: "#26de81",
		iconSize:60,
	},
	{
		label: 'Clothing',
		value: 3,
		iconName: "shoe-heel",
		iconBackgroundColor: "#2bcbba",
		iconSize:60,
	},
	{
		label: 'Sports',
		value: 3,
		iconName: "basketball",
		iconBackgroundColor: "#45aaf2",
		iconSize:60,
	},
	{
		label: 'Movies & Music',
		value: 3,
		iconName: "headphones",
		iconBackgroundColor: "#4b7bec",
		iconSize:60,
	},
	{
		label: 'Books',
		value: 3,
		iconName: "book-open",
		iconBackgroundColor: "#da8ee7",
		iconSize:60,
	},
	{
		label: 'Other',
		value: 3,
		iconName: "blank",
		iconBackgroundColor: "#bbb",
		iconSize:60,
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
					placeholder="Price"
					name="price"
					width="40%"
				/>
				<AppFormPicker
					name="category"
					placeholder="Category"
					items={categories}
					width="50%"
				/>
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
