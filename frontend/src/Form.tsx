
import { useActionState } from 'react';
import Lists from './components/Lists';
import getDistance from './functions/getDistance';

export default function Form() {
  // this app uses both client side and server side validation
  const [state, formAction, isPending] = useActionState(getDistance, null);

  return (
      <form action={formAction}>
        <div className='form-content'>
          <label className='text-label'>Data input: </label><br/>
          <textarea 
            className='text-area'
            rows={10}
            placeholder='enter data ..'
            name="list" 
          />
          <br/>
          <div className='btn-wrapper'>
            <button className="submit-btn" type="submit" disabled={isPending}>
              {isPending ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
        {/* Form response that is shown after data is submitted */}
        <div className='form-response'>
          {!!state && !isPending && (
            // error message that is shown for validation and server errors
            state.err ? <p className="error-message">{state.message}</p>
            : <>
            {/* result displayed if no errors */}
                <hr />
                <p className='text'>The total distance travelled is: {state.sum}</p>
                <p className='text'>The original unsorted data is shown below.</p>
                <Lists even={state.evenArr} odd={state.oddArr}/>
              </>
          )}
        </div>
      </form>
  );
}