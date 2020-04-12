import React from 'react';
import AppTheme from './components/AppTheme';
import Home from './Home';

export default function Page() {
  return (
    <AppTheme title="Onepirate theme - Material-UI" description="A onepirate theme">
      <Home />
    </AppTheme>
  );
}
