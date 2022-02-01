import styled from 'styled-components';

export const Name = styled.p`
  position: absolute;
  height: 36px;
  padding-top:195px;
  font-family: SF UI Text;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
`;

export const Photo = styled.img`
  position: relative;
`;

export const Button = styled.button`
margin: 0.5em;
  padding: 0.5em 0;
  width: 132px;
  background: #f0f0f0;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  font-family: Audiowide;
  font-size: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1c1c1c;
  cursor: pointer;
  user-select: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;