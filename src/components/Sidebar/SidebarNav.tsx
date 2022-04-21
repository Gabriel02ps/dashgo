import { Stack } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import NavLink from './NavLink'
import NavSection from './NavSection'

export default function SidebarNav() {
  return (
    <Stack spacing='12' alignItems='flex-start'>
        
        <NavSection title='geral'>
          <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href='/users'>Usuários</NavLink>
        </NavSection>

        <NavSection title='automação'>
          <NavLink icon={RiInputMethodLine} href='/forms'>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine} href='/automation'>Automação</NavLink>
        </NavSection>
       
      </Stack>
  )
}
