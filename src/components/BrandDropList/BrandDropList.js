import { SelectPicker } from 'rsuite';

const data = ['Iphone', 'Iphone', 'Iphone', 'Iphone', 'Iphone', 'Iphone', 'Iphone', 'Iphone'].map(
  item => ({
    label: item,
    value: item,
  })
);

function BrandDropList() {
  return (
    <SelectPicker searchable={false} placeholder='Укажите модель ...' data={data} style={{ display: "block" }} />
  )
}

export default BrandDropList;