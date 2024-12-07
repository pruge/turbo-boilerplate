import {prisma} from '@repo/database'
import {Button} from '@repo/ui/components/ui/button'

export default async function IndexPage() {
  const users = await prisma.user.findMany()

  return (
    <div>
      <h1>Hello World </h1>
      <Button>button</Button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
