import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function HeaderSite({ isSticked }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        transition: 'all 0.5s',
        zIndex: 997,
        height: '90px',
        borderBottom: '1px solid #fff',
        '@media (max-width:575px)': {
          height: '70px',
        },
        ...(isSticked && {
          borderBottomColor: '#eee',
        }),
      }}
    >
      <Toolbar>
        {/* Conteúdo à esquerda */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h1
            sx={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#fff',
              margin: 0
            }}
          >
            Yummy<span sx={{ color: '#ce1212' }}>.</span>
          </h1>
        </Typography>

        {/* Conteúdo à direita */}
        <Button
          color="inherit"
          href="#book-a-table"
          sx={{
            fontSize: '14px',
            color: '#fff',
            background: 'var(--color-primary)',
            padding: '8px 20px',
            marginLeft: '30px',
            borderRadius: '50px',
            transition: '0.3s',
            '&:hover, &:focus': {
              color: '#fff',
              background: 'rgba(206, 18, 18, 0.8)',
            },
          }}
        >
          Book a Table
        </Button>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderSite;
