import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { ItemStatusType } from '~/type'

const { INTEGER, STRING } = DataType

export type Print = {
  id?: number
  name?: string | null
  status?: ItemStatusType
}

@Table({
  modelName: 'Print',
  tableName: 'prints',
  timestamps: true
})
export default class PrintSchema extends Model<Print> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'name' })
  declare name: string

  @Column({ type: STRING(45), field: 'status' })
  declare status: string
}
