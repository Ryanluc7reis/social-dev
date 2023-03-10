import { forwardRef } from "react"
import styled from "styled-components"

const InputContainer = styled.div`
  width: 100%;

`
const StyledLabel = styled.p`
  font-wight:bold;
  font-size: 14px;
  margin-bottom: 5px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid  ${props => props.theme.inputBorder};
  background-color: ${props => props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box ;
  border-radius : 10px;

    &:focus {
    outline: none;
  }
  ${props => props.error && `border: 2px solid ${props => props.theme.error};`}
`
const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: bold;
  font-size: 14px;
 

`
const errorMessage = {
  'string.empty': 'Este campo é obrigatório.',
  'string.email':'Por favor,digite um email válido.'
}
const Input = forwardRef (({label, error, ...props }, ref) => {
                                                                    
  return (                                                            // o parametro do "forwardRef" é o componente todo como esta a abaixo      // "...props " significa q todas as props que nao for label ,ira substituir automaticamente todas as outras props   
     <InputContainer>
         <StyledLabel> {label}</StyledLabel>
         <StyledInput placeholder={label} error={error}  {...props} ref={ref}  />
         {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
     </InputContainer>
  )
  
})

export default Input