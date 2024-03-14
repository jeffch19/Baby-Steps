import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Error from './pages/Error';
import Journal from './pages/Journal';
import CalendarPage from './pages/CalendarPage';
import Login from './pages/Login';
import JournalView from './pages/JournalView';

import { AnimatePresence } from 'framer-motion';
import Signup from './pages/Signup';

function App() {
  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // console.log(token);
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const location = useLocation();
  return (
    <ApolloProvider client={client}>
      <main>
        <Navbar />
        <AnimatePresence initial={true} mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home />}/>
            <Route path='/journal' element={<Journal />}/>
            <Route path='/calendar' element={<CalendarPage />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={< Signup/>} />
            <Route path='*' element={<Error />}/>
            <Route path='/journalview' element={<JournalView/>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </ApolloProvider>
  )
}

export default App;