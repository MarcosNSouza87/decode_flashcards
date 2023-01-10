//create upload context to store the upload state

import React, {createContext, useState} from 'react';

interface IUploadContext {
  upload: boolean;
  setUpload: (upload: boolean) => void;
}

export const UploadContext = createContext<IUploadContext>({
  upload: false,
  setUpload: () => {},
});
export const UploadProvider = ({children}: any) => {
  const [upload, setUpload] = useState(false);

  return (
    <UploadContext.Provider value={{upload, setUpload}}>
      {children}
    </UploadContext.Provider>
  );
};

// Path: src/context/uploadContext.tsx
