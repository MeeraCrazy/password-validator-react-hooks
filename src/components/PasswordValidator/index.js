// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PassWordContainer,
  PassWordHeading,
  PasswordDescription,
  PassWordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [passWord, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PassWordContainer>
        <PassWordHeading>Password Validator</PassWordHeading>
        <PasswordDescription>
          Check how strong and secure is your password
        </PasswordDescription>
        <PassWordInput
          type="password"
          value={passWord}
          onChange={onChangePassword}
        />
        {passWord.length >= 8 ? (
          ''
        ) : (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PassWordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
