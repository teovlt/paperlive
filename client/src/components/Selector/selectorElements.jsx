import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-flow: row wrap;
  align-items: center;

  padding: 0.8rem 1.6rem;
  gap: 0.8rem;

  outline: 1px solid var(--black-quaternary);
  outline-offset: -1px;

  &.focus {
    outline: 1px solid var(--accent);
  }
`;

export const Input = styled.input`
  flex: 1;
  flex-basis: 50%;
  padding: 1.25rem 1.6rem;
  margin: -0.8rem -1.6rem;
  border-radius: 0.2rem;

  font-size: ${(props) => (props.small ? '1.5rem' : '1.6rem')};
  line-height: ${(props) => (props.small ? '1.5rem' : '1.6rem')};

  &::placeholder {
    user-select: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  transform: translateY(-50%);

  user-select: none;

  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;

  top: 0;
  left: 1.2rem;

  font-size: 1.2rem;
  line-height: 1.2rem;

  cursor: text;
  color: var(--black-tertiary);
  background: var(--white);
`;

export const ChipsContainer = styled.span`
  flex-basis: 0;
  font-size: 1.5rem;

  display: flex;
  column-gap: 0.8rem;
  align-items: center;

  max-width: calc(25% - 0.8rem);

  padding: 0.4rem 0.5rem 0.4rem 1.6rem;
  border-radius: 1.6rem;

  outline: 1px solid var(--black-quaternary);
  outline-offset: -1px;
`;

export const ChipsValue = styled.span`
  /* flex: 1; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChipsButton = styled.button`
  flex-shrink: 0;
  cursor: pointer;

  width: 2.4rem;
  aspect-ratio: 1/1;

  border-radius: 1.2rem;

  svg {
    width: 80%;
    vertical-align: bottom;
    color: var(--black-tertiary);
  }
`;

export const SearchResultContainer = styled.div`
  position: absolute;
  width: 100%;
  padding-block: 0.4rem;
  top: calc(100% + 0.8rem);
  left: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;

  max-height: 220px;
  overflow-y: scroll;

  background: var(--white);
  border: 1px solid var(--black-quaternary);
  border-radius: 0.2rem;
  box-shadow: 0 0 10px var(--black-quaternary);

  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, IE and Edge */
  }
`;

export const SearchResult = styled.div`
  width: 100%;
  padding: 8px 12px;

  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: var(--accent);
    color: var(--white);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--black-quaternary);
  }
`;

export const SearchResultCaption = styled.div`
  width: 100%;
  padding: 8px 12px;

  font-size: 1.5rem;

  color: var(--black-tertiary);
  font-size: 1.5rem;
`;