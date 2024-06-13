import { Button } from "../button"
import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
const SaveButton = () => {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
      <Button
    variant={'outline'}
    className="flex gap-1 font-medium justify-center items-center mb-20 py-3 "
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill={"none"}>
      <path d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    save resume
  </Button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="TooltipContent" sideOffset={5}>
          see my resume
          <Tooltip.Arrow className="TooltipArrow" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
   
  )
}

export default SaveButton