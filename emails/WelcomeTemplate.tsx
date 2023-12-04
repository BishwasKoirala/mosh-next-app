import React from 'react'
import { Html ,Body , Container , Text , Link , Preview } from '@react-email/components'

const WelcomeTemplate = ({name} : {name : string}) => {
  return (
    <html>
      <Preview>Welcome to my page</Preview>
      <body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href='https://www.google.com'>GoogleLink</Link>
        </Container>
      </body>
    </html>
  )
}

export default WelcomeTemplate