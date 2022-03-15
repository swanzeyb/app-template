import { when } from 'scout'

export default function App() {

  return [
    when('start', [
      'idle'
    ])
  ]
}
