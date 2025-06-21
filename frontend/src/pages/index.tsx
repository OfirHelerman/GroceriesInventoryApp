import { useState } from 'react';
import { Button } from "@heroui/react";
import DrawerComponent from "@/components/Drawer";
import { DRAWER_WIDTH } from "@/config/constants";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div 
        className="transition-transform duration-300 ease-in-out"
        style={{
          transform: isDrawerOpen ? `translateX(${DRAWER_WIDTH})` : 'translateX(0)'
        }}
      >
        <Button 
          color="primary" 
          variant="solid"
          onPress={() => setIsDrawerOpen(true)}
          className="absolute top-4 left-4 z-10"
        >
          Open Drawer
        </Button>
        
        <div className="p-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Groceries Inventory Dashboard</h1>
          <div>Hello World</div>
        </div>
      </div>
      
      <DrawerComponent 
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        title="Inventory Settings"
      >
        <p>This is the reusable drawer content!</p>
        <p>You can customize this content as needed.</p>
      </DrawerComponent>
    </div>
  );
};

export default function IndexPage() {
  return <Dashboard />;
}
