
import { Avatar, Menu, Portal, Text, Flex, Box } from "@chakra-ui/react";
import logo from '../../../assets/logo-tracker.png';
function Header() {
  return (
    <div>

         <header style={{ borderBottom: "1px solid #ddd", marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Logo section on the left */}
            <div>
              <img src={logo} alt="Logo" style={{ height: "45px" }} />
            </div>
        
            {/* Avatar and User Info section on the right */}
            <div>
              <Menu.Root positioning={{ placement: "right-end" }}>
                <Menu.Trigger rounded="full" focusRing="none">
                  <Flex align={"center"} gap={3}>
                    <Avatar.Root size="sm">
                      <Avatar.Fallback name="Segun Adebayo" />
                      <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>
                    <Box>
                      <Text textAlign="left" style={{ fontSize: 14 }}>
                        Chandrakanta
                      </Text>
                      <Text style={{ fontSize: 10 }}>chandrakanta@webiators.com</Text>
                    </Box>
                  </Flex>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner
                    style={{
                      position: "absolute",
                      top: "60px",
                      left: "95%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <Menu.Content>
                      <Menu.Item value="account">Profile</Menu.Item>
                      <Menu.Item value="settings">Export</Menu.Item>
                      <Menu.Item value="logout">Logout</Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </div>
          </div>
        </header>
      
    </div>
  )
}

export default Header
