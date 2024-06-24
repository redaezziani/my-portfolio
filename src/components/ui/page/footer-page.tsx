import React from 'react';

const FooterPage = () => {
  return (
    <footer className="relative z-10 flex w-full max-w-[74rem] flex-col items-start justify-start gap-3">
      <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-400/35 bg-slate-50/30 p-3">
        <div className="flex flex-col items-center justify-start gap-3">
          <h1 className="text-2xl font-medium text-slate-900">
            Join our weeky newsletter
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
