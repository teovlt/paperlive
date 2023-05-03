import styled from 'styled-components';
import { Container as AppContainer, Button as btn } from '../../theme/appElements';

export const Container = styled(AppContainer)`
  display: grid;
  grid-template-columns: 256px 1fr;
  grid-template-rows: 56px 1fr;
`;

export const CaptionWarning = styled.span`
  background-color: var(--destructive-vibrant);
  border-radius: 5px;
  padding: 0.5rem 1.6rem;
  border: 1px solid var(--destructive-vibrant);
  justify-content: center;
  width: 100%;
`;

export const SectionMain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`