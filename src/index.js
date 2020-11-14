import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthSevice from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthSevice();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
//Dependency Injection 하는 방법 아래와 같이
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
