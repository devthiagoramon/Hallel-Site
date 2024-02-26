
import styled from "styled-components";

const ButtonTemplate = styled.button`
  border-radius: 12px;
  color: #007B34;
  font-size: 18px;
  font-weight: bold;
  transition: 0.4s;
  font-family: 'Inter', sans-serif;
  border: none;
  &:hover {
    scale: 1.09;
    transition: 0.4s;
  }
`
 const ElevatedButtonHallel =
    styled(ButtonTemplate)`
      box-shadow: rgba(0, 0, 0, 0.25) 0 2px 2px;
      background-color: #FAFAFA;
    `
 const OutlinedButtonHallel =
    styled(ButtonTemplate)`
      color: #FFFFFF;
      font-weight: 600;
      background-color: #002811;
      
    `
 const OutlinedBlurButtonHallel =
    styled(ButtonTemplate)`
  background-color: rgba(0, 105, 45, 0.5);
      position: relative;
`
 const OutlinedEmptyButtonHallel =
    styled(ButtonTemplate)`
  outline: rgba(37, 37, 37, 0.5) 1px;
      position: relative;
`
 const TextOnlyButtonHallel =
    styled(ButtonTemplate)`
      background: inherit;
      position: relative;
      border: none;
    `

export {TextOnlyButtonHallel, OutlinedEmptyButtonHallel, OutlinedBlurButtonHallel,
    OutlinedButtonHallel, ElevatedButtonHallel, ButtonTemplate}