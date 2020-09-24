export const addToWaitList = async (email) => {
  const submitted_email = email
  const your_api_key = ''
  const current_url = 'https://popupp.ca/'

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: submitted_email,
      api_key: your_api_key,
      referral_link: current_url
    })
  };
  await fetch('https://www.getwaitlist.com/waitlist', requestOptions)
}
