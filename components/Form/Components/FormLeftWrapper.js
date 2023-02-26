import styled from "styled-components";
import { FormState } from "../Form";
import { useContext } from "react";

const FormLeftWrapper = () => {
    const Handler = useContext(FormState);

  return (
    <FormLeft>
        <FormInput>
            <label>Campaign Title</label>
            <Input onChange={Handler.FormHandler} value={Handler.form.campaignTitle} placeholder='Campaign Title' name='campaignTitle'>

            </Input>
        </FormInput>
        <FormInput>
            <label>Story</label>
            <TextArea onChange={Handler.FormHandler} value={Handler.form.story} placeholder='Describe your Story' name='story'>

            </TextArea>
        </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
    width: 48%;
`
const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Secular One';
    margin-top: 10px;
`
const Input = styled.input`
    padding: 15px;
    background-color: ${(props) => props.theme.bgDiv};
    color: ${(props) => props.theme.color};
    border:none;
    border-radius: 10px;
    outline: none;
    font-size: large;
    width: 100%;
`
const TextArea = styled.textarea`
    padding: 15px;
    background-color: ${(props) => props.theme.bgDiv};
    color: ${(props) => props.theme.color};
    border:none;
    border-radius: 10px;
    outline: none;
    font-size: large;
    max-width: 100%;
    min-width: 100%;
    overflow-x: hidden;
    min-height: 160px;
`
export default FormLeftWrapper