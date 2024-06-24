
export const GetEmail = () => {
  const user = process.env.SUBSCRIBED_MAIL_ADDRESS?.split('@');
  if(user?.length) {
    user[0] = user[0]
    .split('').map((e, i) => i !== 0 && i < user[0].length - 2 ? '*' : e)
    .join('')
  }
  return user?.join('');
}