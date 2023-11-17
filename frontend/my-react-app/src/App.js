import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './LoginPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
