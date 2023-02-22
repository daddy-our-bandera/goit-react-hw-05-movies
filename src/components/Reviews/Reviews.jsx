import { useEffect, useState } from 'react';
import { fetchReviewsById } from 'services/fetchApi';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

export default function Reviews() {
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState();
  const params = useParams();

  useEffect(() => {
    setStatus('pending');

    fetchReviewsById(params.movieId)
      .then(data => {
        setReview(data.results);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError('Something went wrong. Try again.');
      });
  }, [params.movieId]);

  return (
    <div>
      {status === 'rejected' && <ErrorMessage message={error} />}
      {status === 'pending' && <Loader />}

      {!review.length ? (
        <h1>reviews not found</h1>
      ) : (
        status === 'resolved' && (
          <ul>
            {review.map(review => (
              <li key={review.id}>
                <span>{review.author}</span>
                <span>{review.content}</span>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}
