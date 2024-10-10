import { Theme, GlobalStyles } from './themes';
import { Rotas } from './routes';

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Rotas />
    </Theme>
  );
};