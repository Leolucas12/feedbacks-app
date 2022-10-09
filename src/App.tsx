import { FeedBack } from './pages/feedback/Feedback'
import GlobalStyle from "./globals";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <FeedBack />
      <GlobalStyle />
      <Toaster />
    </>
  )
}

export default App
