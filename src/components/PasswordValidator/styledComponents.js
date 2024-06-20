// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #24263c;
`

export const PassWordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  border-radius: 10px;
  width: 600px;
  height: 550px;
  border: none;
  padding-top: 30px;
  padding-right: 10px;
  padding-bottom: 20px;
`

export const PassWordHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 52px;
  font-weight: bold;
`

export const PasswordDescription = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 50px;
`

export const PassWordInput = styled.input`
  width: 60%;
  padding: 12px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 120px;
`
