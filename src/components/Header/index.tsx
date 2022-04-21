import { Flex} from "@chakra-ui/react"
import Logo from "./Logo"
import NotificationsNav from "./NotificationsNav"
import Profile from "./Profile"
import Search from "./Search"


export default function Header() {
  return (
    <Flex
      as='header'
      width='100%'
      maxWidth={1480}
      h='20'
      marginX='auto'
      marginTop='4'
      paddingX='6'
      alignItems='center'
    >
      <Logo />

      <Search />

      <Flex alignItems='center' marginLeft='auto'>
        <NotificationsNav />
        <Profile />
      </Flex>

    </Flex>
  )
}
