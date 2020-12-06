import * as React from "react"

interface MyUrlFieldProps {
  record?: any
  source: string
}
const MyUrlField: React.FC<MyUrlFieldProps> = ({ record = {}, source }: MyUrlFieldProps) => {
  return (
    <a href={record[source]}>
      {record[source]}
    </a>
    )
}

export default MyUrlField
