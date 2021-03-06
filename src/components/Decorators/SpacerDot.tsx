import { styled } from '@mui/material/styles';

const SpacerDot = () => {
  return <Dot />;
};

export default SpacerDot;
const Dot = styled('span')(({ theme }) => ({
  width: '5px',
  height: '5px',
  margin: '0 5px',
  borderRadius: '50%',
  backgroundColor: theme.palette.divider,
  display: 'inline-block',
}));
