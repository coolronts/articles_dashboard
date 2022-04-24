import { QueryClient, QueryClientProvider } from "react-query";

import Article from "./pages/Article";
import { ReactQueryDevtools } from 'react-query/devtools'

function App() { 
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <div className="App">
        <Article />
      </div>
    </QueryClientProvider>
  );
}

export default App;
