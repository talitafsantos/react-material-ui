import { Avatar, Drawer, useTheme } from '@mui/material';
import { Box } from '@mui/system';

export const MenuLateral: React.FC<{children: React.ReactNode}> = ({children}) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)}>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTU5C_QXVqSVbVvA1kMsJ6W2FJxE6Ki6Xnw&usqp=CAU' />
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}

      </Box>
    </>
  );
};