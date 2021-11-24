import { ChangeEvent, useState } from 'react'

const useInputChange = (initialValue: string): [string, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>(initialValue)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return [value, handleInputChange]
}

export default useInputChange
