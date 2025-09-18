import { Badge } from "@chakra-ui/react";
import AppLayout from "./components/Dashboard/Layout/AppLayout";
import 'rsuite/dist/rsuite.min.css';

export default function App() {
  return (
    <AppLayout>
      <h2>Welcome! Sidebar should be visible.</h2>
      <Badge colorPalette={"green"}>Badge</Badge>
    
    </AppLayout>

  );
}

