import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/register";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="App">
        <Switch>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </div>
    </QueryClientProvider>
  );
}

export default App;