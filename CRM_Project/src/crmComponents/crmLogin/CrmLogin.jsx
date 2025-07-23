import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';

const CrmLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f5f5f5' }}>
      <Card sx={{ width: 400, height: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 0 }} style={{background:'#C2E9FB', border: '1px solid #3EB3E8', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

        <CardContent style={{marginLeft:'40px', marginRight:'40px'}}>
          <Typography gutterBottom variant="h5"  component="div" style={{color:'#688CE2', fontWeight: 600}}>
            Welcome to Your CRM <span style={{marginLeft:'80px'}}>Portal</span>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{marginTop:'30px', color:'#688CE2', font:'16px'}}>
           Manage leads, track progress, and grow your business with confidence. Please log in to continue.
          </Typography>
        </CardContent> 
      </Card>

      <Card sx={{ width: 450, height: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', padding: 3, borderRadius: 0 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" align="center" sx={{ fontWeight: 'bold', color: 'black' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: 24 }} autoComplete="off">
            <TextField
              placeholder="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
              autoComplete="new-email"
              inputProps={{
                autoComplete: 'new-email',
                form: 'off',
                style: {
                  height: 50,
                  padding: 0,
                  borderRadius: 50,
                  background: 'transparent',
                  fontWeight: 'semibold',
                  color: 'black',
                  outline: 'none',
                  '::placeholder': { color: '#4f4f4fff', opacity: 1 },
                },
                autoCorrect: 'off',
                spellCheck: 'false',
              }}
              InputProps={{
                style: {
                  width: 366,
                  height: 50,
                  background: 'white',
                  borderRadius: 50,
                  paddingLeft: 16,
                  fontSize: 16,
                  color: 'black',
                  outline: 'none',
                  borderColor: '#688CE2',
                  boxShadow: '4px 4px 10px #688CE233',
                },
              }}
              sx={{ mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#688CE2',
                  },
                  '&:hover fieldset': {
                    borderColor: '#688CE2',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#688CE2',
                  },
                },
              }}
            />
            <TextField
              placeholder="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
              autoComplete="new-password"
              inputProps={{
                autoComplete: 'new-password',
                form: 'off',
                style: {
                  height: 50,
                  padding: 0,
                  borderRadius: 50,
                  background: 'transparent',
                  color: '#0f0f0fff',
                  fontSize:'16px',
                  outline: 'none',
                  '::placeholder': { color: '#4f4f4fff', opacity: 1 },
                },
                autoCorrect: 'off',
                spellCheck: 'false',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  width: 366,
                  height: 50,
                  background: 'white',
                  borderRadius: 50,
                  paddingLeft: 16,
                  fontSize: 16,
                  color: '#A8A8A8',
                  outline: 'none',
                  borderColor: ' #688CE2',
                  boxShadow: '4px 4px 10px #688CE233',
                },
              }}
              sx={{ mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#688CE2',
                  },
                  '&:hover fieldset': {
                    borderColor: '#688CE2',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#688CE2',
                  },
                },
              }}
            />
            <Typography align="right" sx={{ mb: 2 }}>
              <Link href="#" underline="hover" color="primary">
                Forgot password?
              </Link>
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: 156,
                  height: 44,
                  border: '1px solid #40A1CE',
                  backgroundColor: '#C2E9FB',
                  borderRadius: 50,
                  color: '#1B8EC3',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: 'none',
                  mt: 0,
                  mb: 1,
                  '&:hover': {
                    backgroundColor: '#B2DFF7',
                    color: '#1B8EC3',
                    border: '1px solid #40A1CE',
                    boxShadow: 'none',
                  },
                }}
                autoComplete="off"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CrmLogin