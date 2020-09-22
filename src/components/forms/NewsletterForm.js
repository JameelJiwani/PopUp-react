import React, { useState } from 'react';
import classnames from 'classnames';
import { addToWaitList } from '../../services/waitlistAPI'

function NewsletterForm(props) {
  const [email, setEmail] = useState("");

  const { className, submit = 'Submit' } = props;
  const classNames = classnames(
    'newsletter-form field field-grouped is-revealing',
    className
  )

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${email}`)
    await addToWaitList(email);
  }

  return (
    <form onSubmit={handleSubmit} className={classNames}>
      <div className="control control-expanded">
        <input className="input" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your best email&hellip;" />
      </div>
      <div className="control">
        <button className="button button-primary button-block button-shadow" type="submit">{submit}</button>
      </div>
    </form>
  )
}

export default NewsletterForm;
