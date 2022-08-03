import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Drop = () => {

  return (
 <DndProvider backend={HTML5Backend}>
      {/* Here, render a component that uses DND inside it */}
   test
    </DndProvider>
  )
}

export default Drop;