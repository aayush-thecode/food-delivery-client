import * as Yup from 'yup';

const reviewSchema = Yup.object().shape({
  rating: Yup.number()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1'),
  review: Yup.string()
    .required('Review is required'),
});

export default reviewSchema;