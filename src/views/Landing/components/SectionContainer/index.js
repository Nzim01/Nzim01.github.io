import React from 'react';
import { styles } from './styles';

function SectionContainer({children, id}) {
    // Media query for mobile devices
  if (window.innerWidth <= 767) {
    styles.container.height = 'calc(100vh - 56px)';
    // Subtract the height of the mobile navigation bar if necessary
  };

  return (
    <section id={id} style={styles.container} >
     {children}
    </section>
  )
}

export default SectionContainer