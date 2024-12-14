import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import PlayScreen from './play';
import StartScreen from './start';
import DoNotClickScreen from './not';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const queryClient = new QueryClient();


export default function Game(){
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  // Handle route changes and render the appropriate component
  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  const renderComponent = () => {
    switch (currentPage) {
      case '/':
        return <StartScreen />;
      case '/play':
        return <PlayScreen />;
      case '/not':
        return <DoNotClickScreen/>
      default:
        return <div>404: Page not found</div>;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {renderComponent()}
    </QueryClientProvider>
  );
}