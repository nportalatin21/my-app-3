import { RedStripe } from "./RedStripe";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { BlueStripe } from "./BlueStripe";
import { RecoilRoot } from "recoil";
import { GreenStripe } from "./GreenStripe";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      {/* Bellow indicated that any components within this

      block will be able to read (share) from the React-Query cache. */}
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
        <RedStripe />

        <BlueStripe />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
}

export default App;
