import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";




function App() {
 

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </QueryClientProvider>

    //<h2>sgvrdegertghrthg</h2>
  );
}

export default App
