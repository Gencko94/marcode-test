import { AppBar, Container, Toolbar } from '@mui/material';
import logo from '../../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <AppBar
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      position="static"
      color="transparent"
      elevation={0}
    >
      <Container sx={{ maxWidth: { xs: 'xs', sm: 'sm', md: 'md' } }}>
        <Toolbar disableGutters>
          <Link passHref href="/">
            <a style={{ alignItems: 'center', display: 'flex' }}>
              <Image src={logo} alt="smart android" />
            </a>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
