import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
  } from "@heroui/react";
import { DRAWER_WIDTH } from "@/config/constants";

interface DrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children?: React.ReactNode;
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
}

export default function DrawerComponent({ 
  isOpen, 
  onOpenChange, 
  title = "Drawer Title", 
  children,
  showFooter = true,
  footerContent,
  placement = "left"
}: DrawerProps) {
  return (
    <Drawer 
      isOpen={isOpen} 
      onOpenChange={onOpenChange} 
      placement={placement}
      backdrop="transparent"
    >
      <DrawerContent 
        className="bg-white/80 backdrop-blur-md"
        style={{ width: DRAWER_WIDTH }}
      >
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">{title}</DrawerHeader>
            <DrawerBody>
              {children || (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
              )}
            </DrawerBody>
            {showFooter && (
              <DrawerFooter>
                {footerContent || (
                  <>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </>
                )}
              </DrawerFooter>
            )}
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
  