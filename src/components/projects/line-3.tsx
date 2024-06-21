const Line = () => {
  return (
    <div className='absolute -left-28 top-0 z-[1] hidden h-full w-full items-center justify-center overflow-hidden p-2 md:flex'>
      <svg
        className='absolute h-full w-full'
        width='700.9031px'
        height='541px'
        viewBox='0 0 700.9031 541'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Group'>
          <g id='Group'>
            <path
              d='M420.903 278L0 278'
              id='line-bottom'
              fill='none'
              fillRule='evenodd'
              stroke='#fbfeff11'
              strokeWidth='1'
            />
            <path
              d='M461.335 285L366.903 285L366.903 540'
              id='line-center-b'
              fill='none'
              fillRule='evenodd'
              stroke='#fbfeff11'
              strokeWidth='1'
            />
            <path
              d='M439.903 285C439.903 285 489.903 285 489.903 285C489.903 285 559.903 325 559.903 325L699.903 325'
              id='Vector'
              fill='none'
              fillRule='evenodd'
              stroke='#fbfeff11'
              strokeWidth='1'
            />
            <path
              d='M420.903 262L3.05176e-05 262'
              id='line-top'
              fill='none'
              fillRule='evenodd'
              stroke='#fbfeff11'
              strokeWidth='1'
            />
            <path
              d='M461.335 255L366.903 255L366.903 0'
              id='line-center-t'
              fill='none'
              fillRule='evenodd'
              stroke='#fbfeff11'
              strokeWidth='1'
            />
            <path
              d='M439.903 255C439.903 255 489.903 255 489.903 255C489.903 255 559.903 225 559.903 225L699.903 225'
              id='Vector'
              fill='none'
              fillRule='evenodd'
              stroke='#fbfeff11'
              strokeWidth='1'
            />
          </g>
        </g>
      </svg>

      <svg
        className='absolute z-10 h-full w-full'
        width='700.9031px'
        height='541px'
        viewBox='0 0 700.9031 541'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='g-1'>
            <stop offset={0} stopColor='white' stopOpacity={0} />
            <stop offset={0.8} stopColor='white' stopOpacity={1} />
            <stop offset={0.8} stopColor='white' stopOpacity={0} />
          </linearGradient>
          <mask id='g-1-mask'>
            <rect
              className='mask-rect delay-0'
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#g-1)'
            />
          </mask>
        </defs>
        <defs>
          <linearGradient id='g-2'>
            <stop offset={0} stopColor='white' stopOpacity={0} />
            <stop offset={0.8} stopColor='white' stopOpacity={1} />
            <stop offset={0.8} stopColor='white' stopOpacity={0} />
          </linearGradient>
          <mask id='g-2-mask'>
            <rect
              className='mask-rect-2 delay-0'
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#g-2)'
            />
          </mask>
        </defs>
        <defs>
          <linearGradient id='g-3'>
            <stop offset={0} stopColor='white' stopOpacity={0} />
            <stop offset={0.8} stopColor='white' stopOpacity={1} />
            <stop offset={0.8} stopColor='white' stopOpacity={0} />
          </linearGradient>
          <mask id='g-3-mask'>
            <rect
              className='mask-rect-3 delay-100'
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#g-3)'
            />
          </mask>
        </defs>
        <defs>
          <linearGradient id='g-4'>
            <stop offset={0} stopColor='white' stopOpacity={0} />
            <stop offset={0.8} stopColor='white' stopOpacity={1} />
            <stop offset={0.8} stopColor='white' stopOpacity={0} />
          </linearGradient>
          <mask id='g-4-mask'>
            <rect
              className='mask-rect-4 delay-100'
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#g-4)'
            />
          </mask>
        </defs>

        <path
          d='M420.903 278L0 278'
          id='line-bottom'
          fill='none'
          fillRule='evenodd'
          stroke='#fbfeff11'
          strokeWidth='1'
        />
        <path
          mask='url(#g-1-mask)'
          d='M461.335 285L366.903 285L366.903 540'
          id='line-center-b'
          fill='none'
          fillRule='evenodd'
          stroke='#1B8EF2'
          strokeWidth='1'
        />
        <path
          mask='url(#g-4-mask)'
          d='M439.903 285C439.903 285 489.903 285 489.903 285C489.903 285 559.903 325 559.903 325L699.903 325'
          id='Vector'
          fill='none'
          fillRule='evenodd'
          stroke='#1B8EF2'
          strokeWidth='1'
        />
        <path
          d='M420.903 262L3.05176e-05 262'
          id='line-top'
          fill='none'
          fillRule='evenodd'
          stroke='#fbfeff11'
          strokeWidth='1'
        />
        <path
          mask='url(#g-2-mask)'
          d='M461.335 255L366.903 255L366.903 0'
          id='line-center-t'
          fill='none'
          fillRule='evenodd'
          stroke='#1B8EF2'
          strokeWidth='1'
        />
        <path
          mask='url(#g-3-mask)'
          d='M439.903 255C439.903 255 489.903 255 489.903 255C489.903 255 559.903 225 559.903 225L699.903 225'
          id='Vector'
          fill='none'
          fillRule='evenodd'
          stroke='#1B8EF2'
          strokeWidth='1'
        />
      </svg>
    </div>
  );
};

export default Line;
