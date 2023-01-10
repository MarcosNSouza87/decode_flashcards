//create upload context to store the upload state

import React, {createContext, useState} from 'react';

interface IUploadContext {
  upload: boolean;
  setUpload: (upload: boolean) => void;
  upHome: boolean;
  setUpHome: (upHome: boolean) => void;
}

export const UploadContext = createContext<IUploadContext>({
  upload: false,
  setUpload: () => {},
  upHome: false,
  setUpHome: () => {},
});
export const UploadProvider = ({children}: any) => {
  const [upload, setUpload] = useState(false);
  const [upHome, setUpHome] = useState(false);

  return (
    <UploadContext.Provider value={{upload, setUpload, upHome, setUpHome}}>
      {children}
    </UploadContext.Provider>
  );
};

// Path: src/context/uploadContext.tsx
